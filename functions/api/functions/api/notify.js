export async function onRequestPost({ request, env }) {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: env.TELEGRAM_CHAT_ID,
          text: "🎉 EXCLUSIVE CELEBRATION\n\nA guest clicked JOIN THE CELEBRATION.\n\nEvent: Party invitation\nStatus: Button clicked."
        })
      }
    );

    if (!response.ok) {
      return new Response("Notification failed", { status: 502 });
    }

    return new Response("Notification sent", { status: 200 });

  } catch (error) {
    return new Response("Server error", { status: 500 });
  }
}
