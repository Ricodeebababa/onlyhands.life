// Oracle page logic
(function(){
  const answers = [
    "The palms whisper yes — but pack snacks.",
    "Ask again after a nap.",
    "A door will open when you stop jiggling the handle.",
    "Trust your first draft; refine the edges later.",
    "Step one: drink water. Step two: step one again.",
    "Not today. Soon. Be patient with yourself.",
    "Focus on one tiny win. The rest will follow.",
    "Your timeline is not late. It's yours.",
    "You already know — I'm just glitter on top."
  ];

  function randomAnswer(){
    return answers[Math.floor(Math.random()*answers.length)];
  }

  const input = document.getElementById('oracle-input');
  const btn = document.getElementById('oracle-btn');
  const out = document.getElementById('oracle-answer');

  function reply(){
    const q = (input?.value || '').trim();
    if (!out) return;
    if (!q) {
      out.textContent = "The Oracle prefers questions to silence. Try asking something specific.";
      return;
    }
    out.textContent = randomAnswer();
  }

  if (btn) btn.addEventListener('click', reply);
  if (input) input.addEventListener('keydown', (e)=>{ if(e.key==='Enter') reply(); });
})();