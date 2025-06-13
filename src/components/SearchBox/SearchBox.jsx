import s from "./SearchBox.module.css";

const SearchBox = ({ text, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className={s.searchBox}>
      <span className={s.label}>Find contacts by name</span>
      <input
        type="text"
        className={s.input}
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
