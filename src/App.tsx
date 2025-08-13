import Home from "./components/pages/Home";
import Button from "./components/ui/Button/";

const App = () => {
  return (
    <>
      <Home />

      <Button type="submit">Ukhasyah</Button>
      <Button>Zufar</Button>
      <Button>
        <h1>Hani</h1>
      </Button>
    </>
  );
};

export default App;
