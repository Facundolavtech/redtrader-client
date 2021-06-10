import {
  AccountBalance,
  PlayArrow,
  School,
  Smartphone,
  TrendingUp,
} from "@material-ui/icons";
import LiveTab from "../components/Dashboard/Tabs/Items/Lives";
import VideoList from "../components/Dashboard/Tabs/Items/Academy";
import SignalsTab from "../components/Dashboard/Tabs/Items/Signals";
import BrokersTab from "../components/Dashboard/Tabs/Items/Brokers";
import Arbitrage from "../components/Dashboard/Tabs/Items/Arbitrage";

const TabList = [
  {
    name: "Academia Basica",
    icon: <School />,
    component: <VideoList />,
  },
  {
    name: "Academia de Arbitraje",
    icon: <TrendingUp />,
    component: <Arbitrage />,
  },
  {
    name: "Red Trade App",
    icon: <Smartphone />,
    component: <SignalsTab />,
  },
  {
    name: "RedTrader Live",
    icon: <PlayArrow />,
    component: <LiveTab />,
  },
  {
    name: "Brokers",
    icon: <AccountBalance />,
    component: <BrokersTab />,
  },
];

export default TabList;
