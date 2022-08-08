import { useSelector } from "react-redux";
import DataCard from "../../../ui-component/cards/DataCard";
import { Grid, Divider, Button } from "@mui/material";
import cert_data from "./cert_data.json";
export default function Certificate() {
  return (
    <div>
      {cert_data.map((v, i) => {
        return <CertCard data={v} />;
      })}
    </div>
  );
}

function CertCard(props) {
  //   let { name, url, platform, Organization, tags, tools, ref } = props;
  let { data } = props;
  const customization = useSelector((state) => state.customization);
  return (
    <div>
      <div className="text-subtitle">
        {data.platform}: {data.name} ({data.Organization})
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={data.url}
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
        {[...data.tools, ...data.tags].map((v, i) => {
          return (
            <DataCard
              title={<p className="text-content-title"># {v}</p>}
              style={{ margin: "4px" }}
            />
          );
        })}
      </Grid>
      {data.ref && (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={() => {
              window.open(data.ref);
            }}
          >
            Reference
          </Button>
        </div>
      )}
      <Divider style={{ marginTop: "8px", marginBottom: "8px" }} />
    </div>
  );
}
