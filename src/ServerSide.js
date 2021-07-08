import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const ServerSide = () => {
  const useStyles = makeStyles({
    root: {
      width: "100%",
      maxWidth: 500,
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Server Performance
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        The performance of a web server directly impacts website’s performance.
        This is fairly easy to understand. Imagine a server normally takes 1
        second to respond vs another server normally takes 5 second. In most
        cases, your server provider will be responsible for maintaining the
        servers. Basically, this factor we cannot do much from a website
        perspective.
      </Typography>

      <Typography variant="h4" gutterBottom>
        Server Location
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Server Location is another factor that can impact a website’s
        performance. If one website hosts in US and a European user is trying to
        interact with this website, he/she may expect a slower response speed
        than a US customer does.
      </Typography>
    </div>
  );
};

export default ServerSide;
