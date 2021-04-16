import UserMenu from "../UserMenu";

const Nav = ({ name, plan }) => {
  return (
    <div className="dashboard__nav">
      <h1 style={{ textTransform: "capitalize" }}>{name}</h1>
      <UserMenu plan={plan} />
    </div>
  );
};

export default Nav;
