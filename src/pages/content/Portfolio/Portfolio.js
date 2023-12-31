import { useSelector } from "react-redux";
import Content from "../../../ui-component/Content";
import DataCard from "../../../ui-component/cards/DataCard";

export default function Portfolio() {
  const customization = useSelector((state) => state.customization);
  let port_data = [
    {
      title: "Volunteer at OpenThaiGPT (2023 - Present)",
      content: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}></div>
        </div>
      ),
      framework: ["python", "pytorch", "huggingface", "slurm"],
    },
    {
      title: "BP EYE (Startup in AIEAT Incubation) (2022)",
      content: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/portfolio/BP-Eye.png"
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
      framework: ["python", "pytorch", "jetson"],
    },
    {
      title: "Mom's Developer (1999 - Present)",
      content: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/portfolio/auto-fill-form.JPG"
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
      framework: ["python"],
    },
    {
      title: "Optimization Tutorial with Pytorch (November 2021)",
      content: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <iframe
              height="315px"
              position="absolute"
              src={`https://www.youtube.com/embed/oPQJ_IgeuE0`}
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              style={{ width: "100%", maxWidth: "700px" }}
            />
          </div>
        </div>
      ),
      framework: ["python", "pytorch"],
    },
    {
      title: "Continuous Wavelet Transform using PyTorch (2021)",
      content: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/portfolio/cwt-torch.png"
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
      url: "https://github.com/boat1603/MyNotebooks/blob/main/MyLibrary/CWTPyTorch.ipynb",
      framework: ["python", "pytorch"],
    },
    {
      title: "Basic Python Lecture Course (2021)",
      content: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/portfolio/siam-course2.png"
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
              src="/portfolio/siam-course1.png"
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
      url: "https://www.youtube.com/watch?v=C-8_CSUoiHo",
      framework: ["python"],
    },
    {
      title: "Cone Detection for Racing Cars (2020-2021)",
      content: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/portfolio/cone-detection.JPG"
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
      // url: "https://drive.google.com/file/d/18hGspDkXQ7qAkRARCJSrMOvCnC4QKkau/view",
      framework: ["python", "tensorflow"],
    },
    {
      title: "Garbage Detection (2020)",
      content: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/portfolio/garbage-detection.png"
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
      // url: "https://drive.google.com/file/d/19jIOmzbVkeA_v9FAzuoF0gfPR1d1aeCQ/view",
      framework: ["python"],
    },
    {
      title: "Water Segmentation (2020)",
      content: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/portfolio/water-segmentation.png"
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
      // url: "https://drive.google.com/file/d/1xkSJiJ0eoY01h4PphNnVpuRuBK6IJL4f/view",
      framework: ["python", "matlab"],
    },
    {
      title: "Analog Gauge Reader (2020)",
      content: (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/portfolio/analog-gauge-reader.JPG"
              alt=""
              style={{
                width: "100%",
                borderRadius: customization.borderRadius,
                maxWidth: "300px",
                margin: "5px",
              }}
            />
          </div>
        </div>
      ),
      // url: "https://drive.google.com/file/d/1FHcG5o9wiUNV7xmbmlbeV75agMcor2iO/view",
      framework: ["python"],
    },
    {
      title: "Programming for Education (2017-2019)",
      content: (
        <div>
          <DataCard
            content={
              <div style={{ textAlign: "center" }}>
                " I am a lazy man that why I did a lot of projects to make my
                life easier "
              </div>
            }
            style={{
              justifyContent: "center",
              padding: "16px",
              borderRadius: "8px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/work/tutor/tutor-demo1.png"
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
              src="/work/tutor/tutor-demo2.png"
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
              src="/work/tutor/tutor-demo3.png"
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
              src="/work/tutor/tutor-demo4.png"
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
      framework: ["python", "matlab"],
    },
  ];
  return (
    <div>
      {port_data.map((v, i) => {
        return (
          <Content
            title={v.title}
            content={v.content}
            tags={v.tags}
            url={v.url}
            framework={v.framework}
          />
        );
      })}
    </div>
  );
}
