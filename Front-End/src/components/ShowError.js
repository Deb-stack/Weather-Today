import "./styles/ShowError.css";

export default function ShowError(props) {
  return (
    <div className="error-container">
      <span>{props.error}</span>
    </div>
  );
}
