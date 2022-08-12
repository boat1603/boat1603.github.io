import { Grid } from "@mui/material";

import frameworks from "./../frameworks";

import DataCard from "./../../../ui-component/cards/DataCard";

export default function ProgrammingSkills() {
  return (
    <div>
      <div className="text-title" style={{ marginTop: "20px" }}>
        Programming Skills
      </div>
      <Grid
        container
        spacing={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <DataCard
          icon={<img src="/icons/python-icon.png" width="25px" alt="" />}
          title={<p className="text-content-title">#Rank 1</p>}
          content={<p className="text-content">Python</p>}
          style={{ width: "160px", margin: "5px", height: "80px" }}
        />
        <DataCard
          icon={<img src="/icons/js-icon.png" width="25px" alt="" />}
          title={<p className="text-content-title">#Rank 2</p>}
          content={<p className="text-content">Javascript</p>}
          style={{ width: "160px", margin: "5px", height: "80px" }}
        />
        <DataCard
          icon={<img src="/icons/matlab-icon.png" width="25px" alt="" />}
          title={<p className="text-content-title">#Rank 3</p>}
          content={<p className="text-content">Matlab</p>}
          style={{ width: "160px", margin: "5px", height: "80px" }}
        />
        <DataCard
          icon={<img src="/icons/cpp-icon.png" width="25px" alt="" />}
          title={<p className="text-content-title">#Rank 4</p>}
          content={<p className="text-content">C/C++</p>}
          style={{ width: "160px", margin: "5px", height: "80px" }}
        />
        <DataCard
          icon={<img src="/icons/php-icon.png" width="25px" alt="" />}
          title={<p className="text-content-title">#Rank 5</p>}
          content={<p className="text-content">PHP</p>}
          style={{ width: "160px", margin: "5px", height: "80px" }}
        />
        <DataCard
          icon={<img src="/icons/r-icon.png" width="25px" alt="" />}
          title={<p className="text-content-title">#Rank 6</p>}
          content={<p className="text-content">R</p>}
          style={{ width: "160px", margin: "5px", height: "80px" }}
        />
        <DataCard
          icon={<img src="/icons/dart-icon.png" width="25px" alt="" />}
          title={<p className="text-content-title">#Rank 7</p>}
          content={<p className="text-content">Dart (Studying)</p>}
          style={{ width: "160px", margin: "5px", height: "80px" }}
        />
      </Grid>
      <div className="text-subtitle" style={{ marginTop: "20px" }}>
        Experienced on Tools{" & "}FrameWorks
      </div>
      <Grid
        container
        spacing={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {[
          "pytorch",
          "tensorflow",
          "huggingface",
          "fastapi",
          "nodejs",
          "react",
          "flutter",
          "sqlite",
          "posgres",
          "mongodb",
          "mosquitto",
          "arduino",
          "jetson",
          "git",
          "docker",
          "gcp",
          "aws",
          "huawei",
        ].map((v, i) => {
          return frameworks[v];
        })}
        {/* </div> */}
      </Grid>
    </div>
  );
}
