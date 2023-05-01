import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage, setFieldValue } from "formik";
import * as Yup from "yup";
import './FarmerRegistrationForm.css'
import { useState } from "react";
import { UilLocationArrow } from "@iconscout/react-unicons";
import { toast } from "react-toastify";
import axios from "axios";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),
    fatherName: Yup.string()
        .required("Father name is required")
        .min(3, "Father name must be at least 3 characters"),
    village: Yup.string().required("Village is required"),
    upjilla: Yup.string().required("Upjilla is required"),
    gilla: Yup.string().required("Gilla is required"),
    nid: Yup.string()
        .required("NID is required")
        .matches(/^[0-9]+$/, "NID must be a number")
        .min(10, "NID must be at least 10 digits"),
    mobileNo: Yup.string()
        .required("Mobile no is required")
        .matches(/^[0-9]+$/, "Mobile no must be a number")
        .min(10, "Mobile no must be exactly 10 digits")
        .max(10, "Mobile no must be exactly 10 digits"),
    location: Yup.string().required("Location is required"),
    plantation: Yup.number()
        .required("Plantation is required")
        .positive("Plantation must be a positive number"),
    target: Yup.number()
        .required("Target is required")
        .positive("Target must be a positive number"),
    accountNo: Yup.string()
        .required("Account no is required")
        .matches(/^[0-9]+$/, "Account no must be a number"),
    bankName: Yup.string().required("Bank name is required"),
    branch: Yup.string().required("Branch is required"),
    routingNo: Yup.string()
        .required("Routing no is required")
        .matches(/^[0-9]+$/, "Routing no must be a number"),

});





const FarmerRegistrationForm = () => {
    const [locationError, setLocationError] = useState("");


    const [isFetchingLocation, setIsFetchingLocation] = useState(false);
    const [locationFieldValue, setLocationFieldValue] = useState("");

    const [selectedJilla, setSelectedJilla] = useState("");
    const [availableUpjilas, setAvailableUpjilas] = useState([]);

    const jillaUpjilaMap = {
        Chittagong: ["CTGUpjila1", "CTGUpjila2", "CTGUpjila3"],
        Rajshahi: ["RAJUpjila4", "RAJUpjila5"],
        Kustia: ["KUUpjila6", "KUUpjila7"],
        Manikgonj: ["MKUpjila8", "MKUpjila9", "MkUpjila10"]
    };

    const handleSubmit = async (values, { resetForm }) => {
        try {
          // Make an API call using axios
          const response = await axios.post('http://localhost:5001/add-farmers', values);
          console.log(response.data); // Handle the response as needed
          toast.success('Form submitted successfully');
          resetForm(); // Reset the form after successful submission
        } catch (error) {
          console.error(error);
          toast.error('An error occurred while submitting the form');
        }
      };


    const getLocation = (setFieldValue) => {
        setIsFetchingLocation(true);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const location = `${latitude},${longitude}`;
                    setLocationFieldValue(location);
                    setFieldValue("location", location);
                    setIsFetchingLocation(false);
                },
                (error) => {
                    setIsFetchingLocation(false);
                    setLocationError(error.message);
                }
            );
        } else {
            setLocationError("Geolocation is not supported by this browser.");
            setIsFetchingLocation(false);
        }
    };
    return (
        <div className="form-container fadeInUp">
            <h1>Register Farmer</h1>
            <Formik
                initialValues={{
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
                }}
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({  setFieldValue }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field type="text" name="name" />
                            <div className="error-message" >
                                <ErrorMessage name="name" />
                            </div>

                        </div>

                        <div className="form-group">
                            <label htmlFor="fatherName">Father Name</label>
                            <Field type="text" name="fatherName" />
                            <div className="error-message">
                                <ErrorMessage name="fatherName" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="village">Village</label>
                            <Field type="text" name="village" />
                            <div className="error-message">
                                <ErrorMessage name="village" className="error-message" />
                            </div>

                        </div>

                        <div className="form-group">
                            <label htmlFor="jilla">Jilla</label>
                            <Field
                                as="select"
                                name="jilla"
                                value={selectedJilla}
                                onChange={(e) => {
                                    const jilla = e.target.value;
                                    setSelectedJilla(jilla);
                                    setAvailableUpjilas(jillaUpjilaMap[jilla]);
                                }}
                            >
                                <option value="">Select a Jilla</option>
                                <option value="Chittagong">Chittagong</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="Kustia">Kustia</option>
                                <option value="Manikgonj">Manikgonj</option>
                            </Field>
                            <div className="error-message">
                                <ErrorMessage name="jilla" />
                            </div>
                        </div>
                        {selectedJilla && (
                            <div className="form-group">
                                <label htmlFor="upjila">Upjila</label>
                                <Field as="select" name="upjila">
                                    <option value="">Select an Upjila</option>
                                    {availableUpjilas.map((upjila) => (
                                        <option key={upjila} value={upjila}>
                                            {upjila}
                                        </option>
                                    ))}
                                </Field>
                                <div className="error-message">
                                    <ErrorMessage name="upjila" />
                                </div>
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="nid">NID</label>
                            <Field type="text" name="nid" />
                            <div className="error-message">
                                <ErrorMessage name="nid" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="mobileNo">Mobile No</label>
                            <Field type="text" name="mobileNo" />
                            <div className="error-message">
                                <ErrorMessage name="mobileNo" />

                            </div>

                        </div>

                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <Field type="text" name="location" value={locationFieldValue} />
                            {locationError && (
                                <div className="error-message">{locationError}</div>
                            )}
                            <button
                                type="button"
                                onClick={() => getLocation(setFieldValue)}
                                disabled={isFetchingLocation}
                                className="location-btn"
                            >
                                {isFetchingLocation ? "Fetching location..." : <UilLocationArrow />}
                            </button>
                        </div>

                        <div className="form-group">
                            <label htmlFor="plantation">Plantation</label>
                            <Field type="number" name="plantation" />
                            <div className="error-message" >
                                <ErrorMessage name="plantation" />

                            </div>

                        </div>

                        <div className="form-group">
                            <label htmlFor="target">Target</label>
                            <Field type="number" name="target" />
                            <div className="error-message" >
                                <ErrorMessage name="target" />
                            </div>

                        </div>
                        <div className="form-group">
                            <label htmlFor="accountNo">Account No</label>
                            <Field type="text" name="accountNo" />
                            <div className="error-message" >
                                <ErrorMessage name="accountNo" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="bankName">Bank Name</label>
                            <Field type="text" name="bankName" />
                            <div className="error-message">
                                <ErrorMessage name="bankName" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="branch">Branch</label>
                            <Field type="text" name="branch" />
                            <div className="error-message">
                                <ErrorMessage name="branch" />

                            </div>

                        </div>

                        <div className="form-group">
                            <label htmlFor="routingNo">Routing No</label>
                            <Field type="text" name="routingNo" />
                            <div className="error-message">
                                <ErrorMessage name="routingNo" />

                            </div>

                        </div>

                        <div className="form-group">
                            <label htmlFor="farmerPic">Farmer Picture</label>
                            <input
                                type="file"
                                name="farmerPic"
                                accept="image/*"
                                onChange={(event) => {
                                    setFieldValue("farmerPic", event.currentTarget.files[0]);
                                }}
                                capture
                            />
                            <div className="error-message">
                                <ErrorMessage name="farmerPic" />
                            </div>
                        </div>
                        <button type="submit">Submit</button>

                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FarmerRegistrationForm;


// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const FarmerRegistrationForm = () => {
//   const handleSubmit = async (values, { resetForm }) => {
//     try {
//       // Make an API call using axios
//       const response = await axios.post('http://localhost:5001/add-farmers', values);
//       console.log(response.data); // Handle the response as needed
//       toast.success('Form submitted successfully');
//       resetForm(); // Reset the form after successful submission
//     } catch (error) {
//       console.error(error);
//       toast.error('An error occurred while submitting the form');
//     }
//   };

//   return (
//     <Formik
//       initialValues={{ name: '', email: '', address: '' }}
//       onSubmit={handleSubmit}
//     >
//       <Form>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <Field type="text" id="name" name="name" />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <Field type="email" id="email" name="email" />
//         </div>
//         <div>
//           <label htmlFor="address">Address:</label>
//           <Field type="text" id="address" name="address" />
//         </div>
//         <ErrorMessage name="name" component="div" />
//         <ErrorMessage name="email" component="div" />
//         <ErrorMessage name="address" component="div" />

//       </Form>
//     </Formik>
//   );
// };

// export default FarmerRegistrationForm;

// import * as Yup from 'yup';
// import './FarmerRegistrationForm.css'
// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const FarmerRegistrationForm = () => {
//     const fieldNames = [
//         'name',
//         'fatherName',
//         'village',
//         'upjilla',
//         'gilla',
//         'nid',
//         'mobileNo',
//         'location',
//         'plantation',
//         'target',
//         'accountNo',
//         'bankName',
//         'branch',
//     ];

//     const validationSchema = Yup.object({
//         name: Yup.string().required('Name is required'),
//         fatherName: Yup.string().required("Father's Name is required"),
//         // Add additional validation rules for other fields
//         phone: Yup.string()
//             .required('Phone number is required')
//             .matches(/^\d{10}$/, 'Phone number must be 10 digits'),
//         nid: Yup.string()
//             .required('NID is required')
//             .matches(/^\d{6,}$/, 'NID must be at least 6 digits'),
//     });

//     const handleSubmit = async (values, { resetForm }) => {
//         try {
//             // Make an API call using axios
//             const response = await axios.post('http://localhost:5001/add-farmers', values);
//             console.log(response.data); // Handle the response as needed
//             toast.success('Form submitted successfully');
//             resetForm(); // Reset the form after successful submission
//         } catch (error) {
//             console.error(error);
//             toast.error('An error occurred while submitting the form');
//         }
//     };

//     return (
//         <div className="form-container fadeInUp">
//             <Formik
//                 initialValues={{
//                     name: '',
//                     fatherName: '',
//                     village: '',
//                     upjilla: '',
//                     gilla: '',
//                     nid: '',
//                     mobileNo: '',
//                     location: '',
//                     plantation: '',
//                     target: '',
//                     accountNo: '',
//                     bankName: '',
//                     branch: '',
//                 }}
//                 validationSchema={validationSchema}
//                 onSubmit={handleSubmit}
//             >
//                 <Form>
//                     {fieldNames.map((fieldName) => (
//                         <div key={fieldName}>
//                             <label htmlFor={fieldName}>{fieldName}:</label>
//                             <Field type="text" id={fieldName} name={fieldName} />
//                             <ErrorMessage name={fieldName} component="div" />
//                         </div>
//                     ))}
//                     <button type="submit">Submit</button>
//                 </Form>
//             </Formik>
//         </div>
//     );
// };

// export default FarmerRegistrationForm;
