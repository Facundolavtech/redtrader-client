const EducatorTitle = ({ thumb, name, title, borderBottom }) => {
  return (
    <div
      className="educator__title"
      style={{
        borderBottom: borderBottom && "1px solid rgb(231, 231, 231)",
        paddingBottom: borderBottom && "20px",
      }}
    >
      <div className="thumbnail">
        <img src={thumb} alt={name} />
      </div>
      <div className="name">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default EducatorTitle;
