import Nav from "./Nav";
import Content from "./Content";
import Picture from "./Picture";
import Wrapper from "./Wrapper";

const Main = () => {
  return (
    <div className="w-full bg-white">
      {/* <Nav />
      <section className="flex items-center justify-between ">
        <Content />
        <Picture />
      </section> */}
      <Wrapper>
        <Nav />
        <section className="flex items-center justify-between ">
          <Content />
          <Picture />
        </section>
      </Wrapper>
    </div>
  );
};

export default Main;
