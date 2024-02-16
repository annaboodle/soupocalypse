"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Papa from "papaparse";
import Slider from "react-slick";
import CircletypeText from "./circletypeText";
import { restaurantAssets } from "./restaurantMap";
import styles from "./page.module.css";

// Import images
import promoImage from "../img/soupocalypse-promo.jpg";
import soup1 from "../img/godzilla/soup1.png";
import soup2 from "../img/godzilla/soup2.png";
import soup3 from "../img/godzilla/soup3.png";
import soup4 from "../img/godzilla/soup4.png";
import soup5 from "../img/godzilla/soup5.png";
import soup6 from "../img/godzilla/soup6.png";
import soup7 from "../img/godzilla/soup7.png";
import soup8 from "../img/godzilla/soup8.png";
import placeholderLogo from "../img/logos/placeholder-logo.png";

export default function Home() {
  // Data returned from Google Sheet:
  const [data, updateData] = useState([]);

  // Settings for slider that scrolls through soup items
  const settingsForSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  // Helper function to set soups to title case
  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  // Runs once on page load to get spreadsheet data with Papaparse and load it into data
  useEffect(() => {
    const MASTER_SHEET =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSQI9LolzkInm5Avk3iDKHZRbr4zMWkJ-OaQNpZNv-y5fXTda_azWvMAWlOL_MSiIyvJKa9izcimtYh/pub?output=csv";
    let MASTER_SHEET_DATA = [];

    Papa.parse(MASTER_SHEET, {
      download: true,
      header: true,
      complete: finishSetup,
    });

    function finishSetup(masterSheetData) {
      MASTER_SHEET_DATA = masterSheetData.data;
      updateData(MASTER_SHEET_DATA);
    }
  }, []); // Empty dependency array to run only once

  // Array of placeholder images for soup
  const imgs = [soup1, soup2, soup3, soup4, soup5, soup6, soup7, soup8];

  // Function to render a single soup item
  const renderSoupItem = (soup, restaurantAssetsForThisRestaurant, imgs) => {
    // Function to get image URL by soup name
    function getImgByName(restaurantData, inputString) {
      const sanitizedInput = inputString.toLowerCase().replace(/\s/g, "");
      const soups = restaurantData?.soups || [];

      for (const soup of soups) {
        const sanitizedName = soup.name.toLowerCase().replace(/\s/g, "");
        if (sanitizedName === sanitizedInput) {
          return soup.img;
        }
      }
      return null;
    }

    // Get the image URL for the soup
    let imgValue = getImgByName(restaurantAssetsForThisRestaurant, soup);
    const randomIndex = Math.floor(Math.random() * imgs.length);

    // Return JSX for the soup item
    return (
      <div className={styles.participant__soup}>
        <div
          className={styles.participant__soupPic}
          style={{
            backgroundImage: `url(${
              imgValue !== null ? imgValue.src : imgs[randomIndex].src
            })`,
          }}
        ></div>
        <p className={styles.participant__soupLabel}>{toTitleCase(soup)}</p>
      </div>
    );
  };

  // Mapping data to soup participant items
  const soupParticipantItems = data.map(
    ({ restaurant, name, website, soups, hours, address, map }, index) => {
      // Get logo URL for the restaurant
      let restaurantAssetsForThisRestaurant = restaurantAssets[restaurant];
      let logoUrl =
        restaurantAssetsForThisRestaurant !== undefined
          ? restaurantAssetsForThisRestaurant.logo
          : placeholderLogo;

      // Split soups string into an array
      let soupsArray = soups.split(",");

      return (
        <div key={index} className={styles.participant}>
          {/* If more than 1 soup, show the carousel, else just show the one soup */}
          {soupsArray.length > 1 ? (
            <Slider
              {...settingsForSlider}
              className={styles.participant__soupsWrapper}
            >
              {/* Render each soup item */}
              {soupsArray.map((soup, index) =>
                renderSoupItem(soup, restaurantAssetsForThisRestaurant, imgs)
              )}
            </Slider>
          ) : (
            soupsArray.map((soup, index) =>
              renderSoupItem(soup, restaurantAssetsForThisRestaurant, imgs)
            )
          )}

          <div className={styles.participant__restaurantInfo}>
            <div className={styles.participant__logoWrapper}>
              {/* Render restaurant logo */}
              <Image
                src={logoUrl}
                alt={`logo for ${restaurant}`}
                className={styles.participant__logo}
              />
            </div>
            <h3 className={styles.participant__restaurantName}>{name}</h3>
            <p className={styles.participant__restaurantInfoItem}>{hours}</p>
            <p className={styles.participant__restaurantInfoItem}>{address}</p>

            {/* Render website and map links */}
            {(website || map) && (
              <div className={styles.participant__restaurantInfoItem}>
                {website && <a href={website}>website</a>} |{" "}
                {map && <a href={map}>see on map</a>}
              </div>
            )}
          </div>
        </div>
      );
    }
  );

  return (
    <main className={styles.main}>
      {/* red top section */}
      <div className={styles.section1}>
        <div className={styles.section1__inner}>
          <div className={styles.headerBlockNew}>
            <CircletypeText
              text="Fremont"
              className={styles.topCurvedHeader}
              radius={500}
            />
            <h1>
              <CircletypeText
                text="Soupocalypse"
                className={styles.bigCurvedHeader}
                radius={700}
              />
            </h1>
            <CircletypeText
              text="Every year, forever"
              className={styles.bottomCurvedHeader}
              radius={500}
            />
          </div>

          <div className={styles.heroImageWrap}>
            <Image src={promoImage} className={styles.heroImage} />
          </div>
        </div>
      </div>

      {/* tan bottom section */}
      <div className={styles.section2}>
        <h2 className={styles.header}>A neighborhood tradition</h2>
        <p className={styles.paragraph}>
          During the pandemic in January, Soupocalypse was born. It gave the
          Center of the Universe neighborhood a chance to escape their homes and
          enjoy a warm bowl of soup while taking in the sights and sounds of the
          Burke-Gilman Trail and the canal’s birds. The experience was so
          enjoyable that now we celebrate soup every year.
        </p>

        <h2 className={styles.header}>The challenge</h2>

        <p className={styles.paragraph}>
          Your mission is to collect 8 Souper Stickers over the course of a mere
          4 days. Head to any participating restaurants, pick up a soup
          passport, then earn a sticker every time you order a soup. You can get
          one stamp per restaurant. Take-out and dine-in soups both count. At
          the end of your quest, turn in your passport at Mischief Distillery to
          earn Super Souper Swag (while supplies last).
        </p>

        <p className={styles.paragraph}>
          Support your soup community, pull on your rain boots and coats, brave
          the dark, and cozy up to the best soups in the Center of the Universe.
          Do you have what it takes to be a Super Souper?
        </p>

        <h2 className={styles.header}>The soups</h2>

        <div className={styles.participantList}>{soupParticipantItems}</div>

        <h2 className={styles.header}>Plan your route</h2>

        <div className={styles.mapIframeWrapper}>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=157hSo8l8kZYKc-H-NYkRjuk2wPZH1Wk&ehbc=2E312F&noprof=1"
            width="640"
            height="480"
            className={styles.mapIframe}
            zoom={21}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <h2 className={styles.header}>Godspeed super soupers</h2>
      </div>
      <p className={styles.footer}>
        Made by <a href="https://annabethcarroll.com/">ABC</a> for the love of
        the soup ❤️
      </p>
    </main>
  );
}
