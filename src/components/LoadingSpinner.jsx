import Loading from "../assets/Loading.png";
import "/src/loadingSpinner.css";

export function LoadingSpinner() {
  return (
    <>
      <div>
        <img src={Loading} className="loadingSpinner" />
      </div>
    </>
  );
}
