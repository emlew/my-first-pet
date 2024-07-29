import { Button } from "@mui/material";

export const TabButton: React.FC<{
  children: React.ReactNode;
  isSelected: boolean;
}> = ({ children, isSelected, ...props }) => {
  return (
    <li>
      <Button variant={"contained"} className={isSelected ? "active" : undefined} {...props}>
        {children}
      </Button>
    </li>
  );
};
