const BreaksProgress = ({ percent = 0 }) => {
  return (
    <>
      <div className="outer-container">
        <div className="inner-container" style={{ width: `${percent}%` }}>
          {percent >= 1 ? `${percent / 10} breaks` : null}
        </div>
      </div>
    </>
  );
};

export default BreaksProgress;
