import DataCard from "./../ui-component/cards/DataCard";
export default function PortfolioPage() {
  return (
    <div>
      <div className="text-title">Portfolio</div>
      <DataCard
        content={
          <div style={{ textAlign: "center" }}>
            " I am a lazy man that why I did a lot of projects to make my life
            easier "
          </div>
        }
        style={{
          justifyContent: "center",
          padding: "16px",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}
