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
        <div className="font-anton text-2xl md:text-4xl hover:opacity-75">
          Jobsthal
        </div>
      </Link>
      <div className="">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
