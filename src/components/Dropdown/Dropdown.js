import styles from "./Dropdown.module.css";

function Dropdown({ options, value, onChange, heading, category }) {
  //  !!!  if its difficulty it will be name if its category then id
  return (
    <div className={styles.dropdownContainer}>
      <h1>{heading}</h1>
      <select className={styles.dropwdownSelect} onChange={onChange}>
        {options?.map((option) => (
          <option value={category ? option.id : option.name} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
