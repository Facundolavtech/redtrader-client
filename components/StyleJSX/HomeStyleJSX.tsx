const HomeStyleJSX = ({ backdrop }) => {
  return (
    <style jsx global>
      {`
        html {
          overflow-y: ${backdrop ? "hidden !important" : "unset"};
        }

        html,
        body {
          overflow-x: hidden;
          -ms-overflow-style: initial; /* IE and Edge */
          scrollbar-width: initial; /* Firefox */
        }
        body::-webkit-scrollbar {
          display: block;
          width: 12px;
          cursor: pointer;
          position: absolute;
          z-index: 9000;
        }
        body::-webkit-scrollbar-track {
          background: none;
        }
        body::-webkit-scrollbar-thumb {
          background-color: rgba(245, 6, 6, 0.705);
          border-radius: 20px;
          border: 3px solid #ffffff;
        }
      `}
    </style>
  );
};

export default HomeStyleJSX;
