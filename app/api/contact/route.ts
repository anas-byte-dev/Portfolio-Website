import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactPayload {
  name: string
  email: string
  subject?: string
  message: string
}

export async function POST(req: Request) {
  try {
    const body: ContactPayload = await req.json()
    const { name, email, subject, message } = body

    // 1. Validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Please enter your name.' },
        { status: 400 },
      )
    }

    if (!email || !email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 },
      )
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Please enter your message.' },
        { status: 400 },
      )
    }

    const recipientEmail = process.env.CONTACT_EMAIL || 'anassidd7256@gmail.com'
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com'
    const smtpPort = Number(process.env.SMTP_PORT) || 465
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY

    // If SMTP credentials are provided, send via Nodemailer
    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })

      const dateStr = new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'short',
      })

      // 1. Send Notification Email to Anas
      // CRITICAL: replyTo is set to the visitor's email, so when Anas hits "Reply", it goes directly to the visitor!
      await transporter.sendMail({
        from: `"${name} (via Portfolio)" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: `"${name}" <${email}>`,
        subject: `💼 New Portfolio Message from ${name}${subject ? `: ${subject}` : ''}`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f172a; color: #f8fafc; border-radius: 12px; overflow: hidden; border: 1px solid #334155;">
            <div style="background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%); padding: 24px; text-align: center;">
              <h2 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700;">New Contact Form Message</h2>
              <p style="margin: 6px 0 0 0; color: #f0fdf4; font-size: 13px;">Received from Anas Siddiqui Portfolio Website</p>
            </div>
            
            <div style="padding: 24px;">
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; width: 100px;">Sender:</td>
                  <td style="padding: 8px 0; color: #f8fafc; font-size: 14px; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Email:</td>
                  <td style="padding: 8px 0; color: #10b981; font-size: 14px; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Received:</td>
                  <td style="padding: 8px 0; color: #cbd5e1; font-size: 13px;">${dateStr}</td>
                </tr>
              </table>

              <div style="background-color: #1e293b; border-left: 4px solid #10b981; padding: 16px; border-radius: 6px; margin-bottom: 24px;">
                <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Message Content</p>
                <p style="margin: 0; color: #f1f5f9; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>

              <div style="text-align: center; margin-top: 24px; padding-top: 18px; border-top: 1px solid #334155;">
                <a href="mailto:${email}?subject=Re: Portfolio Inquiry" style="display: inline-block; background-color: #10b981; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                  Reply Directly to ${name}
                </a>
                <p style="margin: 12px 0 0 0; font-size: 12px; color: #64748b;">
                  💡 You can also simply click "Reply" in your email client, and it will respond directly to ${email}.
                </p>
              </div>
            </div>
          </div>
        `,
      })

      // 2. Send Automated Confirmation to the Sender
      try {
        await transporter.sendMail({
          from: `"Anas Siddiqui" <${smtpUser}>`,
          to: email,
          replyTo: recipientEmail,
          subject: `Thank you for contacting Anas Siddiqui! (Message Received)`,
          html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f172a; color: #f8fafc; border-radius: 12px; overflow: hidden; border: 1px solid #334155;">
              <div style="background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%); padding: 24px; text-align: center;">
                <h2 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700;">Thank You for Reaching Out!</h2>
                <p style="margin: 6px 0 0 0; color: #f0fdf4; font-size: 13px;">Anas Siddiqui · Java Full Stack Developer</p>
              </div>
              
              <div style="padding: 24px;">
                <p style="color: #f1f5f9; font-size: 15px; line-height: 1.6;">
                  Hi <strong>${name}</strong>,
                </p>
                <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6;">
                  Thank you for visiting my portfolio and sending a message. I have successfully received your inquiry and will review it promptly.
                </p>

                <div style="background-color: #1e293b; border-left: 4px solid #06b6d4; padding: 14px; border-radius: 6px; margin: 18px 0;">
                  <p style="margin: 0 0 6px 0; color: #94a3b8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Summary of your message:</p>
                  <p style="margin: 0; color: #e2e8f0; font-size: 13px; line-height: 1.5; white-space: pre-wrap;">${message}</p>
                </div>

                <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6;">
                  When I reply, my email will arrive directly in your inbox from <strong>${recipientEmail}</strong>.
                </p>

                <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid #334155;">
                  <p style="margin: 0 0 8px 0; font-size: 13px; color: #94a3b8;">Warm regards,</p>
                  <p style="margin: 0; font-size: 15px; font-weight: 700; color: #f8fafc;">Anas Siddiqui</p>
                  <p style="margin: 2px 0 10px 0; font-size: 12px; color: #10b981;">Java Full Stack Developer</p>
                  <p style="margin: 0; font-size: 12px; color: #64748b;">
                    LinkedIn: <a href="https://linkedin.com/in/anas-siddiqui-b46a23209" style="color: #06b6d4; text-decoration: none;">linkedin.com/in/anas-siddiqui</a> | 
                    GitHub: <a href="https://github.com/anas-byte-dev" style="color: #06b6d4; text-decoration: none;">github.com/anas-byte-dev</a>
                  </p>
                </div>
              </div>
            </div>
          `,
        })
      } catch (confirmError) {
        console.warn('Confirmation email to visitor could not be delivered:', confirmError)
      }

      return NextResponse.json({
        success: true,
        method: 'smtp',
        message: 'Your message has been sent to Anas Siddiqui! A confirmation has also been sent to your email.',
      })
    }

    // Fallback: Web3Forms if WEB3FORMS_ACCESS_KEY is set
    if (web3formsKey) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3formsKey,
          name,
          email,
          replyto: email,
          subject: `Portfolio Message from ${name}`,
          message,
          to: recipientEmail,
        }),
      })

      const data = await response.json()
      if (data.success) {
        return NextResponse.json({
          success: true,
          method: 'web3forms',
          message: 'Your message has been sent to Anas Siddiqui! He will receive it with your reply email.',
        })
      }
    }

    // Default development / simulated mode when credentials are pending configuration
    console.log('--- NEW PORTFOLIO MESSAGE RECEIVED ---')
    console.log(`From: ${name} <${email}>`)
    console.log(`To: ${recipientEmail}`)
    console.log(`Subject: ${subject || 'Portfolio Inquiry'}`)
    console.log(`Message: ${message}`)
    console.log('---------------------------------------')

    return NextResponse.json({
      success: true,
      simulated: true,
      recipient: recipientEmail,
      message:
        'Your message has been recorded! To enable direct live email delivery to your Gmail inbox, add your Gmail App Password in .env.local.',
    })
  } catch (error: any) {
    console.error('Error in /api/contact:', error)
    return NextResponse.json(
      {
        error:
          error?.message ||
          'Failed to dispatch message. Please try again or email directly.',
      },
      { status: 500 },
    )
  }
}
