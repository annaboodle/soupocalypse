import Script from 'next/script';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { League_Gothic, Merriweather_Sans } from "next/font/google";

export const metadata = {
  title: "Soupocalypse",
  description: "It's not the end of the world until we run out of soup!",
};

const leagueGothic = League_Gothic({ subsets: ["latin"], weight: ["400"], variable: "--font-league" });
const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-merriweather-sans",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${leagueGothic.variable} ${merriweatherSans.variable}`}>

      {/* adding google analytics tracking */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-REZXBXHQ4N"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-REZXBXHQ4N');
        `}
      </Script>

      {/* loading google fonts */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
