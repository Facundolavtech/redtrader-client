import React, { useEffect, useState } from "react";

const NextReset = ({ next_reset }) => {
  const [nextResetFormatted, setNextResetFormatted] = useState(null);

  useEffect(() => {
    const format = new Date(next_reset);

    setNextResetFormatted(format.toLocaleDateString());
  }, [next_reset]);

  if (nextResetFormatted)
    return (
      <h3 className="next__reset">
        Las estadisticas se resetearan el: <span>{nextResetFormatted}</span>
      </h3>
    );
  else return null;
};

export default NextReset;
