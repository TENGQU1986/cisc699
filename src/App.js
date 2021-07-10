import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, provider } from "./firebase/firebase";
import "./App.css";
import Login from "./Login";
import Parent from "./Parent";
import Loading from "./Loading";
import LazyLoading from "./LazyLoading";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Header from "./Header";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Comments from "./Comments";
import ServerSide from "./ServerSide";
import Demo from "./Demo";
import ClientSide from "./ClientSide";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const App = () => {
  const [user, loading] = useAuthState(auth);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [step, setStep] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (!user) return <Login />;
  if (loading) return <Loading />;

  const handleStepChange = (e) => {
    if (e.target.innerHTML === 'Server-side') {
      setStep(0)
    } else if (e.target.innerHTML === 'Client-side') {
      setStep(1)
    } else if (e.target.innerHTML === 'Demo') {
      setStep(2)
    }
    console.log(e.target.innerHTML)
  }

  return (
    <div>
      <Header user={user} />
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}

        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Server-side" onClick={handleStepChange}/>
            <Tab label="Client-side" onClick={handleStepChange}/>
            <Tab label="Demo" onClick={handleStepChange}/>
          </Tabs>
        </Paper>
        {/* <Parent user={user} /> */}
        {
          step === 0 ? (<ServerSide />) : (
            step === 1 ? (<ClientSide />) : (<Demo user={user} />)
          ) 
        }
        <Comments />
      </Container>
    </div>
  );
};

export default App;
