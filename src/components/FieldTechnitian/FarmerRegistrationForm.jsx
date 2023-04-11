import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './FarmerRegistrationForm.css'

const initialValues = {
    name: "",
    fatherName: "",
    village: "",
    upjilla: "",
    gilla: "",
    nid: "",
    mobileNo: "",
    location: "",
    plantation: "",
    target: "",
    accountNo: "",
    bankName: "",
    branch: "",
    routingNo: "",
    farmerPic: null,
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    fatherName: Yup.string().required("Father name is required"),
    village: Yup.string().required("Village is required"),
    upjilla: Yup.string().required("Upjilla is required"),
    gilla: Yup.string().required("Gilla is required"),
    nid: Yup.string().required("NID is required"),
    mobileNo: Yup.string()
        .required("Mobile no is required")
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be exactly 10 digits")
        .max(10, "Must be exactly 10 digits"),
    location: Yup.string().required("Location is required"),
    plantation: Yup.number()
        .required("Plantation is required")
        .positive("Must be a positive number"),
    target: Yup.number()
        .required("Target is required")
        .positive("Must be a positive number"),
    accountNo: Yup.string().required("Account no is required"),
    bankName: Yup.string().required("Bank name is required"),
    branch: Yup.string().required("Branch is required"),
    routingNo: Yup.string().required("Routing no is required"),
    farmerPic: Yup.mixed().required("Farmer picture is required"),
});

const onSubmit = (values) => {
    console.log(values);
    // Here you can submit the form data to the backend
};

const FarmerRegistrationForm = () => {
    return (
        <div className="form-container fadeInUp">
            <h1>Farmer Registration Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ values, errors, touched, setFieldValue }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field type="text" name="name" />
                            <ErrorMessage name="name" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="fatherName">Father Name</label>
                            <Field type="text" name="fatherName" />
                            <ErrorMessage name="fatherName" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="village">Village</label>
                            <Field type="text" name="village" />
                            <ErrorMessage name="village" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="upjilla">Thana/Upjilla</label>
                            <Field type="text" name="upjilla" />
                            <ErrorMessage name="upjilla" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="gilla">Gilla</label>
                            <Field type="text" name="gilla" />
                            <ErrorMessage name="gilla" className="error-message" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="nid">NID</label>
                        <Field type="text" name="nid" />
                        <ErrorMessage name="nid" className="error-message" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mobileNo">Mobile No</label>
                        <Field type="text" name="mobileNo" />
                        <ErrorMessage name="mobileNo" className="error-message" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <Field type="text" name="location" />
                        <ErrorMessage name="location" className="error-message" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="plantation">Plantation</label>
                        <Field type="number" name="plantation" />
                        <ErrorMessage name="plantation" className="error-message" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="target">Target</label>
                        <Field type="number" name="target" />
                        <ErrorMessage name="target" className="error-message" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="accountNo">Account No</label>
                        <Field type="text" name="accountNo" />
                        <ErrorMessage name="accountNo" className="error-message" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="bankName">Bank Name</label>
                        <Field type="text" name="bankName" />
                        <ErrorMessage name="bankName" className="error-message" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="branch">Branch</label>
                        <Field type="text" name="branch" />
                        <ErrorMessage name="branch" className="error-message" style={{color:'red'}}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="routingNo">Routing No</label>
                        <Field type="text" name="routingNo" />
                        <ErrorMessage name="routingNo" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="farmerPic">Farmer Picture</label>
                        <Field
                            type="file"
                            name="farmerPic"
                            onChange={(event) => {
                                setFieldValue("farmerPic", event.currentTarget.files[0]);
                            }}
                        />
                        <ErrorMessage name="farmerPic" className="error-message" />
                    </div>

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);
};

export default FarmerRegistrationForm;
