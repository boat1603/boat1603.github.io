import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
// import { Typography } from "@mui/material";

// import config from "./../../config";
export default function NavBar(props) {
  const customization = useSelector((state) => state.customization);
  let { handleMenubar } = props;
  return (
    <div className="page-navbar">
      <MenuIcon
        style={{ marginRight: "10px", cursor: "pointer" }}
        // onClick={() => {
        //   window.location.href = `${config.basename}`;
        // }}
        onClick={handleMenubar}
        sx={{
          "&:hover": {
            color: customization.mode === "dark" ? "#42a5f5" : "#90caf9",
          },
        }}
      />
      {/* <Typography gutterBottom variant="h4" component="div">
        Peerawat's Profile
      </Typography> */}
      <div>
        <h3>Peerawat's Profiles</h3>
      </div>
    </div>
  );
}
