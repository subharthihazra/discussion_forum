import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Error from "./page/Error";
import DetailPost from "./page/DetailPost";

import ThemesPage from "./page/ThemePage";
import { UserButton, useUser } from "@clerk/clerk-react";
import SignInPage from "./page/signin";
import SignUpPage from "./page/signup";
import Notlogin from "./page/notlogin";

function App() {
  const { user } = useUser();
  console.log(user);
  return (
    <div>
      {user && (
        <div className="flex bg-black p-4 justify-between">
          <div className="text-white text-xl">
            {user?.fullName && `Welcome, ${user?.fullName}`}
          </div>
          <UserButton />
        </div>
      )}
      <Router>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Notlogin />} />
          <Route path="/theme" element={<ThemesPage />} />
          <Route path="/post/:id" element={<DetailPost />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
