import { Button } from "./components/Button";
import { Comment } from "./components/Comment";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <Comment>
        <Button variant="disable">Comentar</Button>
      </Comment>
    </>
  );
}

export default App;
