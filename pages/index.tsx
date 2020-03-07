import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import { DialogTitle, Dialog, DialogContent, DialogActions } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        CodeDoBo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(4)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export interface AddToServerProps {
  open: boolean;
  onClose: () => void;
}

function AddToServer(props: AddToServerProps) {
  const classes = useStyles();
  const { open, onClose } = props;

  return (
    <Dialog aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="customized-dialog-title">Add to server</DialogTitle>
      <DialogContent dividers>
        <Alert severity="info">That is a private bot!</Alert>
        <Typography gutterBottom>
          Ask{" "}
          <Link href="https://github.com/CodeDoctorDE">
            CodeDoctor
          </Link>{" "}
          to add it to your server!
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default function Home() {
  const classes = useStyles();
  const [openInfo, setOpenInfo] = React.useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <AddToServer open={openInfo} onClose={() => setOpenInfo(false)} />
      <AppBar position="relative">
        <Toolbar>
          <DashboardOutlinedIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            CodeDoBo Web Interface
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              The web interface for CodeDoBo
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Configure all settings from here and use it!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setOpenInfo(true)}
                  >
                    Add to server
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Login with Discord
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
          {/* End hero unit */}
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          github/codedobo
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          A cool discord bot
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
