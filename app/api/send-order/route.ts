import { NextRequest, NextResponse } from 'next/server';

// Helper to send a Telegram text message
async function sendTelegramMessage(token: string, chatId: string, text: string) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
}

// Helper to send a document to Telegram
async function sendTelegramDocument(token: string, chatId: string, file: File) {
  const url = `https://api.telegram.org/bot${token}/sendDocument`;
  const formData = new FormData();
  formData.append('chat_id', chatId);
  formData.append('document', file, file.name);
  await fetch(url, {
    method: 'POST',
    body: formData,
  });
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string | null;
    const phone = formData.get('phone') as string | null;
    const service = formData.get('service') as string | null;
    const files = formData.getAll('files') as File[];

    // Compute total size and enforce 15 MB limit
    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > 15 * 1024 * 1024) {
      return NextResponse.json(
        { error: '\u041e\u0431\u0449\u0438\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u043e\u0432 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 15 \u041c\u0411.' },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
      return NextResponse.json({ error: '\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u0431\u043e\u0442\u0430 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442.' }, { status: 500 });
    }

    const text = `\u041d\u043e\u0432\u044b\u0439 \u0437\u0430\u043a\u0430\u0437:\n\u0418\u043c\u044f: ${name || '-'}\n\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ${phone || '-'}\n\u0422\u0438\u043f \u0443\u0441\u043b\u0443\u0433\u0438: ${service || '-'}`;
    await sendTelegramMessage(token, chatId, text);

    for (const file of files) {
      await sendTelegramDocument(token, chatId, file);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending order', error);
    return NextResponse.json({ error: '\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430' }, { status: 500 });
  }
}
