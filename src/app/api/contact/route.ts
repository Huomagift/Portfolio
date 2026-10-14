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
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 6000);

      try {
        const response = await fetch(customEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
          signal: controller.signal,
        });

        clearTimeout(timeout);
        if (response.ok) {
          return NextResponse.json({ success: true, message: 'Delivered via Formspree.' });
        }
      } catch (err) {
        clearTimeout(timeout);
        // Continue to fallback
      }
    }

    // 2. Default: Dispatch directly via FormSubmit with AbortController timeout
    const formSubmitTarget =
      process.env.FORMSUBMIT_TOKEN ||
      process.env.NEXT_PUBLIC_FORMSUBMIT_TOKEN ||
      '35f64caaf118e92fb20df029da68b82b';

    const formSubmitUrl = `https://formsubmit.co/ajax/${formSubmitTarget}`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    try {
      const response = await fetch(formSubmitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: 'https://huomagift.github.io',
          Referer: 'https://huomagift.github.io/Portfolio/',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New Portfolio Message from ${name} (${email})`,
          _replyto: email,
          _captcha: 'false',
          _template: 'table',
        }),
        signal: controller.signal,
      });

      clearTimeout(timeout);
      const data = await response.json().catch(() => null);

      const isSuccess = data && (data.success === true || data.success === 'true');
      const needsActivation = data?.message && typeof data.message === 'string' && data.message.toLowerCase().includes('activation');

      if (isSuccess) {
        return NextResponse.json({ success: true, message: 'Email delivered successfully.' });
      }

      if (needsActivation) {
        return NextResponse.json({
          success: false,
          needsActivation: true,
          message: data.message,
        });
      }

      return NextResponse.json(
        { error: data?.message || 'Failed to dispatch email' },
        { status: 500 }
      );
    } catch (fetchError: any) {
      clearTimeout(timeout);
      return NextResponse.json(
        { error: fetchError?.name === 'AbortError' ? 'Request timed out' : fetchError?.message || 'Network dispatch issue' },
        { status: 504 }
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

