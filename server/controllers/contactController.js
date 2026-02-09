import Contact from "../models/Contact.js";
import { validationResult } from "express-validator";
import nodemailer from "nodemailer";

/* =========================================
   Get All Contacts (Admin)
========================================= */
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(50);

    res.json({
      success: true,
      count: contacts.length,
      data: contacts,
    });

  } catch (error) {
    console.error("Get contacts error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch contacts",
    });
  }
};


/* =========================================
   Submit Contact Form
========================================= */
export const submitContact = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const { name, email, subject, message } = req.body;

    // Save to MongoDB
    const contact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await contact.save();

    console.log("✅ Contact saved to DB");

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Mail to YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b><br/> ${message}</p>
      `,
    });

    console.log("📧 Mail sent to admin");

    // Auto-reply
    await transporter.sendMail({
      from: `"Aniket Pangavhane" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Thank you for contacting me",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out. I have received your message and will get back to you soon.</p>
        <br/>
        <p>Best regards,<br/>Aniket Pangavhane</p>
      `,
    });

    console.log("📧 Auto reply sent");

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: contact,
    });

  } catch (error) {
    console.error("❌ Contact submission error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again.",
    });
  }
};
