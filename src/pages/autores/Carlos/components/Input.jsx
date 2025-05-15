import styles from "../css/input.module.css";

export const Input = ({
  id,
  label,
  placeholder,
  width,
  height,
  onChange,
  ...props
}) => {
  return (
    <div
      className={styles.inputGroupArea}
      style={{
        width,
        height,
      }}
    >
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
