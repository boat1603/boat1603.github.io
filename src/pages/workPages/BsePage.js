import { useSelector } from "react-redux";
import Content from "../../ui-component/Content";
import { Typography } from "@mui/material";
export default function BsePage() {
  const customization = useSelector((state) => state.customization);
  let projects = [
    {
      title:
        "BSE IoT Freelance Website Administrator (November 2021 - October 2022)",
      content: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/work/bse/bse-website.JPG"
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
            &emsp;Monitoring and maintain BSE’s Website
          </Typography>
        </div>
      ),
      tags: ["Website Administrator"],
      framework: ["aws"],
    },
    {
      title: "BSE IoT Freelance Website Developer (May 2021 – October 2021)",
      content: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/work/bse/bse-demo1.png"
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
              src="/work/bse/bse-demo2.png"
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
            &emsp;Design and Develop system to control IoT Devices through web
            application and send notification to LINE Notify
          </Typography>
        </div>
      ),
      tags: ["Python", "React", "MQTT", "IoT", "Website Developer"],
      framework: [
        "python",
        "javascript",
        "cpp",
        "fastapi",
        "react",
        "posgres",
        "mosquitto",
        "arduino",
        "git",
        "docker",
        "gcp",
        "aws",
        "awsec2",
        "awsloadbalancer",
        "awsautoscaling",
        "awsecr",
        "awsiotcore",
        "awslambda",
        "awsamplify",
        "awsrds",
        "awss3",
        "awsroute53",
      ],
    },
  ];
  return (
    <div>
      <div className="text-title">Work at BSE</div>
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
