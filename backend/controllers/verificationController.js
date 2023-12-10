const { sendEmail } = require('../services/mailgun');
const { generateVerificationCode, saveVerificationCode } = require('../services/verificationService');

const sendVerificationEmail = async (user) => {
  const verificationCode = generateVerificationCode(); // Your method to generate a code
  await saveVerificationCode(user.email, verificationCode); // Your method to save the code to the user's record
  
  const subject = 'Please verify your email';
  const text = `Your verification code is: ${verificationCode}`;
  const html = `<p>Your verification code is: <strong>${verificationCode}</strong></p>`;

  return sendEmail(user.email, subject, text, html);
};
