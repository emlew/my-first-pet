import { PETS } from "../data";

const petNames = Object.keys(PETS);

export const Progress: React.FC = () => {
  const height = 2;
  return (
    <div id="progress">
      {petNames.map((p) => {
        return (
          <p id="progress-bar" style={{ height: height * 10 + "vh" }}>
            {p}
          </p>
        );
      })}
    </div>
  );
};
