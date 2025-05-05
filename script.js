// Toggle dark mode
document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Update "Last updated" timestamp
document.getElementById('last-updated').textContent =
  'Last updated: ' + new Date().toLocaleString();

// Optional: Trigger print on button click
document.getElementById('print-btn')?.addEventListener('click', () => {
  window.print();
});
