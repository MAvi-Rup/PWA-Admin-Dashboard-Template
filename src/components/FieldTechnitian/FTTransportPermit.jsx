import React, { useRef } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReactToPrint from 'react-to-print';

const validationSchema = Yup.object().shape({
  farmersPhn: Yup.string().required('Required'),
  farmerName: Yup.string().required('Required'),
  baleQuantity: Yup.number()
    .typeError('Must be a number')
    .min(1, 'Must be at least 1')
    .max(100, 'Cannot be more than 100')
    .required('Required'),
});

const initialValues = {
  farmersPhn: '',
  farmerName: '',
  baleQuantity: '',
};

const FTTransportPermit = () => {
  const farmersNo = Math.floor(Math.random() * 1000000000); // generate random number for farmersNo
  const currentDate = new Date().toLocaleDateString(); // get current date as string
  const expiryDate = new Date(); // create a new date object for expiry date
  expiryDate.setDate(expiryDate.getDate() + 1); // set expiry date to tomorrow
  const formattedExpiryDate = expiryDate.toLocaleDateString(); // format expiry date as string
  const componentRef = useRef();

  const handleSubmit = (values) => {
    // handle form submission here
  };

  return (
    <div className='form-container fadeInUp'>
      <h1>Transport Permit</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form >
            <label>
              Farmers No:
              <Field type="text" name="farmersNo" value={farmersNo} disabled />
            </label>
            <br />
            <label>
              Farmers Phn:
              <Field type="text" name="farmersPhn" />
              <ErrorMessage name="farmersPhn" />
            </label>
            <br />
            <label>
              Farmer Name:
              <Field type="text" name="farmerName" />
              <ErrorMessage name="farmerName" />
            </label>
            <br />
            <label>
              Bale Quantity:
              <Field type="number" name="baleQuantity" />
              <ErrorMessage name="baleQuantity" />
            </label>
            <br />
            <label>
              Current date:
              <Field type="text" name="currentDate" value={currentDate} disabled />
            </label>
            <br />
            <label>
              Expiry Date:
              <Field
                type="text"
                name="formattedExpiryDate"
                value={formattedExpiryDate}
                disabled
              />
            </label>
            <br />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <ReactToPrint
              trigger={() => <button type="submit">Print TP Card</button>}
              content={() => componentRef.current}
            />
          </Form>
        )}
      </Formik>
      <div style={{ display: 'none' }}>
        <TPCard
          ref={componentRef}
          farmersNo={farmersNo}
          currentDate={currentDate}
          expiryDate={formattedExpiryDate}
        />
      </div>
    </div>
  );
};

const TPCard = React.forwardRef((props, ref) => {
    const { farmersNo, farmersPhn, farmerName, baleQuantity, currentDate, expiryDate } = props;

    return (
        <div ref={ref}>
            <h2>Transport Permit Card</h2>
            <p>Farmers No: {farmersNo}</p>
            <p>Farmers Phn: {farmersPhn}</p>
            <p>Farmer Name: {farmerName}</p>
            <p>Bale Quantity: {baleQuantity}</p>
            <p>Current date: {currentDate}</p>
            <p>Expiry date: {expiryDate}</p>
        </div>
    );
});

export default FTTransportPermit;
