import { useSelector } from "react-redux";
// material-ui
export default function DataCard(props) {
  const { icon, title, content, ender, style } = props;
  const customization = useSelector((state) => state.customization);
  let baseStyle = {
    borderRadius: customization.borderRadius,
    padding: "10px",
    backgroundColor: customization.mode === "dark" ? "#2e2e2e" : "#f2f2f2",
    display: "flex",
    alignItems: "center",
    marginTop: "4px",
    marginButtom: "4px",
  };

  return (
    <div
      className="sub-card"
      style={
        style !== null
          ? {
              ...baseStyle,
              ...style,
            }
          : baseStyle
      }
    >
      {icon && <div style={{ marginRight: "10px" }}>{icon}</div>}
      <div>
        {title && title}
        {content && content}
      </div>
      {ender && <div style={{ marginLeft: "10px" }}>{ender}</div>}
    </div>
  );
}
