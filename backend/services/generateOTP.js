const otpGenerator = require("otp-generator");

const generateOTP = () => {
  const OTP = otpGenerator.generate(6, {
    digits: true, // Enable digits
    upperCaseAlphabets: false, // Disable uppercase alphabets
    lowerCaseAlphabets: false, // Disable lowercase alphabets, if you don't need them
    specialChars: false // Disable special characters
  });

  return OTP;
};

module.exports = generateOTP;
