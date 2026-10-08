const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>موظف ابو دافوف</title>
  <style>body{background:#111;color:#fff;font-family:sans-serif;padding:20px} #chat{max-width:600px;margin:auto} .msg{background:#222;padding:12px;border-radius:12px;margin:8px 0} .me{background:#1a73e8} input{width:75%;padding:12px;border-radius:10px;border:0} button{padding:12px 18px;border-radius:10px;border:0;background:#25D366;color:#fff;font-weight:bold}</style>
  </head><body>
  <div id="chat"><h2>🤖 موظف ابو دافوف شغال ✅</h2><div id="msgs"><div class="msg">هلا بيك! انا موظف ابو دافوف الذكي، شنو تريد تعرف؟</div></div>
  <div style="margin-top:20px;display:flex;gap:10px"><input id="inp" placeholder="اكتب سؤالك..."><button onclick="send()">ارسال</button></div></div>
  <script>
  async function send(){
    let i=document.getElementById('inp'); let m=i.value; if(!m) return;
    document.getElementById('msgs').innerHTML+='<div class="msg me">'+m+'</div>'; i.value='';
    let r=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:m})});
    let d=await r.json();
    document.getElementById('msgs').innerHTML+='<div class="msg">'+d.reply+'</div>';
  }
  </script></body></html>
  `);
});

app.post('/api/chat', (req, res) => {
  const msg = (req.body.message || '').toLowerCase();
  let reply = "تدلل! انا موظف ابو دافوف، اساعدك بالطلبات والاسعار واوقات الدوام.";
  if(msg.includes('سعر') || msg.includes('منيو')) reply = "عندنا كلشي، وجبات دجاج، بركر، بيتزا.. تحب ادزلك المنيو الكامل؟";
  else if(msg.includes('دوام') || msg.includes('مفتوح')) reply = "فاتحين يومياً من 10 الصبح للـ 2 بالليل 🔥";
  else if(msg.includes('توصيل') || msg.includes('دلفري')) reply = "اي عدنا توصيل لكل بغداد، الطلب يوصل خلال 30-45 دقيقة.";
  else if(msg.includes('مكان') || msg.includes('عنوان')) reply = "مكاننا معروف! بس كلي وين انت وادزلك اللوكيشن.";
  else reply = "حبيبي فهمت عليك: ("+req.body.message+") - انا هسه نسخة تجريبية، بعد شوية اربطني بذكاء اصطناعي حقيقي يفهم كلشي!";
  res.json({ reply });
});

app.get('/api/status', (req,res)=> res.json({status:'online', name:'abu-dafouf-agent'}));

module.exports = app;
