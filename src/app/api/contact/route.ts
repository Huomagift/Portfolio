import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields (name, email, message) are required.' },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.CONTACT_EMAIL ||
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
      'huomagift@gmail.com';

    // 1. If custom Formspree endpoint is configured, forward to Formspree
    const customEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (customEndpoint && customEndpoint.trim() !== '') {
      const response = await fetch(customEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        return NextResponse.json({ success: true });
      }
    }

    // 2. Default: Send directly to recipient email via FormSubmit.co service
    // Sends clean HTML email directly to recipientEmail with zero configuration needed
    const formSubmitUrl = `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`;

    const response = await fetch(formSubmitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `New Portfolio Message from ${name}`,
        _replyto: email,
        _template: 'table',
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({ success: true, data });
    } else {
      return NextResponse.json(
        { error: data.message || 'Failed to deliver email' },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: error?.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
