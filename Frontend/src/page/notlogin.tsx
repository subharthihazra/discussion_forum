import { MessageCircle } from "lucide-react";
import heroImage from "../assets/hero.jpg";
import { useNavigate } from "react-router-dom";

export default function Notlogin() {
  const router = useNavigate();
  function handleClick() {
    router("/signin");
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <MessageCircle className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">ForumSpace</span>
        </a>
        <div className="ml-auto">
          <button
            className="bg-black text-white rounded-md text-md outline-none px-4 py-2"
            onClick={handleClick}
          >
            Login
          </button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Join the Conversation
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Connect, share, and learn with a global community of thinkers
                  and creators.
                </p>
              </div>
              <div className="w-full max-w-4xl">
                <img
                  alt="Online discussion forum illustration"
                  className="aspect-[2/1] overflow-hidden rounded-xl object-contain"
                  height={400}
                  src={heroImage}
                  width={800}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 ForumSpace. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
