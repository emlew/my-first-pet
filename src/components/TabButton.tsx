export const TabButton: React.FC<{
  children: React.ReactNode;
  isSelected: boolean;
}> = ({ children, isSelected, ...props }) => {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
};
