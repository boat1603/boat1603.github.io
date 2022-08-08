import { Certificate } from "./content/Certificate";
export default function CoursesPage() {
  return (
    <div style={{ height: "100%" }}>
      {/* <div className="text-title">Compettitions</div>
      <div className="text-title">Certificates</div> */}
      <div className="text-title">Online Courses</div>
      <Certificate />
      {/* <iframe
        src="https://drive.google.com/file/d/1D_rewkOJfNqZkpe9kJIIvWUDO-CwLk1t/preview"
        width="100%"
        height="100%"
        // height="480"
        allow="autoplay"
      ></iframe> */}
    </div>
  );
}
