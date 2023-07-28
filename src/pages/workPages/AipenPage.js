// import { useSelector } from "react-redux";
import ReactAudioPlayer from "react-audio-player";

import Content from "../../ui-component/Content";
import { Typography } from "@mui/material";
export default function AipenPage() {
  //   const customization = useSelector((state) => state.customization);
  let projects = [
    {
      title: "Freelance AI Consultant in AI Project (April 2022 - September 2022)",
      content: (
        <div>
          <Typography gutterBottom>
            &emsp;- Consult POC in AI (Computer Vision Models) and Recommendation
            system projects.
          </Typography>
          <Typography gutterBottom>
            &emsp;- Consult about infrastructure to use in AI project.
          </Typography>
        </div>
      ),
      tags: [
        "Python",
        "Data Analytics",
        "Recommendation System",
        "Image Classification",
        "Image Searching",
      ],
      framework: ["python", "pytorch", "fastapi", "huggingface"],
    },
    {
      title:
        "Freelance AI Consultant in Backend Project (December 2021 - March 2022)",
      content: (
        <div>
          <Typography gutterBottom>
            &emsp;Develop backend service using NodeJS from PHP source code.
          </Typography>
          <Typography gutterBottom>
            &emsp;Design backend code structure (Python FastAPI) for AI
            projects.
          </Typography>
        </div>
      ),
      tags: ["Python", "Backend Developer"],
      framework: ["python", "fastapi", "javascript", "nodejs", "php"],
    },
    {
      title:
        "Freelance Data Scientist in Voice Project (July 2021 – December 2021)",
      content: (
        <div>
          <div>
            <ReactAudioPlayer
              src="/work/aipen/Aipen1.wav"
              controls
              style={{ width: "100%", maxWidth: "300px", margin: "8px" }}
            />
            <ReactAudioPlayer
              src="/work/aipen/LoongToo.wav"
              controls
              style={{ width: "100%", maxWidth: "300px", margin: "8px" }}
            />
          </div>

          <Typography gutterBottom>
            &emsp;Develop Machine Learning Model to understand Thai Speech
            (Speech to Text) and develop Machine Learning Model to generate Thai
            Speech from text and example speech (Text to Speech)
          </Typography>
          <Typography gutterBottom>
            &emsp;Deploy Machine Learning Model to API
          </Typography>
        </div>
      ),
      tags: ["Python", "Speech Recognition", "Text to Speech"],
      framework: ["python", "pytorch", "huggingface", "fastapi"],
    },
  ];
  return (
    <div>
      <div className="text-title">Work at AIPEN</div>
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
