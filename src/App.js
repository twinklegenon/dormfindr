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
import AccountVerificationScreen from "./user/AccountVerificationScreen";
import Terms from "./user/TermsScreen";
import BeOneScreen from "./user/BeOneScreen";
import OTPScreen from "./user/OTPScreen";

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
          <Route path="/account-verification" element={<AccountVerificationScreen />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/beone" element={<BeOneScreen />} />
          <Route path="/OTP" element={<OTPScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;