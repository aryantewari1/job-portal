import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tweet } from "react-tweet";
import tweets from "../data/tweets.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-job">
          <Button size="xl" variant="gray">
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
        <Carousel className="sm:w-3/4 lg:w-full max-w-7xl">
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
    </main>
  );
};

export default LandingPage;
