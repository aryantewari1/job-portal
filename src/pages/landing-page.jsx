import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tweet } from "react-tweet";
import tweets from "../data/tweets.json";
import faq from "../data/faq.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenBox, Search } from "lucide-react";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-9 sm:gap-14 pt-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight ">
          Padhlo tum kahi se,{" "}
          <span className="pb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Job lagegi yahi se.
          </span>
        </h1>
        <p className="font-semibold tracking-wider sm:mt-8 sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-black">
          Jobs Daalo bhi, Jobs Paalo bhi.{" "}
        </p>
      </section>
      <div className="flex justify-center items-center gap-6">
        <Link to="/jobs">
          <Button size="xl" variant="black">
            <Search size={44} />
            Find a Job
          </Button>
        </Link>
        <Link to="/post-job " className="">
          <Button size="xl" variant="gray">
            <PenBox size={44} />
            Post a Job
          </Button>
        </Link>
      </div>
      <div>
        <h2 className="text-4xl sm:text-6xl sm:mt-14 font-extrabold tracking-tight text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-black">
            लोगो
          </span>{" "}
          Ki kahin{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-red-500 via-blue-500 to-black">
            Baatein
          </span>
        </h2>
      </div>

      <section className="hidden sm:flex sm:justify-center sm:items-center">
        <Carousel
          className="sm:w-3/4 lg:w-full max-w-7xl"
          plugins={[Autoplay({ delay: 1000 })]}
        >
          <CarouselContent className="w-full flex gap-x-8 sm:gap-x-12">
            {tweets.map((t) => (
              <CarouselItem
                key={t.id}
                className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="w-80">
                  <Tweet id={t.id} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      <section className="block sm:hidden w-full flex flex-col justify-center items-center">
        {tweets.map((t) => (
          <div key={t.id} className="block w-80">
            <Tweet id={t.id} />
          </div>
        ))}
      </section>
      <section className="flex justify-center gap-x-5 sm:gap-x-20">
        <div>
          <Link to="/jobs">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  <span className="sm:text-3xl pr-1">Job</span> लेने{" "}
                  <span className="pl-1 sm:text-3xl">waale.</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-md">
                Search and apply for jobs, track applications, and more.
              </CardContent>
            </Card>
          </Link>
        </div>
        <div>
          <Link to="/post-job">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  <span className="sm:text-3xl pr-1">Job</span> देने{" "}
                  <span className="pl-1 sm:text-3xl">waale.</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                Post jobs, manage applications, and find the best candidates.
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
      <section className="flex flex-col items-center ">
        <div className="w-full max-w-96 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-6xl font-extrabold p-4 sm:p-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-black">
            फ्रीquently asked questions
          </h2>
          {faq.map((f, i) => (
            <Accordion
              type="single"
              collapsible
              key={f.answer}
              className="mb-4 shadow-lg p-5 rounded-xl"
            >
              <AccordionItem value={i + 1}>
                <AccordionTrigger className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-black">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
