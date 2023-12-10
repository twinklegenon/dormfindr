const mailgun = require('mailgun-js');

// Initialize mailgun with your domain and API key
const DOMAIN = 'your-domain.com'; // Replace with your Mailgun domain
const mg = require('mailgun-js')({ apiKey: '5d2b1caa-dcb03e22', domain: 'sandbox4a2a4936aa4c4fc388de31ef61722e52.mailgun.org' });

const sendEmail = (recipient, subject, text, html) => {
  const data = {
    from: 'Your App <no-reply@your-domain.com>', // Replace with your sender email
    to: recipient,
    subject: subject,
    text: text,
    html: html,
  };

  return mg.messages().send(data)
    .then((body) => {
      console.log('Email sent:', body);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
};

module.exports = { sendEmail };
