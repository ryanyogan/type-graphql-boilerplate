import * as nodemailer from "nodemailer";

export const sendEmail = async (email: string, url: string) => {
  const account = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass
    }
  });

  const mailOptions = {
    from: '"Fed Foo" <foo@example.com>',
    to: email,
    subject: "Hello",
    text: "Hello World",
    html: `<a href="${url}">${url}</a>`
  };

  const info = await transporter.sendMail(mailOptions);

  console.log("Message Sent: %s", info.message);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
