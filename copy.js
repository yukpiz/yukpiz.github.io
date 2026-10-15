document.querySelectorAll('.copy-btn').forEach((btn) => {
  const label = btn.textContent;
  btn.hidden = false;

  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.textContent = 'Copied!';
    } catch {
      btn.textContent = 'Failed...';
    }
    setTimeout(() => { btn.textContent = label; }, 1500);
  });
});
