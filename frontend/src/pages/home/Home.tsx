import Header from "../../components/navigation/header/Header";
import Menu from "../../components/navigation/menu/Menu";
import { Route, Routes } from "react-router-dom";
import RecipeList from "../../views/recipe-list/RecipeList";
import RecipeEditor from "../../views/recipe-editor/RecipeEditor";
import Recipe from "../../views/recipe/Recipe";

const Home = () => {
  return (
    <div className="w-full h-full bg-default-100 flex items-center justify-center">
      <div className="w-full max-w-[1200px] h-full overflow-y-scroll relative">
        <Menu />
        <Header />
        <div className="w-[calc(100%-260px)] h-[calc(100%-70px)] absolute top-[70px] left-[260px] overflow-y-scroll">
          <Routes>
            <Route path="/recipe-editor/*" element={<RecipeEditor />} />
            <Route path="/recipe/*" element={<Recipe />} />
            <Route path="/recipe-list/*" element={<RecipeList />} />
            <Route path="/*" element={<RecipeList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
