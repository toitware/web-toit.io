import {
  Button,
  Checkbox,
  createStyles,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControlLabel,
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    errorMessage: {
      color: theme.palette.error.main,
    },
    actions: {
      flexWrap: "wrap",
      padding: theme.spacing(2),
    },
    privacyPolicy: {
      fontSize: "0.75rem",
      margin: 0,
      width: "100%",
      textAlign: "center",
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(4),
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
  name: string;
  email: string;
  company?: string;
  subscribedToNewsletter: boolean;
}

/** The schema used to validate the form values. */
const validationSchema: yup.SchemaOf<SignUpValues> = yup
  .object({
    name: yup.string().min(2, "Your name must be at least 2 characters").required("Name is required"),
    email: yup.string().email("Enter a valid email").required("Email is required"),
    company: yup.string().min(2, "Your company must be at least 2 characters"),
    subscribedToNewsletter: yup.bool().defined(),
  })
  .defined();

type SignUpFormProps = {
  handleClose: () => void;
  handleSuccess: () => void;
};

function SignUpForm({ handleClose, handleSuccess }: SignUpFormProps): JSX.Element {
  const classes = useStyles();

  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | undefined>();

  async function submitForm(values: SignUpValues) {
    setIsSending(true);
    let error = "";
    try {
      const body = JSON.stringify(values);
      const response = await fetch("https://console.toit.io/forms/create_organization", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
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
      if (error !== "") analytics.track("Signup Failed", { values, error: error });
      else analytics.track("Signup Completed", values);
    }
  }

  const formik = useFormik<SignUpValues>({
    initialValues: {
      name: "",
      email: "",
      company: "",
      subscribedToNewsletter: false,
    },
    validationSchema: validationSchema,
    onSubmit: submitForm,
  });

  const companyHelperText = (formik.touched.company && formik.errors.company) ?? "(Optional)";
  return (
    // Sticking novalidate on the form to prevent browser validation. Otherwise
    // a browser built in email validation popup appears and it doesn't look
    // good.
    <form onSubmit={formik.handleSubmit} noValidate>
      <DialogContent>
        <DialogContentText>
          After submitting this form, you&apos;ll receive an email with the instructions to set your password and get
          access to the platform.
          <br />
          <br />
        </DialogContentText>

        {error && <DialogContentText className={classes.errorMessage}>{error}</DialogContentText>}

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              autoFocus
              id="name"
              label="Full name"
              type="text"
              fullWidth
              required
              disabled={isSending}
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              autoFocus
              id="email"
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
          <Grid item xs={6}>
            <TextField
              autoFocus
              id="company"
              label="Company name"
              type="text"
              fullWidth
              disabled={isSending}
              value={formik.values.company}
              onChange={formik.handleChange}
              error={formik.touched.company && Boolean(formik.errors.company)}
              helperText={companyHelperText}
            />
          </Grid>
        </Grid>

        <DialogContentText className={classes.emailCheckbox}>
          <FormControlLabel
            name="subscribedToNewsletter"
            value={formik.values.subscribedToNewsletter}
            disabled={isSending}
            onChange={formik.handleChange}
            control={<Checkbox color="primary" />}
            label="I want to receive the Toit newsletter."
            labelPlacement="end"
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button autoFocus onClick={handleClose} color="secondary" disabled={isSending}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" autoFocus disabled={isSending}>
          Sign Up
        </Button>
        <Typography className={classes.privacyPolicy} component="div">
          <div>
            By clicking the “Sign Up” button, you are creating a Toit account, and you agree to our{" "}
            <Link to="/terms-of-service">terms or service</Link> and <Link to="/privacy-policy">privacy policy</Link>.
          </div>
        </Typography>
      </DialogActions>
    </form>
  );
}

export default SignUpForm;
