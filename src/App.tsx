import { Button } from "./components/Button";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <Button variant={"grey0"}>Grey 1</Button>
      <Button variant={"grey0"} size={"medium"} width={25}>
        Grey 1
      </Button>
      <Button variant={"negative"}>Negative</Button>
      <Button variant={"disable"}>Disable</Button>
      <Button variant={"brand1"}>Brand1</Button>
      <Button variant={"brandOpacity"}>brandOpacity</Button>
      <Button variant={"light"}>light</Button>
      <Button variant={"linkButton"}>Link</Button>
      <Button variant={"alert"}>alert</Button>
      <Button variant={"sucess"}>sucess</Button>
      <Button variant={"brandDisable"}>brandDisable</Button>
    </>
  );
}

export default App;
