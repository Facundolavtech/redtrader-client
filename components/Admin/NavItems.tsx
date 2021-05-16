import {
  OfflineBolt,
  EditAttributes,
  HighlightOff,
  LocalOffer,
  LiveTv,
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
    name: "Añadir/Eliminar un Educador",
    icon: <LiveTv />,
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
