// api/logout.js
export default function handler(req, res) {
  // Clear cookie
  res.setHeader(
    'Set-Cookie',
    'access=; Path=/; HttpOnly; Secure; Max-Age=0'
  );
  // Redirect to security system
  res.writeHead(302, { Location: '/' });
  return res.end();
}
