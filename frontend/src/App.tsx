import { Switch } from "./components/switch/Switch";

const App = () => {
  return (
    <>
      <Switch
        className="fixed right-0 bottom-0 z-50  "
        variant="theme"
        size="lg"
        onChange={(state: boolean) => {
          document.documentElement.setAttribute(
            "data-theme",
            state ? "dark" : "light"
          );
        }}
      />
    </>
  );
};

export default App;
