import { Switch } from "./components/switch/Switch";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/home/Home";
import { useDispatch } from "react-redux";
import React from "react";
import { getRecipe } from "./redux/slices/recipe";
const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getRecipe());
  }, []);

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
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
