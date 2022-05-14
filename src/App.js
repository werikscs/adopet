import Signup from "./page/Signup";
import GlobalStyle from "./styles/global";
import Routers from "./routers";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Signup />
      <Routers />
    </>
  );
}

export default App;
