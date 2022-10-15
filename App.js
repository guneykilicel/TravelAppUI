import TOURS from "./config/TOURS"
import HomeScreen from "./screens/HomeScreen"
import TourDetailScreen from "./screens/TourDetailScreen"
export default function App() {
  // return <HomeScreen />
  return <TourDetailScreen tour ={TOURS[3]} />;
}
