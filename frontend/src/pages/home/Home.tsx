import Menu from "../../components/navigation/menu/Menu";

const Home = () => {
  return (
    <div className="w-full h-full bg-default-100 flex items-center justify-center">
      <div className="w-full max-w-[1200px] bg-red-300 h-full overflow-y-scroll">
        <Menu />
      </div>
    </div>
  );
};

export default Home;
