export default function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({message:'Method Not Allowed'});
  const {key} = req.body || {};
  const VALID_KEYS = ['12345','pak2025'];
  if(VALID_KEYS.includes(String(key))){
    res.setHeader('Set-Cookie','access=1; Path=/; HttpOnly; Secure; Max-Age=86400; SameSite=Lax');
    return res.status(200).json({valid:true});
  }
  return res.status(200).json({valid:false});
}
