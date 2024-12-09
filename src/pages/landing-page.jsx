import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
      <section></section>
    </main>
  );
};

export default LandingPage;
