import { AdvertiserInformation } from "./components/AdvertiserInformation";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <AdvertiserInformation
        user={{
          name: "Hyan Lopes",
          description:
            "Loren oahsdohaosdhoahdoshpdohao hsodh oahsdhasdo haosdhauhs odhasodh o",
          type: "Anunciante",
        }}
        create_ad={true}
      />
    </>
  );
}

export default App;
