import Contact from "./Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ visibleNames, deleteContact }) => {
  return (
    <ul className={s.contactList}>
      {/* <Contact visibleNames={visibleNames} deleteContact={deleteContact} /> */}
      {visibleNames.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
