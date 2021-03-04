import React from "react";
import {
  Grid,
  Typography,
  Input,
  TextField,
  InputAdornment,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  new: {
    fontWeight: "bold",
    borderBottom: "5px solid #482880",
  },
  colorMe: {
    color: "#482880",
  },
}));

function getRandomString() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

const initialFormData = { name: "", email: "", message: "" };
Object.freeze(initialFormData);

export default function Contact() {
  const classes = useStyles();
  const [contactSubject, setContactSubject] = React.useState("placeholder");
  const [formData, updateFormData] = React.useState({
    ...initialFormData,
  });
  const [bigWin, setBigWin] = React.useState("");

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };
  return (
    <Grid container alignItems="center" direction="column" id="contact">
      <Grid item>
        <Typography variant="h3" className={classes.new}>
          Lets Work Together!
        </Typography>
      </Grid>
      <Grid item>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            console.log(e.target);
            formData.subject = contactSubject;
            setBigWin("");
            const res = await fetch("/.netlify/functions/contact", {
              method: "POST",
              body: JSON.stringify(formData),
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (res.ok) {
              // alert("Message Sent");
              setBigWin("success");
              updateFormData(() => initialFormData);
            } else {
              setBigWin("error");
            }
            console.log("res", res);
          }}
        >
          <input
            type="hidden"
            className="form-control"
            name={getRandomString()}
            autoComplete={getRandomString()}
            value={contactSubject}
            onChange={(e) => setContactSubject(e.target.value)}
            style={{ display: "none" }}
          />
          <Grid item container alignItems="center" direction="row">
            <Grid item>
              <Grid container direction="column">
                <FormControl>
                  <Input
                    required
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle className={classes.colorMe} />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl>
                  <Input
                    required
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    startAdornment={
                      <InputAdornment position="start">
                        <EmailIcon className={classes.colorMe} />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid item>
              <FormControl>
                <TextField
                  label="Give me some info!"
                  multiline
                  rows={4}
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                />
              </FormControl>
            </Grid>
          </Grid>
          {/* <input
              className="shadow appearance-none border rounded py-2 px-3 w-full mb-2 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              value={formData.name}
              placeholder="John Snow"
              onChange={handleChange}
            /> */}
          {/* <label htmlFor="email" className="block text-sm font-bold underline">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 w-full mb-2 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            type="email"
            value={formData.email}
            placeholder="john.snow@placeholder.com"
            onChange={handleChange}
          /> */}
          {/* <label
            htmlFor="message"
            className="block text-sm font-bold underline"
          >
            Message
          </label> */}
          {/* <textarea
            className="form-textarea block shadow appearance-none border rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            name="message"
            value={formData.message}
            placeholder="Hello!"
            onChange={handleChange}
          ></textarea>
          <button
            className="bg-teal-400 hover:bg-teal-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-4 border-teal-600"
            type="submit"
          >
            Send
          </button> */}
          <div>
            {bigWin === "success" && (
              <div id="success">
                <p>Your message has been sent!</p>
              </div>
            )}
            {bigWin === "error" && (
              <div id="error">
                <p>An error occured while submitting the form.</p>
              </div>
            )}
          </div>
        </form>
      </Grid>
    </Grid>
  );
}
