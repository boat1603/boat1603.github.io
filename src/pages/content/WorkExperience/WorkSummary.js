import DataCard from "./../../../ui-component/cards/DataCard";
import config from "./../../../config";
export default function WorkSummary() {
  let basename = config.basename !== "/" ? config.basename : "/#";
  return (
    <div>
      <div className="text-title" style={{ marginTop: "20px" }}>
        Work Experience
      </div>
      <DataCard
        icon={
          <img
            src="/images/synapes-logo.jpg"
            width="75px"
            alt=""
            style={{ borderRadius: "8px" }}
          />
        }
        title={
          <div>
            <p className="text-content-title">
              AI Engineer @ Synapes (Thailand) Co., Ltd.
            </p>
            <p className="text-content-title">Chiangmai, Thailand</p>
          </div>
        }
        content={<p className="text-content">April 2022 - Present</p>}
        style={{ margin: "5px", cursor: "pointer" }}
        onClick={() => {
          window.location.href = `${basename}/work/synapes`;
        }}
      />
      <DataCard
        icon={
          <img
            src="/images/aipen-logo.jpg"
            width="75px"
            alt=""
            style={{ borderRadius: "8px" }}
          />
        }
        title={
          <div>
            <p className="text-content-title">
              AI Consultant (Freelance) @ AiPEN Studio
            </p>
            <p className="text-content-title">Bangkok, Thailand</p>
          </div>
        }
        content={<p className="text-content">December 2021 - Present</p>}
        style={{ margin: "5px", cursor: "pointer" }}
        onClick={() => {
          window.location.href = `${basename}/work/aipen`;
        }}
      />
      <DataCard
        icon={
          <img
            src="/images/bse-logo.png"
            width="75px"
            alt=""
            style={{
              borderRadius: "8px",
              backgroundColor: "#ffffff",
              paddingLeft: "3px",
              paddingRight: "3px",
              paddingTop: "15px",
              paddingBottom: "15px",
            }}
          />
        }
        title={
          <div>
            <p className="text-content-title">
              Website Administrator (Freelance) @ B.S.E. Electronic
            </p>
            <p className="text-content-title">Bangkok, Thailand</p>
          </div>
        }
        content={<p className="text-content">November 2021 - Present</p>}
        style={{ margin: "5px", cursor: "pointer" }}
        onClick={() => {
          window.location.href = `${basename}/work/bse`;
        }}
      />
      <DataCard
        icon={
          <img
            src="/images/aipen-logo.jpg"
            width="75px"
            alt=""
            style={{ borderRadius: "8px" }}
          />
        }
        title={
          <div>
            <p className="text-content-title">
              Data Scientist (Freelance) @ AiPEN Studio
            </p>
            <p className="text-content-title">Bangkok, Thailand</p>
          </div>
        }
        content={<p className="text-content">July 2021 - December 2021</p>}
        style={{ margin: "5px", cursor: "pointer" }}
        onClick={() => {
          window.location.href = `${basename}/work/aipen`;
        }}
      />
      <DataCard
        icon={
          <img
            src="/images/bse-logo.png"
            width="75px"
            alt=""
            style={{
              borderRadius: "8px",
              backgroundColor: "#ffffff",
              paddingLeft: "3px",
              paddingRight: "3px",
              paddingTop: "15px",
              paddingBottom: "15px",
            }}
          />
        }
        title={
          <div>
            <p className="text-content-title">
              Web Developer (Freelance) @ B.S.E. Electronic
            </p>
            <p className="text-content-title">Bangkok, Thailand</p>
          </div>
        }
        content={<p className="text-content">May 2021 - October 2021</p>}
        style={{ margin: "5px", cursor: "pointer" }}
        onClick={() => {
          window.location.href = `${basename}/work/bse`;
        }}
      />
      <DataCard
        icon={
          <img
            src="/images/mfec-logo.jpg"
            width="75px"
            alt=""
            style={{ borderRadius: "8px" }}
          />
        }
        title={
          <div>
            <p className="text-content-title">
              Data Scientist (Internship) @ MFEC PUBLIC COMPANY LIMITED
            </p>
            <p className="text-content-title">Bangkok, Thailand</p>
          </div>
        }
        content={<p className="text-content">June 2020 - July 2020</p>}
        style={{ margin: "5px", cursor: "pointer" }}
        onClick={() => {
          window.location.href = `${basename}/work/mfec`;
        }}
      />
      <DataCard
        icon={
          <img
            src="/images/wwb-logo.png"
            width="75px"
            alt=""
            style={{
              borderRadius: "8px",
              backgroundColor: "#ffffff",
            }}
          />
        }
        title={
          <div>
            <p className="text-content-title">Food Service @ White Water Bay</p>
            <p className="text-content-title">Oklahoma City, Oklahoma, USA</p>
          </div>
        }
        content={<p className="text-content">May 2019 - August 2019</p>}
        style={{ margin: "5px" }}
      />
      <DataCard
        title={
          <div>
            <p className="text-content-title">Mathematics Tutor</p>
            <p className="text-content-title">Bangkok, Thailand</p>
          </div>
        }
        content={<p className="text-content">May 2017 - April 2021</p>}
        style={{ margin: "5px" }}
      />
    </div>
  );
}
