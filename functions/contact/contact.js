const mongoose = require("mongoose");
const { escape, isEmail, normalizeEmail } = require("validator");
const { inspect } = require("util");
const { SES, AWSError } = require("aws-sdk");
const { SendEmailRequest, SendEmailResponse } = require("aws-sdk/clients/ses");

const {
  SES_EMAIL,
  SES_ACCESS_KEY,
  SES_SECRET_KEY,
  SES_REGION,
  SES_CHARSET,
} = process.env;

const Schema = mongoose.Schema;
const uri = process.env.PORTFOLIO_DB_LOGIN;

const sendEmailNotification = async (notification) => {
  const SES_CONFIG = {
    region: SES_REGION,
    accessKeyId: SES_ACCESS_KEY,
    secretAccessKey: SES_SECRET_KEY,
  };

  const ses = new SES(SES_CONFIG);

  const params = {
    Source: SES_EMAIL,
    Destination: {
      ToAddresses: notification.destinations,
    },
    Message: {
      Subject: {
        Data: notification.subject,
        Charset: SES_CHARSET,
      },
      Body: {
        Html: {
          Data: notification.html,
          Charset: SES_CHARSET,
        },
      },
    },
  };

  const data = await ses.sendEmail(params).promise();

  console.log("sendEmailNotification data", data);

  return true;
};

mongoose.connect(uri, { useNewUrlParser: true });

const messageSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  message: {
    type: String,
    required: true,
  },
  time: { type: Date, default: Date.now },
});
const Message = mongoose.model("Message", messageSchema);

exports.handler = async function (event, context) {
  try {
    const req = JSON.parse(event.body);
    console.log("req");
    console.log(req);

    if (!(req.subject === "placeholder")) {
      throw new Error("Invalid honeypot.");
    }

    const checkEmail = isEmail(req.email);
    const message = new Message();

    if (checkEmail) {
      message.email = normalizeEmail(req.email);
    } else {
      throw new Error("Invalid email address.");
    }

    message.name = escape(req.name);
    message.message = escape(req.message);

    console.log("saving message... message: ", message);
    const savedMessage = await message.save();
    console.log("message saved! savedMessage:", savedMessage);

    const mail = {
      destinations: ["coleloui18@gmail.com"],
      subject: "Portfolio Contact Form Submission",
      html: `<h1>Portfolio Contact Form Submission</h1>
<h3><b>Name:</b> ${message.name}</h3>
<h3><b>Email:</b> ${message.email}</h3>
<h3><b>Message:</b></h3>
<p>${message.message}</p>
<h3><b>savedMessage:</b></h3>
<p>${JSON.stringify(savedMessage, null, 4)}</p>`,
    };

    try {
      console.log("sending email... email:", mail);
      const mailInfo = await sendEmailNotification(mail);
      if (!mailInfo) {
        throw new Error("Failed to send email notification.");
      }
    } catch (err) {
      console.error(err);
      return { statusCode: 500, body: err.toString() };
    } finally {
      return { statusCode: 200, body: "" };
    }
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: "" };
  }
};
