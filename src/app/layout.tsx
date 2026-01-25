import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: "DesignVerse 2026",
  description: "DesignVerse is a 24 Hour Designathon hosted by UCR.",
};

const RootLayout = async ({ children }: Props) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-landing-beige-100 overflow-x-hidden`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
