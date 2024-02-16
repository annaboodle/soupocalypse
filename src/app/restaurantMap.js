// restaurant logos
import mischiefLogo from "../img/logos/mischief.png";
import dreamlandLogo from "../img/logos/dreamland.png";
import triangleLogo from "../img/logos/triangle.png";
import swelLogo from "../img/logos/swel.png";
import soulLogo from "../img/logos/soul.jpeg";
import shawnLogo from "../img/logos/shawn.png";
import redStarLogo from "../img/logos/red-star.png";
import pecadoLogo from "../img/logos/pecado.png";
import paseoLogo from "../img/logos/paseo.webp";
import localTideLogo from "../img/logos/local-tide.png";
import kaosamaiLogo from "../img/logos/kaosamai.jpeg";
import georgeLogo from "../img/logos/george.jpeg";
import elCaminoLogo from "../img/logos/ElCamino.jpeg";

// soup photos
import mischiefBisqueImg from "../img/mischief/bisque.jpeg";
import mischiefMasalaImg from "../img/mischief/masala.jpeg";

import kaosamaiTomYumImg from "../img/kaosamai/tom-yum.webp";
import kaosamaiWonTonImg from "../img/kaosamai/won-ton.webp";
import kaosamaiTomKhaImg from "../img/kaosamai/tom-kha.webp";
import kaosamaiDuckNoodleImg from "../img/kaosamai/duck-noodle.webp";
import kaosamaiGuayTiowTomYumImg from "../img/kaosamai/guay-tiow-tom-yum.webp";
import kaosamaiGuayTiowVegetarianImg from "../img/kaosamai/guay-tiow-vegetarian.webp";

import elCaminoPozoleVerdeImg from "../img/el-camino/Pozole+Verde.jpg";
import elCaminoTortillaImg from "../img/el-camino/tortilla-soup.jpeg";

import localTideClamChowderImg from "../img/local-tide/LT+Clam+Chowder.jpeg";

import shawnClamChowderImg from "../img/shawn/clam-chowder.jpeg";

import redStarPozoleImg from "../img/red-star/pozole.jpeg";

import soulGumboImg from "../img/soul/gumbo.webp";

import pecadoTortillaImg from "../img/pecado/chicken-tortilla.jpeg";

export const restaurantAssets = {
  mischief: {
    logo: mischiefLogo,
    soups: [
      {
        name: "Guajillo Lime Butternut Squash Bisque",
        img: mischiefBisqueImg,
      },
      {
        name: "Lamb masala",
        img: mischiefMasalaImg,
      },
    ],
  },
  kaosamai: {
    logo: kaosamaiLogo,
    soups: [
      {
        name: "Tom Yum",
        img: kaosamaiTomYumImg,
      },
      {
        name: "Wonton Soup",
        img: kaosamaiWonTonImg,
      },
      {
        name: "Tom Kah",
        img: kaosamaiTomKhaImg,
      },
      {
        name: "Guay Tiow Bed (Duck Noodle Soup)",
        img: kaosamaiDuckNoodleImg,
      },
      {
        name: "Guay Tiow Tom Yum",
        img: kaosamaiGuayTiowTomYumImg,
      },
      {
        name: "Guay Tiow Veg (Vegetarian Noodle Soup)",
        img: kaosamaiGuayTiowVegetarianImg,
      },
    ],
  },
  elCamino: {
    logo: elCaminoLogo,
    soups: [
      {
        name: "Pozole verde",
        img: elCaminoPozoleVerdeImg,
      },
      {
        name: "Tortilla soup",
        img: elCaminoTortillaImg,
      },
    ],
  },
  localTide: {
    logo: localTideLogo,
    soups: [
      {
        name: "Clam chowder",
        img: localTideClamChowderImg,
      },
    ],
  },
  shawn: {
    logo: shawnLogo,
    soups: [
      {
        name: "Clam chowder",
        img: shawnClamChowderImg,
      },
    ],
  },
  paseo: {
    logo: paseoLogo,
  },
  redStar: {
    logo: redStarLogo,
    soups: [
      {
        name: "Pozole Verde",
        img: redStarPozoleImg,
      },
    ],
  },
  swel: {
    logo: swelLogo,
  },
  soul: {
    logo: soulLogo,
    soups: [
      {
        name: "Gumbo",
        img: soulGumboImg,
      },
    ],
  },
  dreamland: {
    logo: dreamlandLogo,
  },
  triangle: {
    logo: triangleLogo,
  },
  george: {
    logo: georgeLogo,
  },
  pecado: {
    logo: pecadoLogo,
    soups: [
      {
        name: "Chicken tortilla soup",
        img: pecadoTortillaImg,
      },
    ],
  },
};
