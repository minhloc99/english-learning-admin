import * as Yup from "yup";

import { VinaSignIn, VinaSignUp, VinaControl, ExecutedLesson } from "../model/ViewModels";

export const signInConfig = {
    layout: {
        email: Object.assign(new VinaControl(), {
            id: "email",
            type: "text",
            name: "email",
            label: "Email"
        }),
        password: Object.assign(new VinaControl(), {
            id: "password",
            type: "password",
            name: "password",
            label: "Password"
        })
    },
    validationSchema: Object.assign(new VinaSignIn(), {
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    }),
    initialValues: Object.assign(new VinaSignIn(), {
        email: "",
        password: ""
    }),
};

export const signUpConfig = {
    layout: {
        firstName: Object.assign(new VinaControl(), {
            id: "firstName",
            type: "text",
            name: "firstName",
            label: "First name"
        }),
        lastName: Object.assign(new VinaControl(), {
            id: "lastName",
            type: "text",
            name: "lastName",
            label: "Last name"
        }),
        email: Object.assign(new VinaControl(), {
            id: "email",
            type: "text",
            name: "email",
            label: "Email"
        }),
        password: Object.assign(new VinaControl(), {
            id: "password",
            type: "password",
            name: "password",
            label: "Password"
        })
    },
    validationSchema: Object.assign(new VinaSignUp(), {
        firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    }),
    initialValues: Object.assign(new VinaSignUp(), {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }),
};

export const ExecutedLessonFormConfig = {
    layout: {
        planStartDateTime: Object.assign(new VinaControl(), {
            id: "planStartDateTime",
            type: "datetime-local",
            name: "planStartDateTime",
            label: "Start at:"
        }),
        planEndDateTime: Object.assign(new VinaControl(), {
            id: "planEndDateTime",
            type: "datetime-local",
            name: "planEndDateTime",
            label: "Finish at:"
        }),
        templateLessonId: Object.assign(new VinaControl(), {
            id: "templateLessonId",
            name: "templateLessonId",
            label: "Template Lesson",
            options: []
        })
    },
    validationSchema: Object.assign(new ExecutedLesson(), {
        templateLessonId: Yup.string()
            .required("Required"),
    }),
    initialValues: Object.assign(new ExecutedLesson(), {
        templateLessonId: "",
        planStartDateTime: "",
        planEndDateTime: ""
    }),
};