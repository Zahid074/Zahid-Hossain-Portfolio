import {
  FaBrain,
  FaSearch,
  FaChartLine,
  FaGlobe,
  FaEye,
  FaProjectDiagram,
  FaCode,
  FaTools,
  FaFlask,
  FaChartPie,
  FaServer,
  FaAward,
  FaMedal,
  FaCoins,
  FaCertificate,
  FaMicrophone,
  FaChess,
  FaCompass,
  FaRobot,
} from "react-icons/fa";

export const ICONS = {
  brain: FaBrain,
  search: FaSearch,
  chart: FaChartLine,
  globe: FaGlobe,
  eye: FaEye,
  network: FaProjectDiagram,
  code: FaCode,
  tools: FaTools,
  research: FaFlask,
  xai: FaChartPie,
  web: FaServer,
  award: FaAward,
  medal: FaMedal,
  coin: FaCoins,
  ribbon: FaCertificate,
  mic: FaMicrophone,
  chess: FaChess,
  compass: FaCompass,
  robot: FaRobot,
};

export function getIcon(name) {
  return ICONS[name] || FaAward;
}
