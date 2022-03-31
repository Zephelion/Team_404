const nodemailer = require('nodemailer')

async function sendEmail(email) {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });

      let info = await transporter.sendMail({
        from: '"Fitbud!" <fitbudtest@outlook.com>', // sender address
        to: email, // list of receivers
        subject: "Registratie succeeded!", // Subject line
        text: "Welcome to fitbud!" + email + "Find your fitbuddy on our platform!", // plain text body
        html: "<b>Welcome to fitbud!" + email + "Find your fitbuddy on our platform!</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = {
    sendEmail:sendEmail,
}