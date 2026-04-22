document.querySelectorAll('[data-specimens]').forEach((specimens) => {
  const tabs = specimens.querySelectorAll('[data-specimen-target]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((item) => {
        const isSelected = item === tab;
        const panel = specimens.querySelector(`#${item.dataset.specimenTarget}`);

        item.setAttribute('aria-pressed', String(isSelected));
        panel.hidden = !isSelected;
      });
    });
  });
});
