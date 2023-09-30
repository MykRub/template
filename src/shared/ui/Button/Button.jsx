// styles
import styles from "./Button.module.scss";

export const Button = ({ children, width, height, onClick, disabled }) => {
  return (
    <button
      className={cls.Button}
      onClick={onClick}
      disabled={disabled}
      style={{ width, height }}
    >
      {children}
    </button>
  );
};
