import React from "react";

const Progress = props => {
  const { percent } = props;
  return (
    <div className="progress_bar">
      <div className="percent" style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default Progress;
