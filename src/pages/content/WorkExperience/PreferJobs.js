import { Grid } from "@mui/material";
import DataCard from "./../../../ui-component/cards/DataCard";
export default function PreferJobs() {
  return (
    <div>
      <div className="text-title" style={{ marginTop: "20px" }}>
        Job's position that I prefer to do
      </div>
      <div className="text-subtitle" style={{ margin: "8px" }}>
        Interest to do
      </div>
      <Grid
        container
        spacing={0}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <DataCard
          title={<p className="text-content-title"># AI/ML Engineer</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Data Science</p>}
          style={{ margin: "4px" }}
        />
      </Grid>
      <div className="text-subtitle" style={{ margin: "8px" }}>
        Want to do
      </div>
      <Grid
        container
        spacing={0}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <DataCard
          title={<p className="text-content-title"># Backend Developer</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># MLOps</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># DevOps</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Cloud Engineer</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Consultant</p>}
          style={{ margin: "4px" }}
        />
      </Grid>
      <div className="text-subtitle" style={{ margin: "8px" }}>
        Can do
      </div>
      <Grid
        container
        spacing={0}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <DataCard
          title={<p className="text-content-title"># Data Engineer</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Frontend Developer</p>}
          style={{ margin: "4px" }}
        />
        <DataCard
          title={<p className="text-content-title"># Electrical Engineer</p>}
          style={{ margin: "4px" }}
        />
      </Grid>
    </div>
  );
}
