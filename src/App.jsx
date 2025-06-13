import "./App.css";

import Title from "./components/Title/Title";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  return (
    <>
      <Title />
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
