import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import { useId } from "react";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactFormValidationSchema = Yup.object({
  name: Yup.string().required().min(3).max(20),
  number: Yup.string().required().min(5).max(13),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const fieldId = useId();

  const handleSubmit = (values, helpers) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    helpers.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactFormValidationSchema}
    >
      <Form className={s.form}>
        <label htmlFor={`${fieldId}-name`} className={s.label}>
          Name
          <Field
            type="text"
            name="name"
            className={s.input}
            id={`${fieldId}-name`}
            placeholder="Enter name"
          />
          <ErrorMessage className={s.error} component="p" name="name" />
        </label>

        <label htmlFor={`${fieldId}-number`} className={s.label}>
          Number
          <Field
            type="tel"
            name="number"
            className={s.input}
            id={`${fieldId}-number`}
            placeholder="Enter number"
          />
          <ErrorMessage className={s.error} component="p" name="number" />
        </label>

        <button className={s.addContact} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
