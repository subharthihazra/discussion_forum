import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div>
      <SignIn
        appearance={{
          elements: {
            rootBox:
              "h-screen w-full bg-gray-300 flex items-center justify-center",
          },
        }}
        forceRedirectUrl="/"
        signUpUrl="/signup"
      />
    </div>
  );
}
