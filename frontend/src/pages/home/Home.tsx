import Header from "../../components/navigation/header/Header";
import Menu from "../../components/navigation/menu/Menu";

const Home = () => {
  return (
    <div className="w-full h-full bg-default-100 flex items-center justify-center">
      <div className="w-full max-w-[1200px] bg-red-3001 h-full overflow-y-scroll relative">
        <Menu />
        <Header />
      </div>
    </div>
  );
};

export default Home;
