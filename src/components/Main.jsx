/* eslint-disable */
import Container from "./Container";
import ProductCarousel from "./ProductCarousel";
import Title from "./Title";
import TopCarousel from "./TopCarousel";
import AddArticle from "./AddArticle";

import data from "../data.json";

import { memo } from "react";

const Main = ({ addFav, removeFav, fav, theme }) => {
  return (
    <main className="pt-44">
      <Container>
        <div className="mt-3 flex flex-col items-center justify-center rounded-xl bg-back-button py-3 md:flex-row md:gap-4">
          <button className={"mb-3 text-xl font-bold text-black md:mb-0"}>
            C&apos;est le moment de vendre
          </button>
          <AddArticle />
        </div>
        <Title level={2}>Top Catégories</Title>
        <TopCarousel data={data.categories} />
        <Title level={2}>En ce moment sur leboncoin</Title>
        <Title level={3}>Tablettes & liseuses</Title>
        <ProductCarousel
          data={data.products.tablets}
          addFav={addFav}
          removeFav={removeFav}
        />
        <Title level={3}>Consoles</Title>
        <ProductCarousel
          data={data.products.consols}
          addFav={addFav}
          removeFav={removeFav}
          theme={theme}
        />
      </Container>
    </main>
  );
};

export default memo(Main);
