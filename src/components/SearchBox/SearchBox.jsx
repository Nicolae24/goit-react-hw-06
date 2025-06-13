import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterText = useSelector((state) => state.filter.text);
  return (
    <div className={s.searchBox}>
      <span className={s.label}>Find contacts by name</span>
      <input
        type="text"
        className={s.input}
        value={filterText}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
