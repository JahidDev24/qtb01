import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { firstname, lastname, email, number, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 465,
    secure: true,
    auth: {
      user: "your_email@zoho.in",
      pass: "your_password", // Use env variable in production
    },
  });

  try {
    await transporter.sendMail({
      from: `"${firstname} ${lastname}" <your_email@zoho.in>`,
      to: "your_email@zoho.in", // receive email here
      subject: "New Contact Form Submission",
      text: `
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${number}
        Message: ${message}
      `,
    });

    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
    console.error("Error sending email", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
