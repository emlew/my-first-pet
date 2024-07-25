export const Progress: React.FC<{
  scores: {
    [k: string]: number;
  };
}> = ({ scores }) => {
  return (
    <div id="progress">
      {Object.entries(scores).map((p) => {
        return (
          <p key={p[0]} id="progress-bar" style={{ height: p[1] * 10 + "vh" }}>
            {/* {p[0]} */}
          </p>
        );
      })}
    </div>
  );
};
