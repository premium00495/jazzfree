document.getElementById('submitBtn').addEventListener('click', async () => {
  const key = document.getElementById('accessKey').value.trim();
  const msg = document.getElementById('msg');
  msg.textContent = '';
  if(!key){ msg.textContent = 'Enter key'; return; }

  try {
    const res = await fetch('/api/validateKey', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ key })
    });
    const data = await res.json();
    if(data.valid){
      window.location.href = '/dashboard';
    } else {
      msg.textContent = 'Invalid key';
    }
  } catch(err){
    msg.textContent = 'Server error';
  }
});
