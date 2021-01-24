import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { ExecutedLessonFormConfig } from "../../config/formConfigs";
import { VinaDateTimePicker, VinaSelect } from "../common/VinaControls";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    templateLesson: {
        width: '100%'
    }
}));

export default function ExecutedLessonForm() {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: ExecutedLessonFormConfig.initialValues,
        validationSchema: Yup.object(ExecutedLessonFormConfig.validationSchema),
        onSubmit: (values) => {
            console.log(formik);
            alert(JSON.stringify(values, null, 2));
        },
    });

    return <section className={classes.paper}>
        <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <VinaDateTimePicker
                        variant="outlined"
                        disabled
                        fullWidth
                        autoFocus
                        {...ExecutedLessonFormConfig.layout.planStartDateTime}
                        {...formik.getFieldProps(ExecutedLessonFormConfig.layout.planStartDateTime.id)}
                        formik={formik}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <VinaDateTimePicker
                        variant="outlined"
                        disabled
                        fullWidth
                        {...ExecutedLessonFormConfig.layout.planEndDateTime}
                        {...formik.getFieldProps(ExecutedLessonFormConfig.layout.planEndDateTime.id)}
                        formik={formik}
                    />
                </Grid>
                <Grid item xs={12}>
                    <VinaSelect
                        fullWidth
                        autoFocus
                        className={classes.templateLesson}
                        {...ExecutedLessonFormConfig.layout.templateLessonId}
                        {...formik.getFieldProps(ExecutedLessonFormConfig.layout.templateLessonId.id)}
                        formik={formik}
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>
                Create
                </Button>
        </form>
    </section>
}