import { Button } from "./components/Button";
import { Comment } from "./components/Comment";
import GlobalStyles from "./styles/global";
import { Card } from "./components/Card";

function App() {
  const data = {
    id: "1",
    type: "car",
    active: false,
    title: "Teste Carro 1",
    description: "Teste Carro 1",
    km: 0,
    year: 2019,
    price: 15000.0,
    advertiser: "Saulo José",
    image:
      "https://img1.gratispng.com/20180313/eke/kisspng-beverly-hills-car-luxury-vehicle-driving-auto-deta-red-car-5aa811d94c4844.9534714315209640573125.jpg",
  };

  return (
    <>
      <GlobalStyles />
      <Card data={data} />
    </>
  );
}

export default App;
