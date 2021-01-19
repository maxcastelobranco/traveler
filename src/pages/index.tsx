import { NextPage } from "next";
import Header from "../components/Header";
import Content from "../components/pages/HomePage/Content";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Content />
    </>
  );
};

export default Home;
