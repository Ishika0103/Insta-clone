import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";

function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Home = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  // const [openSignin, setOpensignin] = useState(false);
  const [openSignup, setOpensignup] = useState(false);

  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="app">
      <Modal open={openSignup} onClose={() => setOpensignup(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="app__headerImage"
                src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png"
                alt=""
                width={"180"}
                height={"60"}
              />
            </center>
            <br></br>
            <Input
              placeholder="Name"
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            <br></br>
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <Button type="submit">Sign Up</Button>
          </form>
        </div>
      </Modal>

      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png"
          alt=""
          width={"180"}
          height={"60"}
        />

        {/* onclick onchange is arrow functions used with usestate */}

        <div>
          <Button variant="contained" color="primary">
            Sign In
          </Button>
          <span>&nbsp;&nbsp;</span>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setOpensignup(true);
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
