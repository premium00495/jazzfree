// api/validateKey.js
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { key } = req.body || {};

  // ✅ Valid keys
  const VALID_KEYS = ['12345','pak2025'];
  // Production me environment variable use karna recommended: process.env.VALID_KEYS.split(',')

  if (VALID_KEYS.includes(String(key))) {
    const maxAge = 60 * 60 * 24; // 1 day
    res.setHeader(
      'Set-Cookie',
      `access=1; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`
    );
    return res.status(200).json({ valid: true });
  }

  return res.status(200).json({ valid: false });
}
