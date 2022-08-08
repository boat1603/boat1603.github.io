import { useSelector } from "react-redux";
import DataCard from "../../../ui-component/cards/DataCard";
import { Typography, Grid, Divider } from "@mui/material";
export default function Hackathon() {
  const customization = useSelector((state) => state.customization);
  return (
    <div>
      <div className="text-subtitle">
        Super AI Engineer Final Hackathon (6-7 Aug 2022)
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
        &emsp;This Hackathon is the final hackathon in SuperAI Development
        Program. I have to do 5 mini hackathons: Image Processing, NLP, Data
        Science, Signal Processing, and IoT in 23 hours. I got rank 3 from
        average score in this hackathon.
      </Typography>
      <div className="text-content-title">Tags</div>
      <Grid
        container
        spacing={0}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <DataCard
          title={<p className="text-content-title"># Python</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Image Classification</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># NLP</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Data Science</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Signal Processing</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={
            <p className="text-content-title"># Classical Machine Learning</p>
          }
          style={{ margin: "4px" }}
        />
      </Grid>
      <Divider style={{ marginTop: "8px", marginBottom: "8px" }} />
      <div className="text-subtitle">
        AI {"&"} Robotics Hackathon 2022 (June 2022)
      </div>
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

      <div className="text-content-title">Tags</div>
      <Grid
        container
        spacing={0}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <DataCard
          title={<p className="text-content-title"># Python</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Crop Classification</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Sentinel2</p>}
          style={{ margin: "4px" }}
        />
      </Grid>
      <Divider style={{ marginTop: "8px", marginBottom: "8px" }} />
      <div className="text-subtitle">
        Super AI Engineer Development Program Hackathon (December 2021– April
        2022)
      </div>
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
        &emsp;<b>Handwritten Digit:</b> Build machine learning model to predict
        the sequence of handwritten number from images.
      </Typography>
      <Typography gutterBottom>
        &emsp;<b>Thai QA:</b> Build machine learning model to answer the
        question from context and question in Thai language.
      </Typography>
      <div className="text-content-title">Tags</div>
      <Grid
        container
        spacing={0}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <DataCard
          title={<p className="text-content-title"># Python</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Huggingface</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># OCR</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># ThaiQA</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Transformers</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Object Detection</p>}
          style={{ margin: "4px" }}
        />
      </Grid>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Divider
          variant="middle"
          style={{ marginTop: "4px", marginBottom: "4px", width: "80%" }}
        />
      </div>

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
        <b>Image Document Analysis:</b> Build machine learning model to classify
        Font, Font Size, and Font Style from images.
      </Typography>
      <div className="text-content-title">Tags</div>
      <Grid
        container
        spacing={0}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <DataCard
          title={<p className="text-content-title"># Python</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Pytorch</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># EfficientnetV2</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Ensemble Technique</p>}
          style={{ margin: "4px" }}
        />
      </Grid>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Divider
          variant="middle"
          style={{ marginTop: "4px", marginBottom: "4px", width: "80%" }}
        />
      </div>
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
        <b>Machine Translation:</b> Build machine learning model to translate
        sentences from Thai to English and English to Thai.
      </Typography>
      <div className="text-content-title">Tags</div>
      <Grid
        container
        spacing={0}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <DataCard
          title={<p className="text-content-title"># Python</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># NLP</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Machine Translation</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Pytorch</p>}
          style={{ margin: "4px" }}
        />

        <DataCard
          title={<p className="text-content-title"># Hugging Face</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># WangchanBerta</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Roberta</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># mT5</p>}
          style={{ margin: "4px" }}
        />
      </Grid>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Divider
          variant="middle"
          style={{ marginTop: "4px", marginBottom: "4px", width: "80%" }}
        />
      </div>
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
        &emsp;<b>House Grade Classification:</b> Build machine learning model to
        classify house grade.
      </Typography>
      <Typography gutterBottom>
        &emsp;<b>Properties Tagging:</b> Build machine learning model to find
        the highlight of house image such as garage, yard, cars, CCTV, and
        shrine.
      </Typography>
      <Typography gutterBottom>
        &emsp;<b>Thai Food Labeling:</b> Build machine learning model to tag
        food types from food images.
      </Typography>
      <div className="text-content-title">Tags</div>
      <Grid
        container
        spacing={0}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <DataCard
          title={<p className="text-content-title"># Python</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Pytorch</p>}
          style={{ margin: "4px" }}
        />

        <DataCard
          title={<p className="text-content-title"># Image Classification</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Object Detection</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={
            <p className="text-content-title"># Multi Label Classification</p>
          }
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Contrasive Learning</p>}
          style={{ margin: "4px" }}
        />
      </Grid>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Divider
          variant="middle"
          style={{ marginTop: "4px", marginBottom: "4px", width: "80%" }}
        />
      </div>
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
        <b>Robotics and AIoT:</b> We used mBot2 as an ambulance and Halocode as
        a patient. The ambulance had to move to treat 5 patients. I am
        responsible for the communication team. I build MQTT server and design
        device communication topics to communicate between mBot2 (ambulance), 5
        Halocode (patients), backend server, and web application.
      </Typography>

      <div className="text-content-title">Tags</div>
      <Grid
        container
        spacing={0}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <DataCard
          title={<p className="text-content-title"># Python</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># IoT</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Website Developer</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Mosquitto MQTT</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Huawei Cloud</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># MBot2</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Halocode</p>}
          style={{ margin: "4px" }}
        />
      </Grid>
      <Divider style={{ marginTop: "8px", marginBottom: "8px" }} />
      <div className="text-subtitle">Shopee Code League 2021</div>
      <div className="text-content-title">Tags</div>
      <Grid
        container
        spacing={0}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <DataCard
          title={<p className="text-content-title"># Python</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Data Analytics</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Transformers</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Address Extraction</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># NLP</p>}
          style={{ margin: "4px" }}
        />
      </Grid>
      <Divider style={{ marginTop: "8px", marginBottom: "8px" }} />
      <div className="text-subtitle">Shopee Code League 2020</div>
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
      <div className="text-content-title">Tags</div>
      <Grid
        container
        spacing={0}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <DataCard
          title={<p className="text-content-title"># Python</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Data Analytics</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Tensorflow</p>}
          style={{ margin: "4px" }}
        />

        <DataCard
          title={<p className="text-content-title"># Image Classification</p>}
          style={{ margin: "4px" }}
        />
      </Grid>
    </div>
  );
}
