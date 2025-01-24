import React from "react";
import Navbar from "../../components/navbar";
import Landpage from "../../components/landpage";
import Products from "../../components/products";
import Banner from "../../components/banner";
import Collections from "../../components/collections";
import NewsLetter from "../../components/newsLetter";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <>
      <main className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <Landpage />
      </main>
      <Products />
      <Banner />
      <Collections />
      <NewsLetter />
    </>
  );
};

export default Home;
