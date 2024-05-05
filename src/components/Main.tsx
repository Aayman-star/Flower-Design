import Nav from "./Nav";
import Content from "./Content";
import Picture from "./Picture";
const Main = () => {
  return (
    <div className="w-full h-full p-7">
      <Nav />
      <section className="flex items-center  mx-auto w-[1440px]">
        <Content />
        <Picture />
      </section>
    </div>
  );
};

export default Main;
