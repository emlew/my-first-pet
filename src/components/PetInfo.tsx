import { useState } from "react";
import { PETS } from "../data";
import { TabButton } from "./TabButton";
import { Tabs } from "./Tabs";

export const PetInfo: React.FC = () => {
  const [selectedPet, setSelectedPet] = useState("");

  const handleSelect = (selectedButton: string) => {
    setSelectedPet(selectedButton);
    // console.log(selectedTopic);
  };

  let tabContent = <p>Please select a topic.</p>;

  if (selectedPet) {
    tabContent = (
      <div id="tab-content">
        <h3>{PETS[selectedPet].name}</h3>
        <p>{PETS[selectedPet].info}</p>
      </div>
    );
  }

  // TODO: check tabs props in red
  return (
    <section title="All Pet Info" id="pets">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            {Object.entries(PETS).map((pet) => {
              return (
                <TabButton
                  isSelected={selectedPet === pet[1].name}
                  onClick={() => handleSelect(pet[1].name)}
                >
                  {pet[1].info}
                </TabButton>
              );
            })}
          </>
        }
      >
        {tabContent}
      </Tabs>
    </section>
  );
};
