import { PersonalInformation } from "./content/PersonalInformation";
import { ProgrammingSkills } from "./content/Skills";
import {
  PreferJobs,
  WorkSummary,
  EducationSummary,
} from "./content/WorkExperience";

import Divider from "@mui/material/Divider";

export default function HomePage() {
  return (
    <div>
      <PersonalInformation />
      <Divider style={{ marginTop: "8px" }} />
      <ProgrammingSkills />
      <Divider style={{ marginTop: "8px" }} />
      <PreferJobs />
      <Divider style={{ marginTop: "8px" }} />
      <WorkSummary />

      <Divider style={{ marginTop: "8px" }} />
      <EducationSummary />
    </div>
  );
}
