// restaurant logos
import mischiefLogo from "../../public/img/logos/mischief.png";
import dreamlandLogo from "../../public/img/logos/dreamland.png";
import triangleLogo from "../../public/img/logos/triangle.png";
import swelLogo from "../../public/img/logos/swel.png";
import soulLogo from "../../public/img/logos/soul.jpeg";
import shawnLogo from "../../public/img/logos/shawn.png";
import redStarLogo from "../../public/img/logos/red-star.png";
import pecadoLogo from "../../public/img/logos/pecado.png";
import paseoLogo from "../../public/img/logos/paseo.webp";
import localTideLogo from "../../public/img/logos/local-tide.png";
import kaosamaiLogo from "../../public/img/logos/kaosamai.jpeg";
import georgeLogo from "../../public/img/logos/george.jpeg";
import elCaminoLogo from "../../public/img/logos/ElCamino.jpeg";

// soup photos
import mischiefBisqueImg from "../../public/img/mischief/bisque.jpeg";
import mischiefMasalaImg from "../../public/img/mischief/masala.jpeg";

import kaosamaiTomYumImg from "../../public/img/kaosamai/tom-yum.webp";
import kaosamaiWonTonImg from "../../public/img/kaosamai/won-ton.webp";
import kaosamaiTomKhaImg from "../../public/img/kaosamai/tom-kha.webp";
import kaosamaiDuckNoodleImg from "../../public/img/kaosamai/duck-noodle.webp";
import kaosamaiGuayTiowTomYumImg from "../../public/img/kaosamai/guay-tiow-tom-yum.webp";
import kaosamaiGuayTiowVegetarianImg from "../../public/img/kaosamai/guay-tiow-vegetarian.webp";

import elCaminoPozoleVerdeImg from "../../public/img/el-camino/Pozole+Verde.jpg";
import elCaminoTortillaImg from "../../public/img/el-camino/tortilla-soup.jpeg";

import localTideClamChowderImg from "../../public/img/local-tide/LT+Clam+Chowder.jpeg";

import shawnClamChowderImg from "../../public/img/shawn/clam-chowder.jpeg";

import redStarPozoleImg from "../../public/img/red-star/pozole.jpeg";

import soulGumboImg from "../../public/img/soul/gumbo.webp";

import pecadoTortillaImg from "../../public/img/pecado/chicken-tortilla.jpeg";

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
