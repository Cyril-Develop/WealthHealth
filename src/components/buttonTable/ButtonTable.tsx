import "./buttonTable.scss";
import { ButtonTableProps } from "../../types/types";

const ButtonTable = ({
  updatePage,
  disabled,
  label
}: ButtonTableProps) => {
  return (
    <button
      onClick={updatePage}
      className={disabled ? "disable" : ""}
      disabled={disabled}
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default ButtonTable;
