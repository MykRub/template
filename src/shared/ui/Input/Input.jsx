// styles
import styles from "./Input.module.scss";

export const Input = ({
  value,
  placeholder,
  type,
  width,
  height,
  onChange,
}) => {
  return (
    <input
      className={styles.Input}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      style={{ width, height }}
    />
  );
};
