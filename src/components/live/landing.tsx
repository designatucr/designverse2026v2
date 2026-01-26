// import Countdown from "../ui/countdown";
import Image from "next/image";
import cloud1 from "@/public/landing/cloud1.svg";
import cloud2 from "@/public/landing/cloud2.svg";
import logo from "@/public/landing/dv_logo.svg";
import bakerySign from "@/public/landing/bakery_sign.svg";
// import timer from "@/public/landing/timer.svg";
// import sign from "@/public/landing/sign.svg";
// import bakery from "@/public/landing/bakery.svg";
import leftLampost from "@/public/landing/leftLampost.svg";
import rightLampost from "@/public/landing/rightLampost.svg";
import grass from "@/public/landing/grass.svg";
import bakery2 from "@/public/landing/bakery2.svg";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="from-landing-blue-100 to-landing-orange-100 flex min-h-0 w-full flex-col items-center overflow-hidden bg-gradient-to-b">
      <Link
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
        target="_blank"
        rel="nopener noreferrer"
        className="absolute top-0 right-3 z-1 w-12 cursor-pointer md:w-28 lg:right-10"
      >
        <Image
          className="transition hover:scale-110"
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
          alt="Major League Hacking 2026 Hackathon Season"
          width={125}
          height={125}
        />
      </Link>
      <div className="relative z-20 flex w-full justify-center">
        <Image
          src={cloud1}
          alt="left cloud"
          className="absolute top-24 left-0 w-1/6"
        />
        <Image
          src={cloud2}
          alt="right cloud"
          className="absolute top-32 right-0 w-[12%] md:top-56"
        />
      </div>
      <div className="relative z-20 mt-20 flex w-[90%] flex-col items-center justify-center sm:mt-34 md:mt-36 lg:mt-52">
        <Image
          src={logo}
          alt="dv logo sign"
          className="w-1/4 -translate-y-[72%]"
        />

        <div className="flex w-[59%] flex-col items-center">
          <div className="text-landing-brown-200 absolute top-[5%] flex w-[64%] flex-col items-center justify-center">
            <Image
              src={bakerySign}
              alt="sign on top bakery"
              className="size-[70%]"
            />
            <div className="text-landing-brown-200 absolute top-[12%] z-30 flex max-w-[68%] flex-col items-center justify-center pt-1 text-center md:gap-1 xl:gap-2">
              <p className="text-[1.6vw] font-bold text-wrap">
                University of California, Riverside | May 2-3, 2026
              </p>
              <p className="text-[1.3vw]">A design-a-thon near you!</p>
            </div>
          </div>
          <Image src={bakery2} alt="bakery shop" className="z-20 w-[60vw]" />
          <div className="text-landing-brown-300 md:top[60%] absolute top-[52%] z-30 flex w-[90%] flex-col items-center justify-center gap-2 md:gap-5 xl:top-[55%]">
            <div className="text-[4vw] font-bold">COMING SOON.</div>
            <div className="text-[2vw]">Something new is brewing...</div>
          </div>
        </div>
        <div className="relative flex w-full flex-col items-center">
          <Image
            src={grass}
            alt="left grass box"
            className="absolute bottom-10 left-[12%] z-30 w-[20%] -translate-x-[21%] md:bottom-20 xl:bottom-20"
          />
          <Image
            src={grass}
            alt="right grass box"
            className="absolute right-[12%] bottom-10 z-30 w-[20%] translate-x-[21%] -scale-x-100 md:bottom-20 xl:bottom-20"
          />
          <Image
            src={leftLampost}
            alt="left lampost"
            className="absolute bottom-5 -left-[9%] z-40 w-[45%] -translate-x-[21%] md:bottom-10"
          />
          <Image
            src={rightLampost}
            alt="right lampost"
            className="absolute -right-[29%] bottom-5 z-40 w-[45%] -translate-x-[21%] md:bottom-10"
          />
          <div className="z-30 flex h-10 w-screen bg-[#535353] md:h-20" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
