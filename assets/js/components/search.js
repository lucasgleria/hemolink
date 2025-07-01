/**
 * Search Component
 * Handles donor search functionality
 */
class DonorSearch {
    constructor() {
        this.searchInput = document.querySelector('input[type="text"]');
        this.donorCards = document.querySelectorAll('.donor-card');
        this.init();
    }

    init() {
        if (this.searchInput) {
            this.searchInput.addEventListener('input', this.handleSearch.bind(this));
        }
    }

    handleSearch(event) {
        const searchTerm = event.target.value.toLowerCase();
        
        this.donorCards.forEach(card => {
            const name = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const bloodType = card.querySelector('.blood-type span')?.textContent.toLowerCase() || '';
            const location = card.querySelector('.donor-location span')?.textContent.toLowerCase() || '';
            
            const isMatch = name.includes(searchTerm) || 
                           bloodType.includes(searchTerm) || 
                           location.includes(searchTerm);
            
            card.style.display = isMatch ? 'block' : 'none';
        });
    }

    // Static method to filter donors by blood type
    static filterByBloodType(bloodType) {
        const donorCards = document.querySelectorAll('.donor-card');
        
        donorCards.forEach(card => {
            const cardBloodType = card.querySelector('.blood-type span')?.textContent || '';
            card.style.display = cardBloodType === bloodType ? 'block' : 'none';
        });
    }

    // Static method to filter by urgency level
    static filterByUrgency(urgencyLevel) {
        const donorCards = document.querySelectorAll('.donor-card');
        
        donorCards.forEach(card => {
            const urgencyTag = card.querySelector('.urgency-tag');
            if (urgencyTag) {
                const cardUrgency = urgencyTag.textContent.toLowerCase();
                card.style.display = cardUrgency.includes(urgencyLevel) ? 'block' : 'none';
            }
        });
    }
}

// Export for use in other modules
export { DonorSearch }; 