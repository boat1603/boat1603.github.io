// import { useSelector } from "react-redux";
import Content from "../../ui-component/Content";
import { Typography } from "@mui/material";
export default function LoolooPage() {
  //   const customization = useSelector((state) => state.customization);
  let projects = [
    {
      title: "Machine Learning Engineer (October 2022 - Present)",
      content: (
        <div>
          <Typography gutterBottom>
            &emsp;- Develop Semi-Structured OCR model to understand accountant
            documents.
          </Typography>
          <Typography gutterBottom>
            &emsp;- Develop deep learning based document understanding using
            language model.
          </Typography>
          <Typography gutterBottom>
            &emsp;- Pretraining document understanding language model.
          </Typography>
        </div>
      ),
      tags: ["Python", "OCR", "Document Understanding"],
      framework: ["python", "pytorch", "huggingface", "slurm"],
    },
  ];
  return (
    <div>
      <div className="text-title">Work at Looloo</div>
      {projects.map((v, i) => {
        return (
          <Content
            title={v.title}
            content={v.content}
            tags={v.tags}
            framework={v.framework}
          />
        );
      })}
    </div>
  );
}
