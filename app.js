// Import required modules
const fs = require('fs');
const express = require('express');
const nodemailer = require('nodemailer');

// Create an Express app
const app = express();
const port = 3000;

// Read the contents of emails.txt
fs.readFile('emails.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading emails.txt:', err);
        return;
    }

    // Store the email content for later use
    const emailContent = data;
});

// Set up a route to serve the HTML page
app.get('/emails', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Set up a route to handle the "Send Email" button click
app.get('/send-email', (req, res) => {
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sahibzadaabdullah8@gmail.com', // your Gmail address
            pass: 's@h!b0099', // your Gmail password
        },
    });

    // Define email options
    const mailOptions = {
        from: 'sahibzadaabdullah8@gmail.com', // sender address
        to: '21pwbcs0861@uetpeshawar.edu.pk', // recipient address
        subject: 'Read data from the Text file', // subject line
        text: "This is the content of the email.You can add more lines if needed.", // email body
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.send('Error sending email.');
        } else {
            console.log('Email sent:', info.response);
            res.send('Email sent successfully.');
        }
    });
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/emails`);
});
