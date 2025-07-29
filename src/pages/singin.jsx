import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function SignIn() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <button className="bg-blue-400 px-3 py-2 cursor-pointer rounded-xl">
        <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn></button>
    </div>
  );
}

export default SignIn;
