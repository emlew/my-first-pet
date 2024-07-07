export const Tabs: React.FC<{
  children: React.ReactNode;
  buttons: React.ReactNode;
}> = ({ children, buttons }) => {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
};
