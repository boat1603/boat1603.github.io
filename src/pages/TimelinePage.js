import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import ReactAudioPlayer from "react-audio-player";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import CodeIcon from "@mui/icons-material/Code";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
} from "@mui/lab";

import config from "../config";

export default function TimelinePage() {
  const customization = useSelector((state) => state.customization);
  let workExperiences = [
    {
      type: "software",
      title: "Part-Time Project Manager",
      year: "October 2023 - Present",
      component: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/portfolio/aiat-mooc.png"
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
            &emsp;- Create tasks and manage the team to develop new AIAT MOOC
            platform using Agile (Scrum) method.
          </Typography>
          <Typography gutterBottom>
            &emsp;- Study the possibility to develop features from requirements
            including course payment service, course access group, coding
            exercise, VDO hosting services, dashboard to visualize user
            behavior, etc.
          </Typography>
          <Typography gutterBottom>
            &emsp;- Deploy microservices in AIAT MOOC platform.
          </Typography>
        </div>
      ),
    },
    {
      type: "AI",
      title: "Volunteer @ OpenThaiGPT",
      year: "March 2023 - Present",
      component: (
        <div>
          <Typography gutterBottom>
            &emsp;- Implement Electra and GPT pretraining pipeline using pytorch
            lighting.
          </Typography>
          <Typography gutterBottom>
            &emsp;- Implement training setup config including, optimeizer
            configuration, deepspeed, multi GPU / multi node training, gradient
            accumulation, etc. using hydra config.
          </Typography>
          <Typography gutterBottom>
            &emsp;- Help other volunteers to debug their issues.
          </Typography>
          <Typography gutterBottom>
            &emsp;- Write{" "}
            <a href="https://openthaigpt.gitbook.io/openthaigpt-guideline">
              OpenThaiGPT contribution guidelines
            </a>
            , including basic Git usage, how to submit a pull request, model
            training checklist, an overview of the LANTA (HPC) cluster, Slurm
            usage, and Slurm tricks.
          </Typography>
          <Typography gutterBottom>
            &emsp;- OpenThaiGPT's product owner in multi-modal team to research
            capabilities and opportunities to develop an open-source Thai
            multimodal large language model and then create tasks to assign to
            other volunteers.
          </Typography>
        </div>
      ),
    },
    {
      type: "AI",
      title: "ML Engineer @ Looloo Technology",
      year: "October 2022 - Present",
      component: (
        <div>
          <Typography gutterBottom>
            &emsp;- Develop Semi-Structured OCR model to understand accountant
            documents.
          </Typography>
          <Typography gutterBottom>
            &emsp;- Develop deep learning based document understanding using
            language model.
          </Typography>
          <Typography gutterBottom>
            &emsp;- Pretraining document understanding language model.
          </Typography>
        </div>
      ),
    },
    {
      type: "software",
      title: "SuperAI engineer registration form",
      year: "October 2022 - Present",
      component: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/portfolio/superai_registration_form.png"
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
            &emsp;- Develop and maintain a website for the SuperAI engineer
            registration form.
          </Typography>
          <Typography gutterBottom>
            &emsp;- Connect user data to the AIAT MOOC (AIAT's learning
            platform) and automatically send information via email using AWS
            SES.
          </Typography>
        </div>
      ),
    },
    {
      type: "AI",
      title: "AI Engineer @ Synapes",
      year: "April 2022 - October 2022",
      component: (
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
    },
    {
      type: "AI",
      title: "Freelance AI Consultant",
      year: "April 2022 - September 2022",
      component: (
        <div>
          <Typography gutterBottom>
            &emsp;- Consult POC in AI (Computer Vision Models) and
            Recommendation system projects.
          </Typography>
          <Typography gutterBottom>
            &emsp;- Consult about infrastructure to use in AI project.
          </Typography>
        </div>
      ),
    },
    {
      type: "AI",
      title: "SuperAI Engineer Season 2 (Gold Medal)",
      year: "2022",
      component: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/portfolio/superai_image.jpg"
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
            &emsp;The 9-week onsite hackathon covered all AI domains, including
            image classification, NLP, signal processing, and IoT. You can view
            my hackathon reward{" "}
            <a href={`${config.defaultPath}/hackathon`}>here</a>.
          </Typography>
        </div>
      ),
    },
    {
      type: "software",
      title: "Freelance Backend Developer",
      year: "December 2021 - March 2022",
      component: (
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
    },
    {
      type: "AI",
      title: "Data Scientist in Voice Project",
      year: "July 2021 – December 2021",
      component: (
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
    },
    {
      type: "software",
      title: "BSE IoT Website Developer",
      year: "May 2021 – October 2021",
      component: (
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
    },
  ];
  return (
    <div>
      <div className="text-title">Timeline</div>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {workExperiences.map((experience, index) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                {experience.type === "AI" ? <SmartToyIcon /> : <CodeIcon />}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="timeline-content">
                <div className="text-subtitle">{experience.title}</div>
                <div className="text-content-title">{experience.year}</div>
                {experience.component}
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
