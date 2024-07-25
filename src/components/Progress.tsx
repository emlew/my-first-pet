import { PETS } from "../data";

export const Progress: React.FC<{
  scores: {
    [k: string]: number;
  };
  isFinished: boolean;
}> = ({ scores, isFinished }) => {
  return (
    <div id="progress">
      {Object.entries(scores).map((p,i) => {
        return (
          <div
            key={p[0]}
            id="progress-bar"
            style={{ height: p[1] > 0 ? p[1] * 10 + "vh" : "10vh" }}
          >
            <h3>{isFinished && p[0]}</h3>
            <p>{isFinished && PETS[p[0]].info}</p>
          </div>
        );
      })}
    </div>
  );
};
