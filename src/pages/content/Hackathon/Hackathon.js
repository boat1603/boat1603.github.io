import { useSelector } from "react-redux";
import Content from "../../../ui-component/Content";
import { Typography } from "@mui/material";
export default function Hackathon() {
  const customization = useSelector((state) => state.customization);
  let hackathon_data = [
    {
      title: "Super AI Engineer Final Hackathon (6-7 Aug 2022)",
      content: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/hackathon/SuperAIFinalHackathonImg.jpg"
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
              src="/hackathon/SuperAIFinalHackathon.jpg"
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
            &emsp;This Hackathon is the final Hackathon in Super AI development
            Program. I have done 5 tasks which were image processing, NLP, Data
            Science, Signal Processing and IoT in the limit time of 23 hours. I
            received rank 3 from average score.
          </Typography>
        </div>
      ),
      tags: [
        "Python",
        "Image Classification",
        "NLP",
        "Data Science",
        "Signal Processing",
        "Classical Machine Learning",
      ],
    },
    {
      title: "AI & Robotics Hackathon 2022 (June 2022)",
      content: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/hackathon/AW_ARV_Certificate_Peerawat Rojratchadakorn.jpg"
              alt=""
              style={{
                width: "100%",
                borderRadius: customization.borderRadius,
                maxWidth: "700px",
                margin: "5px",
              }}
            />
          </div>
        </div>
      ),
      tags: ["Python", "Crop Classification", "Sentinel2"],
    },
    {
      title:
        "Super AI Engineer Development Program Hackathon (December 2021 – April 2022)",
      child: [
        {
          content: (
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="/hackathon/SuperAIKaggleOnline.png"
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
                <b>Kaggle Pitching Online:</b>
              </Typography>
              <Typography gutterBottom>
                &emsp;<b>Handwritten Digit:</b> Build machine learning model to
                predict the sequence of handwritten number from images.
              </Typography>
              <Typography gutterBottom>
                &emsp;<b>Thai QA:</b> Build machine learning model to answer the
                question from context and question in Thai language.
              </Typography>
            </div>
          ),
          tags: [
            "Python",
            "Huggingface",
            "OCR",
            "ThaiQA",
            "Transformers",
            "Object Detection",
          ],
        },
        {
          content: (
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="/hackathon/SuperAIAppman.png"
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
                <b>Image Document Analysis:</b> Build machine learning model to
                classify Font, Font Size, and Font Style from images.
              </Typography>
            </div>
          ),
          tags: ["Python", "Pytorch", "EfficientnetV2", "Ensemble Technique"],
        },
        {
          content: (
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="/hackathon/SuperAINMT.png"
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
                <b>Machine Translation:</b> Build machine learning model to
                translate sentences from Thai to English and English to Thai.
              </Typography>
            </div>
          ),
          tags: [
            "Python",
            "NLP",
            "Machine Translation",
            "Pytorch",
            "Hugging Face",
            "WangchanBerta",
            "Roberta",
            "mT5",
          ],
        },
        {
          content: (
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="/hackathon/SuperAIARV.png"
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
                <b>Image Classification:</b>
              </Typography>
              <Typography gutterBottom>
                &emsp;<b>House Grade Classification:</b> Build machine learning
                model to classify house grade.
              </Typography>
              <Typography gutterBottom>
                &emsp;<b>Properties Tagging:</b> Build machine learning model to
                find the highlight of house image such as garage, yard, cars,
                CCTV, and shrine.
              </Typography>
              <Typography gutterBottom>
                &emsp;<b>Thai Food Labeling:</b> Build machine learning model to
                tag food types from food images.
              </Typography>
            </div>
          ),
          tags: [
            "Python",
            "Pytorch",
            "Image Classification",
            "Object Detection",
            "Multi Label Classification",
            "Contrasive Learning",
          ],
        },
        {
          content: (
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="/hackathon/SuperAIRoboticsandAIoT.png"
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
                <b>Robotics and AIoT:</b> We used mBot2 as an ambulance and
                Halocode as a patient. The ambulance had to move to treat 5
                patients. I am responsible for the communication team. I build
                MQTT server and design device communication topics to
                communicate between mBot2 (ambulance), 5 Halocode (patients),
                backend server, and web application.
              </Typography>
            </div>
          ),
          tags: [
            "Python",
            "IoT",
            "Website Developer",
            "Mosquitto MQTT",
            "Huawei Cloud",
            "MBot2",
            "Halocode",
          ],
        },
      ],
    },
    {
      title: "Shopee Code League 2021",
      content: <div></div>,
      tags: [
        "Python",
        "Data Analytics",
        "Transformers",
        "Address Extraction",
        "NLP",
      ],
    },
    {
      title: "Shopee Code League 2020",
      content: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/hackathon/shoppee2020.png"
              alt=""
              style={{
                width: "100%",
                borderRadius: customization.borderRadius,
                maxWidth: "700px",
                margin: "5px",
              }}
            />
          </div>
        </div>
      ),
      tags: ["Python", "Data Analytics", "Tensorflow", "Image Classification"],
    },
  ];
  return (
    <div>
      {hackathon_data.map((v, i) => {
        return (
          <div>
            {v.content ? (
              <Content title={v.title} content={v.content} tags={v.tags} />
            ) : (
              <div>
                {v.child.map((vv, i) => {
                  return (
                    <Content
                      title={i === 0 ? v.title : null}
                      content={vv.content}
                      tags={vv.tags}
                    />
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
