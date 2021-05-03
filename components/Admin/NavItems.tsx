import {
  OfflineBolt,
  EditAttributes,
  HighlightOff,
  LocalOffer,
} from "@material-ui/icons";

const NavItems = [
  {
    name: "Activar/Desactivar un plan",
    icon: <EditAttributes />,
  },
  {
    name: "Añadir/Eliminar un Administrador",
    icon: <OfflineBolt />,
  },
  {
    name: "Crear/Eliminar cupon de descuento",
    icon: <LocalOffer />,
  },
  {
    name: "Borrar una cuenta",
    icon: <HighlightOff />,
  },
];

export default NavItems;
