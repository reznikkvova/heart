document.addEventListener('DOMContentLoaded', () => {
  const ac1 = document.getElementById('action-1');
  const ac2 = document.getElementById('action-2');

  ac1.addEventListener('click', () => {
    ac1.classList.add('hidden');
    ac2.classList.remove('hidden');
  });

  ac2.addEventListener('click', () => {
    ac2.classList.add('hidden');
    ac1.classList.remove('hidden');
  });
});
