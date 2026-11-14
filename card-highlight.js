/* One delegated pointer effect for all collection cards, including lazy batches. */
(() => {
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const reducedEffects = matchMedia('(prefers-reduced-motion: reduce), (prefers-reduced-transparency: reduce), (prefers-contrast: more), (forced-colors: active)');
  let card = null, frame = 0, point = null;
  function clear() {
    cancelAnimationFrame(frame); frame = 0; point = null;
    if (card) {
      card.classList.remove('is-pointer-active');
      card.style.removeProperty('--pointer-x');
      card.style.removeProperty('--pointer-y');
      card = null;
    }
  }
  document.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse' || !finePointer.matches || reducedEffects.matches) { clear(); return; }
    const next = event.target instanceof Element ? event.target.closest('.ui-card') : null;
    if (next !== card) { clear(); card = next; }
    if (!card) return;
    point = {x: event.clientX, y: event.clientY};
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      if (!card?.isConnected || !point) { clear(); return; }
      const bounds = card.getBoundingClientRect();
      card.style.setProperty('--pointer-x', `${(point.x - bounds.left).toFixed(1)}px`);
      card.style.setProperty('--pointer-y', `${(point.y - bounds.top).toFixed(1)}px`);
      card.classList.add('is-pointer-active');
    });
  }, {passive: true});
  document.addEventListener('pointerout', event => {
    if (card && !(event.relatedTarget instanceof Node && card.contains(event.relatedTarget))) clear();
  }, {passive: true});
  for (const type of ['hashchange', 'popstate', 'blur']) window.addEventListener(type, clear);
  document.addEventListener('pointercancel', clear);
  window.addEventListener('scroll', clear, {passive: true});
  document.addEventListener('visibilitychange', clear);
  finePointer.addEventListener('change', clear);
  reducedEffects.addEventListener('change', clear);
})();
