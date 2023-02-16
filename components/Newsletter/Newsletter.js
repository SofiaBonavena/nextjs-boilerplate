import React, { useState } from 'react';
import styles from './Newsletter.module.css';
import Swal from 'sweetalert2';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Title from '../Title/Title';

const Newsletter = () => {
  const successAlert = (mail) => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Gracias!',
      text: ` ${mail} Has sido suscrito con éxito`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const [suscrito, setSuscrito] = useState(false);

  return (
    <div>
      {!suscrito && (
        <Formik
          initialValues={{ email: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Ingresá un mail';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Mail inválido';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              successAlert(values.email);
              setSuscrito(true);
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <div className={`${styles['container']}`}>
              <Title>Newsletter</Title>
              <Form className={`${styles['my-form']}`}>
                <p className={`${styles['contact']}`}>
                  ¡Enterate de los nuevos proyectos <br/> realizados en UMAI!
                </p>
                <Field
                  className={`${styles['field']}`}
                  placeholder="Ingresá tu mail"
                  type="email"
                  name="email"
                />
                <br />
                <div>
                  <button
                    className={`${styles['button']}`} 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    SUSCRIBIRME
                  </button>
                </div>
                <br />
                <ErrorMessage
                  className={`${styles['error']}`}
                  name="email"
                  component="span"
                />
              </Form>
            </div>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Newsletter;
