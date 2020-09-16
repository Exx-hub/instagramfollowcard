import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Avatar,
  Button,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1.2px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(2),
    borderRadius: "3px",
    maxWidth: 200,
  },
  header: {
    color: theme.palette.grey[400],
    height: "15px",
  },
  avatarContainer: {
    marginBottom: 12,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  image: {
    height: 17,
    width: 17,
  },
  username: {
    fontWeight: theme.typography.fontWeightBold,
  },
  channelNameContainer: {
    marginBottom: 8,
  },
  button: {
    textTransform: "none",
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: "#159bd6",
    color: "#fff",
  },
}));

function InstaFollow() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      className={classes.root}
      alignItems="center"
    >
      <Header classes={classes} />
      <ChannelPhoto classes={classes} />
      <ChannelUserName classes={classes} />
      <ChannelName classes={classes} />
      <FollowButton classes={classes} />
    </Grid>
  );
}

export default InstaFollow;

const Header = ({ classes }) => {
  return (
    <Grid container justify="flex-end">
      <Grid item xs={1}>
        <ClearIcon className={classes.header} />
      </Grid>
    </Grid>
  );
};
const ChannelPhoto = ({ classes }) => (
  <div className={classes.avatarContainer}>
    <Avatar
      alt=""
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTplYDbQt2ZQKDe2_Vk6SWKGNcdFvRhNX1c4w&usqp=CAU"
      className={classes.avatar}
    />
  </div>
);
const ChannelUserName = ({ classes }) => (
  <Grid container justify="center" alignItems="center" spacing={4}>
    <Grid item xs={3}>
      <Typography variant="body2" className={classes.username}>
        natgeo
      </Typography>
    </Grid>
    <Grid item xs={1}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyqulrmIkaZPl0cSMFFOpd2T1jV2FGrheyUhCp10H8hfLh7xf6fqpn40dRr2RGcpfbRJQUAbJ_U2p9J_QZx2PQr4quQhMR7XMADw&usqp=CAU&ec=45702845"
        alt=""
        className={classes.image}
      />
    </Grid>
  </Grid>
);
const ChannelName = ({ classes }) => (
  <div className={classes.channelNameContainer}>
    <Typography color="textSecondary" variant="caption">
      National Geographic
    </Typography>
  </div>
);
const FollowButton = ({ classes }) => (
  <Button
    disableElevation
    variant="contained"
    className={classes.button}
    size="small"
  >
    Follow
  </Button>
);
