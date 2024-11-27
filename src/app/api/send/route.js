import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  try {
    // Constructing the email body as HTML
    const htmlBody = `
      <h1>${subject}</h1>
      <p>Thank you for contacting us!</p>
      <p>New message submitted:</p>
      <p>${message}</p>
    `;

    // Sending the email using Resend service
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["dhanrajnandurkar3103@gmail.com", email],
      subject: subject,
      html: htmlBody, // Use HTML string instead of React component
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message });
  }
}
