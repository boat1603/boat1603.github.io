import DataCard from "./../../../ui-component/cards/DataCard";
export default function EducationSummary() {
  return (
    <div>
      <div className="text-title" style={{ marginTop: "20px" }}>
        Education
      </div>
      <DataCard
        icon={
          <img
            src="/images/chula-logo.png"
            width="75px"
            alt=""
            style={{
              borderRadius: "8px",
              backgroundColor: "#ffffff",
              paddingLeft: "16px",
              paddingRight: "16px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          />
        }
        title={
          <div>
            <p className="text-content-title">
              Electrical Engineering in Control Systems and Communication
            </p>
            <p className="text-content-title">
              Faculty of Engineering, Chulalongkorn University
            </p>
            <p className="text-content-title">Bangkok, Thailand</p>
          </div>
        }
        content={<p className="text-content">August 2017 - August 2021</p>}
        style={{ margin: "5px" }}
      />
      <DataCard
        icon={
          <img
            src="/images/sg-logo.png"
            width="75px"
            alt=""
            style={{ borderRadius: "8px" }}
          />
        }
        title={
          <div>
            <p className="text-content-title">Saint Gabriel's College</p>
            <p className="text-content-title">Bangkok, Thailand</p>
          </div>
        }
        content={<p className="text-content">May 2011 - May 2017</p>}
        style={{ margin: "5px" }}
      />
    </div>
  );
}
