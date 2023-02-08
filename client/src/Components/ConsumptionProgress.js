const ConsumptionProgress = ({ percent = 0, amount}) => {

  
  return (
    <>
      <div className="outer-container">
        <div className="inner-container" style={{ width: `${percent}%` }}>
          {percent >= 1 ? `${amount}` : null}
        </div>
      </div>
    </>
  );
};

export default ConsumptionProgress;
