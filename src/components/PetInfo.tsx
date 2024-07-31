import { useState } from "react";
import { PETS } from "../data";
import { Tabs } from "./Tabs";
import { Box, Button, Typography } from "@mui/material";

export const PetInfo: React.FC = () => {
  const [selectedPet, setSelectedPet] = useState("");

  const handleSelect = (selectedButton: string) => {
    setSelectedPet(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;

  if (selectedPet) {
    tabContent = (
      <Box id="tab-content">
        <Typography variant="h4">{PETS[selectedPet].name}</Typography>
        <Typography>{PETS[selectedPet].info}</Typography>
      </Box>
    );
  }

  return (
    <section title="All Pet Info" id="pets">
      <Tabs
        buttons={
          <>
            {Object.entries(PETS).map((pet) => {
              return (
                <Button
                  onClick={() => handleSelect(pet[1].name)}
                  className={selectedPet === pet[1].name ? "active" : undefined}
                >
                  {pet[1].name}
                </Button>
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
