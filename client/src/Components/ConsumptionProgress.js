const ConsumptionProgress = ({ percent = 0 }) => {
  return (
    <>
      <div className="outer-container">
        <div className="inner-container" style={{ width: `${percent}%` }}>
          {percent >= 1 ? `${percent / 25}` : null}
        </div>
      </div>
    </>
  );
};

export default ConsumptionProgress;
