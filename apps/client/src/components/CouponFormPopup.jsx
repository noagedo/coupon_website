import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function CouponFormPopup({ initialValues, onSubmit, onCancel }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="popup">
          <div className="popup-inner">
            <h2>{initialValues ? 'Edit Coupon' : 'Add New Coupon'}</h2>
            <label>
              Coupon Name:
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </label>
            <label>
              Description:
              <Field type="text" name="description" />
              <ErrorMessage name="description" component="div" className="error" />
            </label>
            <label>
              Expiry Date:
              <Field type="text" name="expirationDate" />
              <ErrorMessage name="expirationDate" component="div" className="error" />
            </label>
            <label>
              Category:
              <Field as="select" name="category">
                <option value="fashion">Fashion</option>
                <option value="home">Home</option>
                <option value="food">Food</option>
                <option value="beauty">Beauty</option>
              </Field>
              <ErrorMessage name="category" component="div" className="error" />
            </label>
            <label>
              Image:
              <Field type="file" name="image" />
              <ErrorMessage name="image" component="div" className="error" />
            </label>
            <br />
            <button type="submit" disabled={isSubmitting}>Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CouponFormPopup;
