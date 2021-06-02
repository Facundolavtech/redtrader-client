import { WhatsApp as WhatsappIcon } from "@material-ui/icons";

const Whatsapp = () => {
  return (
    <a
      className="floating__whatsapp"
      href="https://api.whatsapp.com/send?phone=5491135775145&text=**Ingrese%20su%20mensaje**"
      target="_blank"
    >
      <WhatsappIcon />
    </a>
  );
};

export default Whatsapp;
