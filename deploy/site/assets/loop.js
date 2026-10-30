/* RSI loop: each round a batch of candidates scatters below the current best;
   ~40% of rounds one beats it, is kept (accent) and lifts the step line.
   Gains shrink as the gap to target closes. data-fill="1" = chart fills the canvas. */
(() => {
  const c = document.getElementById('loop'); if (!c) return;
  const x = c.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W, H, dpr, pts, steps, t, best, iter, INK, DIM, FAINT, LINE, ACC, rgb;
  const ITERS = 60, PER = 12, fill = c.dataset.fill === '1';
  function size() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = c.clientWidth; H = c.clientHeight;
    c.width = W * dpr; c.height = H * dpr; x.setTransform(dpr, 0, 0, dpr, 0, 0);
    const s = getComputedStyle(c);
    INK = s.getPropertyValue('--ink').trim(); DIM = s.getPropertyValue('--dim').trim();
    FAINT = s.getPropertyValue('--faint').trim(); LINE = s.getPropertyValue('--line').trim();
    ACC = s.getPropertyValue('--accent').trim();
    const h = INK.replace('#', ''); rgb = [0, 2, 4].map(i => parseInt(h.substr(i, 2), 16)).join(',');
  }
  function reset() { pts = []; steps = [[0, 0.08]]; best = 0.08; iter = 0; t = 0; }
  const narrow = () => !fill && W < 820;
  const X = i => fill ? W * (0.03 + 0.94 * i / ITERS) : narrow() ? W * (0.06 + 0.88 * i / ITERS) : W * (0.60 + 0.37 * i / ITERS);
  const Y = v => fill ? H * (0.92 - 0.82 * v) : narrow() ? H * (0.46 - 0.30 * v) : H * (0.80 - 0.62 * v);
  function spawn() {
    const gap = 0.94 - best;
    const win = Math.random() < 0.42 ? best + gap * (0.07 + Math.random() * 0.13) : null;
    for (let k = 0; k < PER; k++) {
      const g = (Math.random() + Math.random()) / 2;
      const v = best - (0.03 + g * 0.30) * (0.35 + gap);
      pts.push({ i: iter + Math.random() * 0.9, v: Math.max(0.01, v), kept: false, age: 0 });
    }
    if (win !== null) { pts.push({ i: iter + 0.45, v: win, kept: true, age: 0 }); best = win; }
    steps.push([iter + 1, best]);
    iter++;
  }
  function draw() {
    x.clearRect(0, 0, W, H);
    x.strokeStyle = LINE; x.lineWidth = 1;
    for (let g = 0; g <= 4; g++) { const y = Y(g / 4); x.beginPath(); x.moveTo(X(0), y); x.lineTo(X(ITERS), y); x.stroke(); }
    x.setLineDash([2, 5]); x.strokeStyle = FAINT;
    x.beginPath(); x.moveTo(X(0), Y(0.92)); x.lineTo(X(ITERS), Y(0.92)); x.stroke(); x.setLineDash([]);
    x.fillStyle = DIM; x.font = '10px "JetBrains Mono", monospace';
    x.fillText('TARGET', X(ITERS) - 44, Y(0.92) - 8);
    for (const p of pts) {
      const a = p.kept ? 1 : Math.max(0, 0.7 - p.age * 0.006);
      if (a <= 0) continue;
      x.fillStyle = p.kept ? ACC : `rgba(${rgb},${a})`;
      x.beginPath(); x.arc(X(p.i), Y(p.v), p.kept ? 2.8 : 1.5, 0, 7); x.fill();
    }
    x.strokeStyle = INK; x.lineWidth = 1.4; x.beginPath();
    steps.forEach(([i, v], k) => { if (k === 0) x.moveTo(X(i), Y(v)); else { x.lineTo(X(i), Y(steps[k - 1][1])); x.lineTo(X(i), Y(v)); } });
    x.stroke();
  }
  function frame() {
    t++;
    for (const p of pts) p.age++;
    pts = pts.filter(p => p.kept || p.age < 120);
    if (t % 9 === 0) { if (iter < ITERS) spawn(); else if (iter++ > ITERS + 22) reset(); }
    draw(); requestAnimationFrame(frame);
  }
  size(); reset();
  for (let k = 0, n = fill ? 26 : 12; k < n; k++) { spawn(); for (const p of pts) p.age += 9; }
  pts = pts.filter(p => p.kept || p.age < 120);
  addEventListener('resize', () => { size(); if (reduce) draw(); });
  if (reduce) { while (iter < ITERS) spawn(); pts.forEach(p => p.age = p.kept ? 0 : 30); draw(); }
  else requestAnimationFrame(frame);
})();
