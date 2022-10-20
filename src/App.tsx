import { TextArea } from "./components/textarea";
import GlobalStyles from "./styles/global";
function App() {
  return (
    <>
      <GlobalStyles />
      <TextArea placeholder="Sem comentário" />
      <TextArea is_comment placeholder="Comentário" />
    </>
  );
}

export default App;
