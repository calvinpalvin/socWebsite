function toggleCard(card) {
    const content = card.querySelector('.card-content');

    content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
}
