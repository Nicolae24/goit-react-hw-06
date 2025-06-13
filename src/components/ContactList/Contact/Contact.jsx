import s from "./Contact.module.css";
import { VscAccount, VscCallIncoming } from "react-icons/vsc";

// const Contact = ({ visibleNames, deleteContact }) => {
//   return (
//     <>
//       {visibleNames.map(({ id, name, number }) => (
//         <li key={id} className={s.contactItem}>
//           <div className={s.iconColumn}>
//             <VscAccount className={`${s.contactIcon} ${s.accountIcon}`} />
//             <VscCallIncoming className={`${s.contactIcon} ${s.callIcon}`} />
//           </div>
//           <div className={s.contactInfo}>
//             <span className={s.contactName}>{name}</span>
//             <span className={s.contactNumber}>{number}</span>
//           </div>
//           <button
//             className={s.deleteButton}
//             type="button"
//             onClick={() => deleteContact(id)}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </>
//   );
// };

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <li className={s.contactItem}>
      <div className={s.iconColumn}>
        <VscAccount className={`${s.contactIcon} ${s.accountIcon}`} />
        <VscCallIncoming className={`${s.contactIcon} ${s.callIcon}`} />
      </div>
      <div className={s.contactInfo}>
        <span className={s.contactName}>{name}</span>
        <span className={s.contactNumber}>{number}</span>
      </div>
      <button
        className={s.deleteButton}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
