import SailingIcon from "@mui/icons-material/Sailing";
import { Typography } from "@mui/material";
export default function NavBar() {
  return (
    <div className="page-navbar">
      <SailingIcon
        style={{ marginRight: "10px", cursor: "pointer" }}
        onClick={() => {
          window.location.href = "/profiles";
        }}
      />
      <Typography gutterBottom variant="h4" component="div">
        Peerawat's Profile
      </Typography>
    </div>
  );
}
