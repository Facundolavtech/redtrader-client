const Header = ({ children, classes, ...rest }) => {
  return (
    <header className={classes} {...rest}>
      {children}
    </header>
  );
};

export default Header;
