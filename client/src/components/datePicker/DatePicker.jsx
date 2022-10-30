import "./Style.css";

const DatePickers = ({ label, name, handleChange }) => {
  return (
    <div className="date-picker">
      <label for="dateofbirth">{label}</label>
      <input
        type="date"
        className="date-picker-input"
        name={name}
        id={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default DatePickers;
