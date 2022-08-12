import { useSelector } from "react-redux";
import Content from "../../ui-component/Content";
import { Typography } from "@mui/material";
export default function MfecPage() {
  const customization = useSelector((state) => state.customization);
  let projects = [
    {
      title: "News Recommendation System (June 2020 – July 2020)",
      content: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/work/mfec/mfec-demo.png"
              alt=""
              style={{
                width: "100%",
                borderRadius: customization.borderRadius,
                maxWidth: "700px",
                margin: "5px",
              }}
            />
          </div>

          <Typography gutterBottom>
            &emsp;Design and Implementation of News Recommendation System in
            Python Language.
          </Typography>
        </div>
      ),
      tags: ["Python", "Data Analytics", "Recommendation System", "NLP"],
      framework: ["python", "gcp", "gbq", "googledatastudio", "flask"],
    },
  ];
  return (
    <div>
      <div className="text-title">Work at MFEC</div>
      {projects.map((v, i) => {
        return (
          <Content
            title={v.title}
            content={v.content}
            tags={v.tags}
            framework={v.framework}
          />
        );
      })}
    </div>
  );
}
