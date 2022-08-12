import DataCard from "./cards/DataCard";
import frameworks from "../pages/content/frameworks";
import tools from "../pages/content/tools";
import { Grid, Divider, Button } from "@mui/material";
export default function Content(props) {
  let { title, content, tags, url, framework } = props;
  let tools_and_framework = { ...frameworks, ...tools };
  return (
    <div>
      {title && <div className="text-subtitle">{title}</div>}
      {content && content}
      {url && (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={() => {
              window.open(url);
            }}
          >
            Reference
          </Button>
        </div>
      )}
      {tags && tags !== [] && <Tags tags={tags} />}
      {framework && (
        <div>
          <div className="text-subtitle" style={{ marginTop: "20px" }}>
            Tools{" & "}FrameWorks
          </div>
          <Grid
            container
            spacing={0}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            {framework.map((v, i) => {
              return tools_and_framework[v];
            })}
          </Grid>
        </div>
      )}

      {title ? (
        <Divider style={{ marginTop: "8px", marginBottom: "8px" }} />
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Divider
            variant="middle"
            style={{ marginTop: "4px", marginBottom: "4px", width: "80%" }}
          />
        </div>
      )}
    </div>
  );
}

function Tags(props) {
  let { tags } = props;
  return (
    <div>
      <div className="text-content-title">Tags</div>
      <Grid
        container
        spacing={0}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        {tags.map((v, i) => {
          return (
            <DataCard
              title={<p className="text-content-title"># {v}</p>}
              style={{ margin: "4px" }}
            />
          );
        })}
      </Grid>
    </div>
  );
}
