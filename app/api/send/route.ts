
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialise Resend avec ta clé API (à prendre sur resend.com)
const resend = new Resend('re_VLrovA4F_Hsmpc6jsA42TkmkVDFtLJDoc');//new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', 
      to: ['asmaessahraouii@gmail.com'], 
      subject: `Nouveau message de ${name}`,
      replyTo: email,
      text: message,
      html: `<p><strong>Nom:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}