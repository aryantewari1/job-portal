import { Link, useSearchParams } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleClickSignIn = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  return (
    <header className=" px-14 py-8 flex items-center justify-between">
      <Link to="/">
        <div className=" font-anton text-2xl sm:text-4xl hover:opacity-75">
          Job<span className="font-extrabold">स्थल</span>
        </div>
      </Link>
      <div className="">
        <SignedOut>
          {/**the button wont really work until we add SignIn component as that's what we were being redirected to */}
          <button
            className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-gray-700 transition-all"
            onClick={() => setShowSignIn(true)}
          >
            Sign in
          </button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleClickSignIn}
        >
          {/**
           * the forcedRedirectUrl takes you to the page after sign-in
           * the fallbackRedirectUrl takes you to the page if redirected url after signIn is not available
           */}
          <SignIn
            forceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
