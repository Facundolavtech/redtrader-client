import { WhatsApp } from "@material-ui/icons";

const FloatingWhatsapp = () => {
  return (
    <a
      className="floating__whatsapp"
      href="https://api.whatsapp.com/send?phone=5491135775145&text=**Ingrese%20su%20mensaje**"
      target="_blank"
    >
      <WhatsApp />
    </a>
  );
};

export default FloatingWhatsapp;
