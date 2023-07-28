import { useSelector } from "react-redux";
import Content from "../../ui-component/Content";
import { Typography } from "@mui/material";
export default function SynapesPage() {
  const customization = useSelector((state) => state.customization);
  let projects = [
    {
      title: "AI Engineer (April 2022 - October 2022)",
      content: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/work/synapes/object-det-demo.png"
              alt=""
              style={{
                width: "100%",
                borderRadius: customization.borderRadius,
                maxWidth: "700px",
                margin: "5px",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/work/synapes/falldown-demo.png"
              alt=""
              style={{
                width: "100%",
                borderRadius: customization.borderRadius,
                maxWidth: "700px",
                margin: "5px",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/work/synapes/fighting-demo.jpg"
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
            &emsp;- Develop computer vision model to count and classify human
            gender and vehicle type from Video.
          </Typography>{" "}
          <Typography gutterBottom>
            &emsp;- Develop computer vision model to detect anomaly event from
            Video such as falling people and brawling people, etc.
          </Typography>
        </div>
      ),
      tags: [
        "Python",
        "Object Detection",
        "Object Tracking",
        "Action Recognition",
      ],
      framework: ["python", "pytorch", "streamlit", "fastapi", "awsec2"],
    },
  ];
  return (
    <div>
      <div className="text-title">Work at Synapes</div>
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
