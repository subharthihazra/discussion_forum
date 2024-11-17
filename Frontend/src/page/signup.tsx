import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div>
      <SignUp
        appearance={{
          elements: {
            rootBox: "h-screen w-full bg-gray-300 flex items-center justify-center", 
          },
        }}
        forceRedirectUrl="/signin"
        signInUrl="/signin"
      />
    </div>
  );
}
