"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Papa from "papaparse";
import Slider from "react-slick";
// import CircletypeText from "./circletypeText";
import { restaurantAssets } from "./restaurantMap";
import styles from "./page.module.css";

// Import images
import promoImage from "../../public/img/soupocalypse-promo.jpg";
import soup1 from "../../public/img/godzilla/soup1.png";
import soup2 from "../../public/img/godzilla/soup2.png";
import soup3 from "../../public/img/godzilla/soup3.png";
import soup4 from "../../public/img/godzilla/soup4.png";
import soup5 from "../../public/img/godzilla/soup5.png";
import soup6 from "../../public/img/godzilla/soup6.png";
import soup7 from "../../public/img/godzilla/soup7.png";
import soup8 from "../../public/img/godzilla/soup8.png";
import placeholderLogo from "../../public/img/logos/placeholder-logo.png";

export default function Home() {
  // Data returned from Google Sheet:
  const [data, updateData] = useState([]);
  const [tagline, updateTagline] = useState([]);

  // Settings for slider that scrolls through soup items
  const settingsForSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

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

    // Pick a random tagline from the array of taglines
    const taglines = [
      "Get ur slurp on",
      "Bust out the spoons",
      "Slurp slurp",
      "Fend off the darkness",
      "In the center of the soupiverse",
      "You'll never be the same",
      "For the love of soup",
      "Slurp down the street",
      "Welcome to the slurp zone",
      "Grab ya spoons",
      "Gotta slurp 'em all",
      "Savor every moment",
      "Sip, slurp, savor",
      "Warm bowls, happy souls",
      "Dive into deliciousness",
      "From broth to bliss",
      "Let's get soupy",
      "One spoonful at a time",
      "Soup's on!",
      "Soup, spice, and everything nice",
      "Souper heroes unite",
      "Who will be crowned best in broth?",
      "Embrace the chaos",
      "Every slurp tells a story",
      "Soup, there it is!",
      "Lick the ladle",
      "Spoons optional",
      "Pour some broth on me",
      "Sweet broth o' mine",
      "A gastronomic symphony",
      "We will, we will broth you",
      "Don't stop believin' in broth",
      "Stew got a friend in me",
      "Stewpidly delicious",
      "Who let the broth out?",
      "Bisque, bisque, baby",
      "Broth it like it's hot",
      "Bisque and shout",
      "Bisque me up before you go-go",
      "Sweet home Bisqueabama",
      "Hot bowls, cool vibes",
      "Stew you love me?",
      "Soup dreams are made of these",
      "I'll be there for stew",
      "Hit me with your best stew",
      "All you need is stew",
    ];
    const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
    updateTagline(randomTagline);

    // Define a debounce function to limit the rate of function invocation
    // function debounce(func, delay) {
    //   let timeoutId;
    //   return function (...args) {
    //     clearTimeout(timeoutId);
    //     timeoutId = setTimeout(() => {
    //       func.apply(this, args);
    //     }, delay);
    //   };
    // }

    // // Debounce the handleResize function to prevent rapid invocations during resizing
    // const debouncedResizeHandler = debounce(handleResize, 200);

    // // Add event listener for resize with the debounced handler
    // window.addEventListener("resize", debouncedResizeHandler);

    // // Cleanup function to remove event listener on component unmount
    // return () => {
    //   window.removeEventListener("resize", debouncedResizeHandler);
    // };

    // // Reload page when viewport size changes (to fix circletypetext not getting the right positioning)
    // function handleResize() {
    //   window.location.reload(); // Reload the page when viewport size changes
    // }

    // window.addEventListener("resize", handleResize); // Add event listener for resize

    // return () => {
    //   window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
    // };
  }, []); // Empty dependency array to run only once

  // Array of placeholder images for soup
  const imgs = [soup1, soup2, soup3, soup4, soup5, soup6, soup7, soup8];

  // Function to render a single soup item
  const renderSoupItem = (soup, restaurantAssetsForThisRestaurant, imgs, key) => {
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
      <div key={key} className={styles.participant__soup}>
        <div
          className={styles.participant__soupPic}
          style={{
            backgroundImage: `url(${imgValue !== null ? imgValue.src : imgs[randomIndex].src
              })`,
          }}
        ></div>
        <p className={styles.participant__soupLabel}>{soup}</p>
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
              {soupsArray.map((soup, soupIndex) =>
                renderSoupItem(soup, restaurantAssetsForThisRestaurant, imgs, `${restaurant}-${soupIndex}-${soup.trim()}`)
              )}
            </Slider>
          ) : (
            soupsArray.map((soup, soupIndex) =>
              renderSoupItem(soup, restaurantAssetsForThisRestaurant, imgs, `${restaurant}-${soupIndex}-${soup.trim()}`)
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
          {/* Render CircletypeText components only if tagline is available */}
          {/* <div className={styles.headerBlockNew}>
            {tagline.length > 1 && (
              <>
                <CircletypeText
                  text="Fremont"
                  className={styles.topCurvedHeader}
                  radius={700}
                />
                <h1>
                  <CircletypeText
                    text="Soupocalypse"
                    className={styles.bigCurvedHeader}
                    radius={1000}
                  />
                </h1>
                <CircletypeText
                  text={tagline}
                  className={styles.bottomCurvedHeader}
                  radius={700}
                />
              </>
            )}
          </div> */}

          <div className={styles.headerBlockNew}>
            <p className={styles.topHeader}>Fremont</p>
            <h1 className={styles.bigHeader}>Soupocalypse</h1>
            <p className={styles.bottomHeader}>{tagline}</p>
          </div>

          <div className={`${styles.headerBox} ${styles.headerDate}`}>
            <h2 className={`${styles.header}`}>
              JAN 29 – FEB 1, 2026
            </h2>
          </div>

          <div className={styles.heroImageWrap}>
            <Image
              src={promoImage}
              alt={"Soupocalypse"}
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>

      {/* tan bottom section */}
      <div className={styles.section2}>

        <div className={styles.headerBox}>
          <h2 className={styles.header}>The challenge</h2>
        </div>

        <p className={styles.paragraph}>
          Your mission is to collect 8 Souper Stickers over the course of a mere
          4 days. Head to any participating restaurant, pick up a soup
          passport, then earn a sticker at each restaurant where you order a soup. Take-out and dine-in both count! At
          the end of your quest, turn in your passport at Triangle Spirits to
          earn Super Souper Swag (while supplies last).
        </p>

        <p className={styles.paragraph}>
          Support your community, brave
          the dark, and cozy up to the best soups in the Center of the Universe.
          Do you have what it takes to be a Super Souper?
        </p>

        <div className={styles.headerBox}>
          <h2 className={styles.header}>The soups</h2>
        </div>
        {/* <div className={styles.headerBox}>
          <div className={styles.headerBoxInner}>
            <h2 className={styles.header}>Last year&apos;s soups</h2>
            <p className={styles.subheader}>2026 soups coming soon!</p>
          </div>
        </div> */}

        <div className={styles.participantList}>{soupParticipantItems}</div>

        <div className={styles.headerBox}>
          <h2 className={styles.header}>Plan your route</h2>
        </div>

        <div className={styles.mapIframeWrapper}>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=157hSo8l8kZYKc-H-NYkRjuk2wPZH1Wk&ehbc=2E312F&noprof=1"
            width="640"
            height="480"
            className={styles.mapIframe}
            title="Soupocalypse map"
            loading="lazy"
            allowFullScreen
          />
        </div>

        <div className={styles.headerBox}>
          <h2 className={styles.header}>A neighborhood tradition</h2>
        </div>

        <p className={styles.paragraph}>
          Soupocalypse was born during the pandemic in January 2021. Fremont residents welcomed the opportunity to escape their homes, support local restaurants, and enjoy delicious soups. The experience was so enjoyable that now we celebrate soup every year.
        </p>

        <p className={styles.paragraph}>
          As we like to say, it&apos;s not the end of the world... <b><i>until we run out of soup!</i></b>
        </p>

        <div className={styles.headerBox}>
          <h2 className={styles.header}>Godspeed super soupers</h2>
        </div>

      </div>
      <p className={styles.footer}>
        Made by <a href="https://annabethcarroll.com/">ABC</a> for the love of
        the soup ❤️
      </p>
    </main >
  );
}
