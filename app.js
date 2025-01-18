const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');

    title.addEventListener('click', () => {
        const isActive = title.classList.contains('active');

        // Fermer toutes les sections ouvertes
        document.querySelectorAll('.accordion-title').forEach(title => title.classList.remove('active'));
        document.querySelectorAll('.accordion-content').forEach(content => {
            content.style.maxHeight = null;
            content.style.paddingTop = null;
            content.style.paddingBottom = null;
        });

        // Ouvrir la section cliquée si elle n'était pas active
        if (!isActive) {
            title.classList.add('active');
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.paddingTop = "15px";
            content.style.paddingBottom = "15px";
        }
    });
});
