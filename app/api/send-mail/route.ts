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

    await transporter.sendMail({
      from: 'kamleshsimpi1293@gmail.com',
      to: 'kamleshsimpi1293@gmail.com',
      subject: `Contact form: ${firstName} ${lastName}`,
      text:`Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nProject Type: ${projectType}\n\nDescription: ${description}`,
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