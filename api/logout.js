export default function handler(req,res){
  res.setHeader('Set-Cookie','access=; Path=/; HttpOnly; Secure; Max-Age=0');
  res.writeHead(302,{Location:'/'});
  return res.end();
}
