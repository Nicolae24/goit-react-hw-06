import { useSelector } from "react-redux";
import { useMemo } from "react";
import { useDebounce } from "use-debounce";
import s from "./ContactList.module.css";
import Contact from "./Contact/Contact";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.text);
  const [debouncedFilter] = useDebounce(filter, 300);
  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(debouncedFilter.toLowerCase())
    );
  }, [contacts, debouncedFilter]);

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
