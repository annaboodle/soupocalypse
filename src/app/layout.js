import Script from 'next/script';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

export const metadata = {
  title: "Soupocalypse",
  description: "It's not the end of the world until we run out of soup!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

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
        <link
          href="https://fonts.googleapis.com/css2?family=League+Gothic&family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
