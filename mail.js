// wpqc kmac jvck dmhy

const { createTransport } = require('nodemailer');

let transporter = createTransport({
    service: "gmail",
    auth: {
        user: "anil91083128@gmail.com",
        pass: "pzrlinpgbdrwyqlr"
    }
})

let generateotp = () => {
    let otp = ''
    let otplength = 4;

    for (let i = 0; i < otplength; i++) {
        otp += Math.floor(1 + Math.random() * 9)

    }
    return otp

}
let otp = generateotp()


let subscribeMail = async (email) => {
    
    let sentInfo = await transporter.sendMail({
        from: "anil91083128@gmail.com",
        to: email,
        subject: "OTP",
        text: `Dear ${email.split('@')[0]} your one time password is ${otp} `,
    })
    console.log("Email sent successfully:", sentInfo);

}

module.exports = {subscribeMail,otp};

