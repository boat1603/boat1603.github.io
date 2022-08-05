import { useNavigate } from "react-router-dom";
export default function PythonSkills() {
  let navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </div>
    </div>
  );
}
