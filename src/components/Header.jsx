/* eslint-disable */
import { LuMenu } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { TbSunMoon } from "react-icons/tb";
import { FiBell } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import logo from "../assets/logo.svg";
import MenuItem from "./MenuItem";
import AddArticle from "./AddArticle";
import MenuIcon from "./MenuIcon";
import Container from "./Container";

import { memo } from "react";

const Header = ({ countFav, changeTheme, theme, setShowModal }) => {
  return (
    <header
      className={
        theme === "white"
          ? "fixed z-50 w-full border-b bg-white"
          : "fixed z-50 w-full border-b bg-black"
      }
    >
      <Container className="flex flex-col lg:flex lg:justify-between">
        <div className="lg:mt-4 lg:flex lg:justify-between">
          <div className="relative mb-4 mt-4 flex items-center justify-center lg:mt-0 xl:gap-4">
            <LuMenu className="absolute left-0 text-4xl text-sky-900 lg:hidden" />
            <img src={logo} alt="Logo LeBonCoin" />
            <AddArticle className="hidden lg:flex" />
          </div>
          <div className="hidden lg:flex lg:gap-2">
            <div className="flex flex-col items-center">
              <button onClick={changeTheme}>
                <MenuIcon text="Thème" Icon={TbSunMoon} />
              </button>
            </div>
            <MenuIcon text="Mes recherches" Icon={FiBell} />
            <div
              className="relative flex flex-col items-center"
              onClick={() => {
                if (countFav !== 0) {
                  setShowModal(true);
                }
              }}
            >
              <MenuIcon text="Favoris" Icon={FaRegHeart} />
              {countFav ? (
                <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {countFav}
                </span>
              ) : (
                ""
              )}
            </div>
            <MenuIcon text="Messages" Icon={MdOutlineMessage} />
            <MenuIcon text="Se connecter" Icon={CgProfile} />
          </div>
        </div>
        <div className="mb-4 flex w-full items-center justify-center rounded-xl bg-gray-100 px-4 py-4 lg:hidden">
          <CiSearch className="text-lg" />
          <input
            type="text"
            placeholder="Rechercher sur leboncoin"
            className="h-full w-full rounded-lg bg-gray-100 pl-3"
          />
        </div>
        <ul className="flex w-full items-center gap-4 overflow-x-scroll whitespace-nowrap pb-4 no-scrollbar">
          <MenuItem>Immobilier</MenuItem>
          <p>•</p>
          <MenuItem>Véhicules</MenuItem>
          <p>•</p>
          <MenuItem>Locations de vacances</MenuItem>
          <p>•</p>
          <MenuItem>Emploi</MenuItem>
          <p>•</p>
          <MenuItem>Mode</MenuItem>
          <p>•</p>
          <MenuItem>Maison & Jardin</MenuItem>
          <p>•</p>
          <MenuItem>Famille</MenuItem>
          <p>•</p>
          <MenuItem>Electronique</MenuItem>
          <p>•</p>
          <MenuItem>Loisirs</MenuItem>
          <p>•</p>
          <MenuItem>Autres</MenuItem>
        </ul>
      </Container>
    </header>
  );
};

export default memo(Header);
