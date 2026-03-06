import nodemailer from "nodemailer";

export const sendMail = async (table: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: "Weather Dashboard",
    html: table,
  };

  await transporter.sendMail(mailOptions);
};
