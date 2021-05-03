import UserMenu from "../UserMenu";

const Nav = ({ name, plan, shortId, admin }) => {
  return (
    <div className="dashboard__nav">
      <h1 style={{ textTransform: "capitalize" }}>{name}</h1>
      <UserMenu plan={plan} shortId={shortId} admin={admin} />
    </div>
  );
};

export default Nav;
