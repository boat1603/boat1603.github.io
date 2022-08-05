import DataCard from "../ui-component/cards/DataCard";

import { IconButton } from "@mui/material";

import FileDownloadIcon from "@mui/icons-material/FileDownload";

import ArticleIcon from "@mui/icons-material/Article";

export default function DownloadPage() {
  return (
    <div>
      <div className="text-title">Downloads</div>
      <DataCard
        icon={<ArticleIcon />}
        title={<p className="text-content-title">Peerawat's CV</p>}
        ender={
          <IconButton
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1OU_hKhZrO5pIjnshParP10VE906Eesqv/view?usp=sharing"
              );
            }}
          >
            <FileDownloadIcon />
          </IconButton>
        }
        style={{
          margin: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      />
    </div>
  );
}
