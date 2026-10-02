import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Log payload or forward to CRM, Google Sheets, or Email service
    console.log('[New Travel Enquiry Received]:', data);

    // E.g. Send notification via Resend, Sendgrid or WhatsApp webhook
    return NextResponse.json({ success: true, message: 'Enquiry captured successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to process enquiry' }, { status: 500 });
  }
}
