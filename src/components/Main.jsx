/* eslint-disable */
import Container from "./Container";
import ProductCarousel from "./ProductCarousel";
import Title from "./Title";
import TopCarousel from "./TopCarousel";
import AddArticle from "./AddArticle";

import data from "../data.json";

import { memo } from "react";
import { useFavContext } from "../contexts/FavContext";
import { useThemeContext } from "../contexts/ThemeContext";

const Main = () => {
  const { favDispatch } = useFavContext();
  const { theme } = useThemeContext();
  return (
    <main className="pt-44">
      <Container>
        <div className="md:flex-row md:gap-4 mt-3 flex flex-col items-center justify-center rounded-xl bg-back-button py-3">
          <button className={"md:mb-0 mb-3 text-xl font-bold text-black"}>
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
          favDispatch={favDispatch}
        />
        <Title level={3}>Consoles</Title>
        <ProductCarousel
          data={data.products.consols}
          theme={theme}
          favDispatch={favDispatch}
        />
      </Container>
    </main>
  );
};

export default memo(Main);
