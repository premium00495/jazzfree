import fs from 'fs';
import path from 'path';

export default function handler(req,res){
  const cookies = req.headers.cookie || '';
  if(!cookies.split(';').map(c=>c.trim()).includes('access=1')){
    res.writeHead(302,{Location:'/'});
    return res.end();
  }
  const filePath = path.join(process.cwd(),'watch.html');
  try {
    const html = fs.readFileSync(filePath,'utf8');
    res.setHeader('Content-Type','text/html; charset=utf-8');
    return res.end(html);
  } catch(err){
    return res.end('<h1>Protected Page</h1><a href="/api/logout">Logout</a>');
  }
}
