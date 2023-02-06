const ConsumptionProgress = ({ percent = 0 }) => {
  return (
    <>
      <div className="outer-container">
        <div className="inner-container" style={{ width: `${percent}%` }}>
          {percent / 10} cups
        </div>
      </div>
    </>
  );
};

export default ConsumptionProgress;
