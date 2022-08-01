import { useSelector } from "react-redux";
// material-ui
import Divider from "@mui/material/Divider";
export default function SubCard(props) {
  const { title, content } = props;
  const customization = useSelector((state) => state.customization);

  return (
    <div
      className="sub-card"
      style={{
        borderRadius: customization.borderRadius,
      }}
    >
      {title && (
        <div style={{ paddingBottom: "10px" }}>
          {title}
          <Divider />
        </div>
      )}
      {content && <div>{content}</div>}
    </div>
  );
}
