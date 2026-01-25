import { Inter } from "next/font/google";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import bunny from "@/public/landing/bunny.svg";
import matcha from "@/public/landing/matcha.svg";
import taiyaki from "@/public/landing/taiyaki.svg";
const inter = Inter({ subsets: ["latin"] });

const support = [
  {
    title: "Become a Mentor",
    description:
      "Have experience leading, using Figma, or coordinating groups? Share your knowledge and become a mentor!",
    form: "Mentor",
    link: "/apply/mentor",
  },
  {
    title: "Sponsor Us",
    description:
      "Have a company or brand you want to bring attention to? Sponsor us to raise brand awareness and exposure through social media and giveaways!",
    form: "Sponsor",
    link: "/apply/sponsor",
  },
  {
    title: "Volunteer Work",
    description:
      "Need experience or just want to help our organization come to life? Volunteer to help the Designathon happen!",
    form: "Volunteer",
    link: "/apply/volunteer",
  },
];

const About = () => {
  return (
    <div className={`relative ${inter.className}`}>
      <div className="block h-64 bg-transparent sm:hidden"></div>
      <section
        id="about"
        className="bg-beige-100 z-20 w-full items-start justify-center py-32 md:py-64"
      >
        <div className="bg-landing-beige-200 pr-[8vw] pl-[8vw] font-semibold sm:w-full md:w-7/8">
          <div className="font-inter text-landing-brown-300 py-16 text-left text-4xl font-bold md:text-7xl">
            {" "}
            ABOUT US{" "}
          </div>
          <div className="flex flex-col items-start gap-8 md:flex-row md:gap-12">
            <div className="relative flex-1">
              <div className="text-landing-brown-400 relative bg-white p-6 py-24 shadow-[5px_5px_5px_rgba(0,0,0,0.3)] sm:p-12">
                <div className="absolute top-0 left-0 h-8 w-28 translate-x-[-25%] translate-y-[15%] rotate-[-38deg] bg-blue-200/60" />
                <div className="absolute top-0 right-0 h-8 w-28 translate-x-[25%] translate-y-[-20%] rotate-[38deg] bg-blue-200/60" />
                <div className="absolute bottom-0 left-0 h-8 w-28 translate-x-[-30%] translate-y-[-20%] rotate-[38deg] bg-blue-200/60" />
                <div className="absolute right-0 bottom-0 h-8 w-28 translate-x-[27%] translate-y-[10%] rotate-[-38deg] bg-blue-200/60" />
                <p className="text-sm font-medium lg:text-lg">
                  DesignVerse is the first and only{" "}
                  <b>24-hour beginner-friendly</b> Design-a-Thon hosted by the
                  University of California, Riverside. Designers are challenged
                  to create the interface of an app or website through a given
                  prompt, which would then be demoed and presented to a panel of
                  industry professionals.
                  <br />
                  <br />
                  At DesignVerse, our goal is to empower our community of
                  students who are interested in design-like thinking and
                  provide career developmental opportunities through our{" "}
                  <b>workshops</b>, <b>mentorship</b>, and{" "}
                  <b>networking events</b>.
                  <br />
                  <br />
                  We welcome all undergraduate, graduate and high school
                  students for a lively weekend filled with creativity,
                  networking, mentorship, and more!
                </p>
              </div>
            </div>
            <div className="relative flex w-1/2 max-w-96 items-center justify-center place-self-end sm:w-1/2 sm:place-self-end md:w-1/3 md:pt-40 lg:w-1/3 lg:pt-40 xl:w-1/3">
              <Image src={bunny} alt="bunny" className="h-auto w-full" />
            </div>
          </div>
        </div>
        <Image
          src={matcha}
          alt="matcha"
          className="absolute right-[33%] bottom-[30%] z-40 hidden w-1/4 max-w-32 sm:right-[30%] sm:w-1/6 md:right-[25%] md:max-w-32 lg:right-[20%] lg:block lg:max-w-36 xl:right-[25%] xl:max-w-40"
        />
        <Image
          src={taiyaki}
          alt="taiyaki"
          className="absolute right-[60%] bottom-[32%] z-40 hidden w-1/4 max-w-28 sm:right-[45%] sm:w-1/6 md:max-w-32 lg:block lg:max-w-36"
        />
      </section>
      <div className="relative">
        <div className="bg-landing-orange-200 z-30 -mt-48 flex h-32 w-full items-center md:-mt-72 lg:-mt-72 xl:-mt-80" />
        <div className="bg-landing-orange-300 h-2/3 p-20">
          <p className="pb-20 text-center text-4xl font-bold text-white md:text-7xl">
            SUPPORT US{" "}
          </p>
          <div className="flex flex-col gap-20 px-9 lg:flex-row">
            {support.map(({ title, description, form, link }, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-evenly gap-12 text-white"
              >
                <p className="text-xl font-bold lg:text-3xl">{title}</p>
                <div className="text-center text-sm lg:text-base">
                  {description}
                </div>
                <Button
                  asChild
                  className="bg-landing-brown-200 hover:bg-landing-brown-400 w-1/2 rounded-full hover:scale-105"
                >
                  <Link
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex gap-2"
                  >
                    {form} <ExternalLink />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
