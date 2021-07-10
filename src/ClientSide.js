import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const ClientSide = () => {
  const useStyles = makeStyles({
    root: {
      width: "100%",
      maxWidth: 800,
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Reduce Rendering Times
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Reducing the unnecessary rendering times is a great way to improve performance. Modern websites are most component based and there will be a number of unnecessary rendering which will impact performance a lot. You can see a demo from DEMO tab to get the basic idea how we can improve the performance by using react memo hook.
      </Typography>

      <Typography variant="h4" gutterBottom>
        Don't rendering in one shot
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Sometimes user doesn't need all the data or he will redirects to another page shortly, so it is not so wise to render to whole list for user since it will increase the wait time for user. LazyLoading can be used to shorten the wait time. In this particular case, we will only render 5 items out of 200. User can also choose how many items they would like to render at the very first rendering.
      </Typography>

      <Typography variant="h4" gutterBottom>
        Use Redis cache insdead of making API calls every time
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Redis cache is a super fast noSQL database. In the demo section, you can clear see how much time we can save if we cache the data we initially fetched and then only read data from the cache until it got expired.
      </Typography>

      <Typography variant="h4" gutterBottom>
        Make the page faily short and simple
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        A user can only view a small section of a page, so organizing those components wisely and limited the sections rendering is also a great idea to improve the performance.
      </Typography>
    </div>
  );
};

export default ClientSide;
