// Meta Pixel & Conversions API Helper Utility
export const META_PIXEL_ID = '28399400436335876';
export const META_CAPI_ACCESS_TOKEN = 'EAAZBw7TxzQSEBSgMFOZCQZCsTwwdVzrc20xAp5mbUOK2pUwGsTICzUHVl9owOwmnZAwTZCpycrCPYJGdGLCwRfujKukXNJSZAHbUGWsU4fsMnjR4SAeS93RtX69EQgguZAPaeZAw0mSTmWi6HtwbIDvqbHUsKhCHzk4koo4kCIC7uvDW4uWgJR3bVuix7qZClnJLukAZDZD';

interface TrackEventOptions {
  eventName: string;
  customData?: Record<string, any>;
  userData?: {
    name?: string;
    phone?: string;
    email?: string;
  };
}

export const trackMetaEvent = async ({ eventName, customData = {}, userData = {} }: TrackEventOptions) => {
  // 1. Browser Meta Pixel Event
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, customData);
  }

  // 2. Meta Conversions API (CAPI) direct payload
  try {
    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url: typeof window !== 'undefined' ? window.location.href : 'https://hhaqplusit.com',
          user_data: {
            client_user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
            ...(userData.email ? { em: userData.email.trim().toLowerCase() } : {}),
            ...(userData.phone ? { ph: userData.phone.trim().replace(/\D/g, '') } : {}),
            ...(userData.name ? { fn: userData.name.trim().toLowerCase() } : {}),
          },
          custom_data: customData,
        },
      ],
    };

    fetch(`https://graph.facebook.com/v20.0/${META_PIXEL_ID}/events?access_token=${META_CAPI_ACCESS_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).catch(() => {
      // Ignore background network errors gracefully
    });
  } catch {
    // Fail-safe
  }
};
