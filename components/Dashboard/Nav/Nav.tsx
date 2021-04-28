import UserMenu from "../UserMenu";

const Nav = ({ name, plan, shortId }) => {
  return (
    <div className="dashboard__nav">
      <h1 style={{ textTransform: "capitalize" }}>{name}</h1>
      <UserMenu plan={plan} shortId={shortId} />
    </div>
  );
};

export default Nav;
