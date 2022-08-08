// import { Button } from "@mui/material";
export default function Footer(props) {
  let { setReadcond } = props;
  return (
    <div className="page-footer">
      <div className="text-content" style={{ fontSize: "10px" }}>
        By continuing to use my website you have to accept
        <b
          className="text-primary"
          style={{
            marginLeft: "3px",
            // textDecoration: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            setReadcond(true);
          }}
        >
          Term and Condition
        </b>
      </div>
      {/* <Button
        style={{ marginLeft: "8px" }}
        onClick={() => {
          localStorage.setItem("TermnCond", "accept");
        }}
      >
        <p className="text-content" style={{ fontSize: "10px" }}>
          Accept
        </p>
      </Button> */}
    </div>
  );
}
