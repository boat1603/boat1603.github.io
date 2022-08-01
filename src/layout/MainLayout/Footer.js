import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FolderIcon from "@mui/icons-material/Folder";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
export default function Footer() {
  return (
    <div className="page-footer">
      <Button style={{ width: "100%" }}>
        <PersonIcon />
      </Button>
      <Button style={{ width: "100%" }}>
        <FolderIcon />
      </Button>
      <Button style={{ width: "100%" }}>
        <DashboardIcon />
      </Button>
      <Button style={{ width: "100%" }}>
        <EmojiEventsIcon />
      </Button>
    </div>
  );
}
