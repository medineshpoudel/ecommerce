const emailjs = require("@emailjs/nodejs");

const sendEmail = (options) => {
  emailjs
    .send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        to_name: options?.to_name,
        from_name: options?.from_name,
        to_email: options?.to_email,
        message: options?.message,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    )
    .then(
      (result) => {
        console.info("Email Sent for delivery");
      },
      (error) => {
        console.log(error);
        console.error("Unable to send email " + error.message);
      }
    );
};

module.exports = {
  sendEmail,
};
