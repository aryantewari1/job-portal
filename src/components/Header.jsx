import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <header className=" px-14 py-8 flex items-center justify-between">
      <Link to="/">
        <div className="font-anton text-2xl sm:text-4xl hover:opacity-75">
          Jobsthal
        </div>
      </Link>
      <div className="">
        <SignedOut>
          <button className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-gray-700 transition-all">
            <SignInButton />
          </button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
