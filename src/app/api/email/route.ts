import { EmailData } from "@/utils/email";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  if (process.env.CONTACT_EMAIL == undefined ||
      process.env.CONTACT_PWD == undefined ||
      process.env.OWNER_EMAIL == undefined
  ) {
    return Response.json({ message: 'Server error. Could not send mail.' }, { status: 500 });
  }

  const data: EmailData = await request.json();
  const mailOptions = {
    from: process.env.CONTACT_EMAIL,
    to: process.env.OWNER_EMAIL,
    subject: `Message de ${data.name} - ${data.email}`,
    text: `Nouveau message venant du formulaire de contact du site, de la part de ${data.name} (${data.email}):\n\n${data.message}`,
    html: `<div>
      <div>Nouveau message venant du formulaire de contact du site, de la part de ${data.name} (<a href="mailto:${data.email}">${data.email}</a>):</div>
      <div>${data.message}</div>
    </div>`,
  };

  const transporter = nodemailer.createTransport({
    host: "prosae.net",
    secure: true,
    port: 465,
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_PWD,
    },
  });

  var info = await transporter.sendMail(mailOptions);

  if (info.accepted)
    return Response.json({}, { status: 201 });
  console.log(info.response);
  return Response.json({ message: "Could not send email. Please raise the issue by sending an email to jeanne.sabiron@prosae.net" }, { status: 500 });
}
