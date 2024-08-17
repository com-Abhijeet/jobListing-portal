import nodemailer from 'nodemailer'

export const sendRegisterSuccessMail = async ({ recipient_email, fullName }) => {
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'testmailer850@gmail.com',
                pass: 'doqe afnn yfsr ewdb',
            },
        });

        const mail_configs = {
            from: 'Job-Listings',
            to: recipient_email,
            subject: "Welcome to Job Listings!",
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Job-Listings</title>
    <style>
        body {
            font-family: Helvetica, Arial, sans-serif;
            min-width: 1000px;
            overflow: auto;
            line-height: 2;
        }
        .container {
            margin: 50px auto;
            width: 70%;
            padding: 20px 0;
        }
        .header {
            border-bottom: 1px solid #eee;
        }
        .header a {
            font-size: 1.4em;
            color: #00466a;
            text-decoration: none;
            font-weight: 600;
        }
        .content {
            font-size: 1.1em;
        }
        .footer {
            font-size: 0.9em;
            color: #aaa;
            margin-top: 40px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <a href="">Job Listings</a>
        </div>
        <p class="content">Hi ${fullName},</p>
        <p class="content">Thank you for registering with Job Listings. We are excited to have you on board.</p>
        <p class="content">If you have any questions, feel free to reach out to us.</p>
        <p class="content">Best Regards,<br/>Job Listings Team</p>
        <div class="footer">
            <p>&copy; 2023 Job Listings. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`
        };

        transporter.sendMail(mail_configs, function (error, info) {
            if (error) {
                console.log(error);
                return reject({ message: `An error has occurred: ${error.message}` });
            }
            return resolve({ message: "Email sent successfully" });
        });
    });
};