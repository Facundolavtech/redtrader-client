import {
  OfflineBolt,
  EditAttributes,
  HighlightOff,
  LocalOffer,
  LiveTv,
} from "@material-ui/icons";
import Admin from "./Tabs/Admin/Admin";
import UpdateCoupon from "./Tabs/Coupons/UpdateCoupon";
import DeleteAccount from "./Tabs/DeleteAccount/DeleteAccount";
import UpdateEducator from "./Tabs/Educator/UpdateEducator";
import Plan from "./Tabs/Plan/Plan";

const NavItems = [
  {
    name: "Activar/Desactivar un plan",
    icon: <EditAttributes />,
    value: <Plan />,
  },
  {
    name: "Añadir/Eliminar un Administrador",
    icon: <OfflineBolt />,
    value: <Admin />,
  },
  {
    name: "Añadir/Eliminar un Educador",
    icon: <LiveTv />,
    value: <UpdateEducator />,
  },
  {
    name: "Crear/Eliminar cupon de descuento",
    icon: <LocalOffer />,
    value: <UpdateCoupon />,
  },
  {
    name: "Borrar una cuenta",
    icon: <HighlightOff />,
    value: <DeleteAccount />,
  },
];

export default NavItems;
