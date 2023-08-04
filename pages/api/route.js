import sendgrid from "@sendgrid/mail";
import Cors from "cors";

// Initialize sendgrid API key
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
	try {
		// Log the request body to see if the data is received correctly
		console.log("Request body:", req.body);

		// Use sendgrid API to send email
		await sendgrid.send({
			to: "inquiry@jomintl.com", // Email where clients will receive emails.
			from: "inquiry@jomintl.com", // Website Email Address.
			subject: `[JOM Intl.] : ${req.body.subject}`,
			html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html lang="en">
            <head>
                <meta charset="utf-8">
            
                <title>The HTML5 Herald</title>
                <meta name="description" content="The HTML5 Herald">
                <meta name="author" content="SitePoint">
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
            
                <link rel="stylesheet" href="css/styles.css?v=1.0">
            
            </head>
            
            <body>
                <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                    </div>
                    <div class="container" style="margin-left: 20px;margin-right: 20px;">
                    <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
                    <div style="font-size: 16px;">
                    <p>Message:</p>
                    <p>${req.body.message}</p>
            </body>
            </html>`,
		});

		return res.status(200).json({ success: true });
	} catch (error) {
		return res.status(error.statusCode || 500).json({ error: error.message });
	}
}

export default async function handler(req, res) {
	// Check for the request method and call the corresponding handler function
	if (req.method === "POST") {
		return sendEmail(req, res);
	} else {
		return res.status(405).json({ error: "Method Not Allowed" });
	}
}
