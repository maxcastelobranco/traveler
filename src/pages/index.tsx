import { NextPage } from "next";
import Header from "../components/global/Header";
import Content from "../components/pages/Home/Content";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Content />
    </>
  );
};

export default Home;
