import Loading from "../assets/Loading.png";
import "../loadingSpinner.css";

export function LoadingSpinner() {
  return (
    <div className="loading" role="status">
      <img src={Loading} className="loadingSpinner" alt="" />
      <p>Loading countries…</p>
    </div>
  );
}
