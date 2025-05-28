document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('input[type="text"]');
    const donorCards = document.querySelectorAll('.donor-card');

    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();

        donorCards.forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            const bloodType = card.querySelector('.blood-type span').textContent.toLowerCase();
            const location = card.querySelector('div:nth-child(3) span').textContent.toLowerCase();

            if (name.includes(searchTerm) || bloodType.includes(searchTerm) || location.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Add click effect to donor cards
    donorCards.forEach(card => {
        card.addEventListener('click', function (e) {
            if (!e.target.closest('button')) {
                alert('Mostrar detalhes do doador: ' + this.querySelector('h3').textContent);
            }
        });
    });
});