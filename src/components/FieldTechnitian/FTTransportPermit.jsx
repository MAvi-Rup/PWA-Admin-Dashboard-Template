import React, { useState, useRef } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReactToPrint from 'react-to-print';

const validationSchema = Yup.object().shape({
  farmersPhn: Yup.string()
    .required('Required')
    .matches(/^[0-9]{10}$/, 'Must be a 10-digit number'),
  farmerName: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
  baleQuantity: Yup.number()
    .typeError('Must be a number')
    .min(0, 'Cannot be negative')
    .max(100, 'Cannot be more than 100')
    .required('Required'),
});


const FTTransportPermit = () => {
  const farmersNo = Math.floor(Math.random() * 1000000000);
  const [farmersPhoneNo, setFarmersPhoneNo] = useState('');
  const [farmerName, setFarmerName] = useState('');
  const [baleQuantity, setBaleQuantity] = useState('');
  const currentDate = new Date().toLocaleDateString(); // get current date as string
  const expiryDate = new Date(); // create a new date object for expiry date
  expiryDate.setDate(expiryDate.getDate() + 1); // set expiry date to tomorrow
  const formattedExpiryDate = expiryDate.toLocaleDateString(); // format expiry date as string
  const componentRef = useRef();

const handleSubmit = (values, { resetForm, setErrors }) => {
  validationSchema
    .validate(values, { abortEarly: false })
    .then(() => {
      // Validation succeeded, set the state with new values
      const { farmersPhn, farmerName, baleQuantity } = values;
      setFarmersPhoneNo(farmersPhn);
      setFarmerName(farmerName);
      setBaleQuantity(baleQuantity);
      resetForm();
    })
    .catch((errors) => {
      // Validation failed, display error messages
      const validationErrors = {};
      errors.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    });
};
  return (
    <div className='form-container fadeInUp'>
      <h1>Transport Permit</h1>
      <Formik
        initialValues={{ farmersPhn: '', farmerName: '', baleQuantity: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({  values, isSubmitting}) => (
          <Form >
            <label>
              Farmers No:
              <Field type="text" name="farmersNo" value={farmersNo} disabled />
            </label>
            <br />
            <label>
              Farmers Phn:
              <Field type="text" name="farmersPhn"/>
              <div className="error-message">
                <ErrorMessage name="farmersPhn" />
              </div>
            </label>
            <br />
            <label>
              Farmer Name:
              <Field type="text" name="farmerName" />
              <div className="error-message">
                <ErrorMessage name="farmerName" />
              </div>
            </label>
            <br />
            <label>
              Bale Quantity:
              <Field type="number" name="baleQuantity" />
              <div className="error-message">
                <ErrorMessage name="baleQuantity" />
              </div>
            </label>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <ReactToPrint
              trigger={() => (
                <button type="submit" className="print-button">
                  Print Permit
                </button>
              )}
              content={() => componentRef.current}
            />

            <div className="permit" ref={componentRef}>
              <h2>Transport Permit</h2>
              <p>Date: {currentDate}</p>
              <p>Permit No: {farmersNo}</p>
              <p>Farmers Phn: {farmersPhoneNo}</p>
              <p>Farmer Name: {farmerName}</p>
              <p>Bale Quantity: {baleQuantity}</p>
              <p>Permit Expiry: {formattedExpiryDate}</p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FTTransportPermit;
