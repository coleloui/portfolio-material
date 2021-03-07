import React from "react";
import {
  Grid,
  Typography,
  Input,
  TextField,
  InputAdornment,
  FormControl,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  new: {
    fontWeight: "bold",
    borderBottom: "5px solid #482880",
    filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.25))",
  },
  space: {
    marginTop: "10px",
  },
  colorMe: {
    color: "#482880",
  },
  send: {
    marginTop: "15px",
    color: "#482880",
    fontSize: 25,
    "&:hover": {
      color: "#FFFFFF",
      backgroundColor: "#482880",
    },
  },
  right: {
    marginRight: "15px",
    marginTop: "5px",
  },
  emailer: {
    color: "#482880",
    fontWeight: "bold",
    fontSize: 20,
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

  const shortInsert = () => {
    setTimeout(bigWinInsert, 0);
    setTimeout(clearMe, 5000);
  };

  const bigWinInsert = () => {
    if (bigWin === "success") {
      return (
        <div id="success" className={classes.emailer}>
          <p>Your message has been sent!</p>
        </div>
      );
    } else if (bigWin === "error") {
      return (
        <div id="error" className={classes.emailer}>
          <p>An error occured while submitting the form.</p>
        </div>
      );
    } else return "";
  };

  const clearMe = () => {
    setBigWin("");
  };

  return (
    <Grid container alignItems="center" direction="column" id="contact">
      <Grid item>
        <Typography variant="h3" className={classes.new}>
          Lets Work Together!
        </Typography>
      </Grid>
      <Grid item>{bigWinInsert()}</Grid>
      <Grid item className={classes.space}>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
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
              shortInsert();
            } else {
              setBigWin("error");
              shortInsert();
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
            <Grid item className={classes.right}>
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
                <Button type="submit" className={classes.send}>
                  Send!
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <FormControl>
                <TextField
                  required
                  label="Give me some info!"
                  multiline
                  variant="filled"
                  rows={6}
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                />
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
