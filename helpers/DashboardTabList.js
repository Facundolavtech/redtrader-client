import { AccountBalance, LiveTv, School, Smartphone } from "@material-ui/icons";
import LiveTab from "../components/Dashboard/Tabs/Items/Lives";
import VideoList from "../components/Dashboard/Tabs/Items/Academy";
import SignalsTab from "../components/Dashboard/Tabs/Items/Signals";
import BrokersTab from "../components/Dashboard/Tabs/Items/Brokers";

const TabList = [
  {
    name: "Academia",
    icon: <School />,
    component: <VideoList />,
  },
  {
    name: "Red Trade App",
    icon: <Smartphone />,
    component: <SignalsTab />,
  },
  {
    name: "RedTrader Live",
    icon: <LiveTv />,
    component: <LiveTab />,
  },
  {
    name: "Brokers",
    icon: <AccountBalance />,
    component: <BrokersTab />,
  },
];

export default TabList;
