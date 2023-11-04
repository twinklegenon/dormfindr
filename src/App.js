import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import SplashScreen from "./user/SplashScreen";
import LogInSignUpScreen from "./user/LogInSignUpScreen";
import LogInScreen from "./user/LogInScreen";
import SignUpScreen from "./user/SignUpScreen";
import HomeScreen from "./navigations/HomeScreen";
import FindADormScreen from "./navigations/FindADormScreen"
import AboutUsScreen from "./navigations/AboutUsScreen";
import HelpScreen from "./navigations/HelpScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/main" element={<LogInSignUpScreen />} />
          <Route path="/login" element={<LogInScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/find-a-dorm" element={<FindADormScreen />} />
          <Route path="/about-us" element={<AboutUsScreen />} />
          <Route path="/help" element={<HelpScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
