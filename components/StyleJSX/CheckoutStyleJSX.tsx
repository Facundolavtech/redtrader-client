const CheckoutStyleJSX = () => {
  return (
    <style jsx global>{`
      body {
        background-color: rgb(250, 250, 250) !important;
      }

      @media screen and (max-width: 768px) {
        body {
          background-color: rgb(255, 255, 255) !important;
        }
      }
    `}</style>
  );
};

export default CheckoutStyleJSX;
