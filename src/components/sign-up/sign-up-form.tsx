import {
  createStyles,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import { Link } from "gatsby";
import React, { useState } from "react";
import * as yup from "yup";
import Button from "../button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    errorMessage: {
      color: theme.palette.error.main,
    },
    actions: {
      flexWrap: "wrap",
      marginTop: "3rem",
      padding: theme.spacing(2),
    },
    privacyPolicy: {
      fontSize: "0.75rem",
      margin: 0,
      width: "100%",
      textAlign: "center",
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(2),
      opacity: 0.5,
      "& div": {
        maxWidth: "30em",
        margin: "0 auto",
      },
    },
    emailCheckbox: {
      marginTop: "3rem",
    },
  })
);

/** The values controlled by this form. */
interface SignUpValues {
  email: string;
  firstname: string;
  lastname: string;
}

/** The schema used to validate the form values. */
const validationSchema: yup.SchemaOf<SignUpValues> = yup
  .object({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
  })
  .defined();

type SignUpFormProps = {
  handleClose: () => void;
  handleSuccess: () => void;
  targetUrl: string;
  campaign: string;
};

function SignUpForm({ handleClose, handleSuccess, targetUrl, campaign }: SignUpFormProps): JSX.Element {
  const classes = useStyles();

  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | undefined>();

  async function submitForm(values: SignUpValues) {
    setIsSending(true);
    let error = "";
    try {
      const body = JSON.stringify({ fields: values });
      const response = await fetch(targetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
        credentials: "include",
      });
      if (!response.ok) {
        throw Error(await response.text());
      }

      handleSuccess();
    } catch (e) {
      error = "Something went wrong. Please try again later.";
      if (e instanceof Error) {
        error += ` Error: ${e.message}`;
      }
      setError(error);
      setIsSending(false);
    } finally {
      if (error !== "") {
        analytics.track(`Signup ${campaign} Failed`, { values, error: error });
      } else {
        analytics.track(`Signup ${campaign} Succeeded`, values);
      }
    }
  }

  const formik = useFormik<SignUpValues>({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
    },
    validationSchema: validationSchema,
    onSubmit: submitForm,
  });

  return (
    // Sticking novalidate on the form to prevent browser validation. Otherwise
    // a browser built in email validation popup appears and it doesn't look
    // good.
    <form onSubmit={formik.handleSubmit} noValidate>
      <DialogContent>
        {error && <DialogContentText className={classes.errorMessage}>{error}</DialogContentText>}

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              autoFocus
              id="firstname"
              name="firstname"
              autoComplete="firstname"
              label="First name"
              type="text"
              fullWidth
              required
              disabled={isSending}
              value={formik.values.firstname}
              onChange={formik.handleChange}
              error={formik.touched.firstname && Boolean(formik.errors.firstname)}
              helperText={formik.touched.firstname && formik.errors.firstname}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              autoFocus
              id="lastname"
              name="lastname"
              autoComplete="lastname"
              label="Last name"
              type="text"
              fullWidth
              required
              disabled={isSending}
              value={formik.values.lastname}
              onChange={formik.handleChange}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              autoFocus
              id="email"
              name="email"
              autoComplete="email"
              label="Email address"
              type="email"
              fullWidth
              required
              disabled={isSending}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button type="button" autoFocus onClick={handleClose} variant="outlined" disabled={isSending}>
          Cancel
        </Button>
        &nbsp;
        <Button type="submit" variant="contained" autoFocus disabled={isSending}>
          Sign up
        </Button>
        <Typography className={classes.privacyPolicy} component="div">
          <div>
            By clicking the “Sign up” button, you agree to our
            <br /> <Link to="/terms-of-service">terms of service</Link> and{" "}
            <Link to="/privacy-policy">privacy policy</Link>.
          </div>
        </Typography>
      </DialogActions>
    </form>
  );
}

export default SignUpForm;
