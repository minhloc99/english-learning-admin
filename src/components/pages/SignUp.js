import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { signUpConfig } from '../../config/formConfigs';
import { VinaText } from '../common/VinaControls';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: signUpConfig.initialValues,
    validationSchema: Yup.object(signUpConfig.validationSchema),
    onSubmit: (values) => {
      console.log(formik);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <VinaText
                variant="outlined"
                autoComplete="fname"
                fullWidth
                autoFocus
                {...signUpConfig.layout.firstName}
                {...formik.getFieldProps(signUpConfig.layout.firstName.id)}
                formik={formik}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <VinaText
                variant="outlined"
                autoComplete="lname"
                fullWidth
                {...signUpConfig.layout.lastName}
                {...formik.getFieldProps(signUpConfig.layout.lastName.id)}
                formik={formik}
              />
            </Grid>
            <Grid item xs={12}>
              <VinaText
                variant="outlined"
                autoComplete="email"
                fullWidth
                {...signUpConfig.layout.email}
                {...formik.getFieldProps(signUpConfig.layout.email.id)}
                formik={formik}
              />
            </Grid>
            <Grid item xs={12}>
              <VinaText
                variant="outlined"
                autoComplete="current-password"
                fullWidth
                {...signUpConfig.layout.password}
                {...formik.getFieldProps(signUpConfig.layout.password.id)}
                formik={formik}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}