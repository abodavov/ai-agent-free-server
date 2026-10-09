const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
 res.send(`<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>ابو دافوف - لوحة التحكم الاحترافية</title><script src="https://cdn.tailwindcss.com"></script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"><style>@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;800&display=swap');*{font-family:'Tajawal',sans-serif}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-thumb{background:#25D366;border-radius:10px}</style></head>
<body class="bg-[#0a0a0a] text-white min-h-screen">
<header class="border-b border-white/10 bg-[#111] sticky top-0 z-50"><div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center text-black text-xl"><i class="fa-solid fa-robot"></i></div><div><h1 class="font-black text-xl">ابو دافوف</h1><p class="text-xs text-white/50 -mt-1">نظام الموظف الذكي v2.0</p></div></div><div class="flex items-center gap-3"><span class="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs border border-green-500/30"><i class="fa-solid fa-circle text-[8px] ml-1"></i>متصل بـ GROQ</span><span class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">👨‍🍳</span></div></div></header>
<main class="max-w-7xl mx-auto p-6 grid grid-cols-12 gap-6">
<div class="col-span-12 lg:col-span-3 space-y-4">
<div class="bg-[#161616] border border-white/10 rounded-2xl p-5"><h3 class="font-bold mb-4">الاحصائيات اليوم</h3><div class="space-y-3"><div class="flex justify-between items-center bg-white/5 p-3 rounded-xl"><div><p class="text-xs text-white/50">الطلبات</p><p class="font-black text-lg">127</p></div><i class="fa-solid fa-bag-shopping text-[#25D366]"></i></div><div class="flex justify-between items-center bg-white/5 p-3 rounded-xl"><div><p class="text-xs text-white/50">الزبائن</p><p class="font-black text-lg">89</p></div><i class="fa-solid fa-users text-blue-400"></i></div><div class="flex justify-between items-center bg-white/5 p-3 rounded-xl"><div><p class="text-xs text-white/50">الارباح</p><p class="font-black text-lg">1.2M</p></div><i class="fa-solid fa-dollar text-yellow-400"></i></div></div></div>
<div class="bg-[#161616] border border-white/10 rounded-2xl p-5"><h3 class="font-bold mb-3">المنيو السريع</h3><div class="space-y-2 text-sm"><div class="flex justify-between"><span>🍗 دجاج مشوي</span><span class="text-white/50">10 الف</span></div><div class="flex justify-between"><span>🍔 برجر لحم</span><span class="text-white/50">7 الف</span></div><div class="flex justify-between"><span>🍕 بيتزا</span><span class="text-white/50">12 الف</span></div><div class="flex justify-between"><span>🌯 شاورما</span><span class="text-white/50">6 الف</span></div></div></div>
</div>
<div class="col-span-12 lg:col-span-9 bg-[#161616] border border-white/10 rounded-2xl flex flex-col h-[75vh]"><div class="p-5 border-b border-white/10 flex justify-between items-center"><h2 class="font-bold text-lg"><i class="fa-solid fa-comments ml-2 text-[#25D366]"></i>محادثة الموظف الذكي</h2><span class="text-xs text-white/40">Groq • llama-3.3-70b</span></div><div id="msgs" class="flex-1 overflow-y-auto p-5 space-y-4"><div class="flex gap-3"><div class="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-black text-sm shrink-0">🤖</div><div class="bg-white/10 p-4 rounded-2xl rounded-tr-sm max-w-[80%]"><p class="text-sm leading-6">هلا والله حبيبي! انا موظف ابو دافوف الذكي الاحترافي رجعت! ⚡<br>احجي وياي بالعراقي، اسألني عن المنيو، الاسعار، التوصيل، او خلي الزبون يطلب مباشرة وانا اخذ طلبه!</p></div></div></div><div class="p-4 border-t border-white/10 bg-[#0f0f0f] rounded-b-2xl"><div class="flex gap-3"><input id="inp" class="flex-1 bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#25D366] transition" placeholder="اكتب رسالة الزبون هنا... مثلاً: شكد سعر البيتزا؟"><button onclick="send()" class="bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold px-6 rounded-xl transition"><i class="fa-solid fa-paper-plane"></i></button></div><p class="text-[10px] text-white/30 mt-2 text-center">مربوط بـ Groq API • يرد باللهجة العراقية • مجاني 100%</p></div></div>
</main>
<script>
async function send(){
 let i=document.getElementById('inp'),m=i.value.trim(); if(!m) return;
 let box=document.getElementById('msgs');
 box.innerHTML+='<div class="flex gap-3 justify-end"><div class="bg-[#0d6efd] p-4 rounded-2xl rounded-tl-sm max-w-[80%] text-sm">'+m+'</div><div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm shrink-0">👤</div></div>';
 i.value=''; box.scrollTop=box.scrollHeight;
 let load=document.createElement('div'); load.className='flex gap-3'; load.innerHTML='<div class="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-black text-sm">🤖</div><div class="bg-white/10 p-4 rounded-2xl rounded-tr-sm text-sm text-white/50">دا افكر... 🤔</div>'; box.appendChild(load); box.scrollTop=box.scrollHeight;
 try{
  let r=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:m})});
  let d=await r.json(); load.remove();
  box.innerHTML+='<div class="flex gap-3"><div class="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-black text-sm shrink-0">🤖</div><div class="bg-white/10 p-4 rounded-2xl rounded-tr-sm max-w-[80%] text-sm leading-6">'+d.reply.replace(/\\n/g,'<br>')+'</div></div>';
  box.scrollTop=box.scrollHeight;
 }catch(e){ load.innerHTML='<div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-sm">!</div><div class="bg-red-500/20 p-4 rounded-2xl text-sm">صار خطأ، تأكد من المفتاح بـ Vercel</div>'; }
}
document.getElementById('inp').addEventListener('keypress',e=>{ if(e.key==='Enter') send(); });
</script></body></html>`);
});

app.post('/api/chat', async (req,res)=>{
 try{
  const key = process.env.GROQ_API_KEY;
  if(!key) return res.json({reply:"حبيبي المفتاح ما مربوط بعد! روح لـ Vercel > Settings > Environment Variables وضيف GROQ_API_KEY"});
  const system = "انت موظف مطعم ابو دافوف ببغداد. تحجي عراقي عامي فقط (هلا عيوني، تدلل، حبيبي). ودود ومحترف. المنيو: دجاج مشوي 10 الاف، برجر 7، بيتزا 12، شاورما 6، كص 8، مقبلات 4، بيبسي 1. التوصيل 5 الاف لكل بغداد، 45 دقيقة، الدوام 10 الصبح لـ 2 بالليل. اذا يريد يطلب اخذ العنوان والتلفون.";
  const r = await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Authorization":"Bearer "+key,"Content-Type":"application/json"},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"system",content:system},{role:"user",content:req.body.message}],temperature:0.85,max_tokens:600})});
  const d = await r.json();
  if(d.error) return res.json({reply:"صار ايرور: "+d.error.message});
  res.json({reply:d.choices?.[0]?.message?.content||"ما فهمت حبيبي عيد"});
 }catch(e){ res.json({reply:"خلل بالسيرفر: "+e.message}); }
});
module.exports = app;
