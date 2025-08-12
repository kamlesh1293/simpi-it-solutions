import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const {firstName, lastName, email, phone, projectType, description } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for 587
      auth: {
        user: 'kamleshsimpi1293@gmail.com',
        pass: 'xxmt rczr thqx herl'
      }
    });

    
    // HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333;">
         <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 6px; overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background-color: #dbeafe; text-align: center; border: 1px solid #dbeafe;">
              <img src="https://simpi-it-solutions.vercel.app/images/sis-mail-logo-blue.jpg" alt="Simpi IT Solutions" style="max-height: 80px;" />
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 20px; background-color: #f9f9f9; color: #333;">
              <h2 style="margin-top: 0; font-size: 20px; color: #333;">New Project Inquiry</h2>
              <p style="margin: 8px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>
              <p style="margin: 8px 0;"><strong>Project Type:</strong> ${projectType}</p>
              <p style="margin: 8px 0;"><strong>Description:</strong></p>
              <p style="margin: 8px 0; line-height: 1.5;">${description}</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #101828; padding: 15px; text-align: center; color: #ffffff; font-size: 12px;">
              © 2025 Simpi IT Solutions. All rights reserved. | Designed &amp; Developed by Kamlesh Simpi
            </td>
          </tr>

        </table>
      </div>
    `;
    await transporter.sendMail({
      from: 'kamleshsimpi1293@gmail.com',
      to: 'kamleshsimpi1293@gmail.com',
      subject: `Contact form: ${firstName} ${lastName}`,
      html: htmlContent, // HTML version
      text: description,  
      replyTo: email
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}