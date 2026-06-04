"use server"

import { Resend } from "resend"

// Initialize Resend. It will safely fail if no API key is provided,
// allowing us to gracefully fallback to logging in development.
const resend = new Resend(process.env.RESEND_API_KEY || "missing_key")

export async function submitAuditForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const website = formData.get("website") as string
    const challenge = formData.get("challenge") as string
    // Extract selected channels from FormData (it comes as a comma-separated string)
    const channelsString = formData.get("channels") as string
    const channels = channelsString ? channelsString.split(",") : []

    if (!name || !email) {
      return { success: false, error: "Name and email are required." }
    }

    // Construct the email content
    const emailHtml = `
      <h2>New Pre-Audit Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Website:</strong> ${website || "Not provided"}</p>
      <p><strong>Channels of Interest:</strong> ${channels.length > 0 ? channels.join(", ") : "None specified"}</p>
      <p><strong>Primary Challenge:</strong> ${challenge || "Not provided"}</p>
    `

    // In development or if API key is missing, just log it
    if (!process.env.RESEND_API_KEY) {
      console.log("Mock Email Sent:", { name, email, website, channels, challenge })
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800))
      return { success: true, message: "Audit request received successfully!" }
    }

    // Send the email using Resend
    await resend.emails.send({
      from: "RepublicAds Website <leads@republicads.in>", // Replace with your verified sender domain
      to: ["hello@republicads.in"], // Replace with your email
      subject: `New Pre-Audit Request from ${name}`,
      html: emailHtml,
    })

    return { success: true, message: "Audit request received successfully!" }

  } catch (error) {
    console.error("Error submitting audit form:", error)
    return { success: false, error: "Failed to submit request. Please try again." }
  }
}
