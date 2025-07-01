/**
 * Hemolink - Main JavaScript File
 * Initializes all components and utilities
 */

// Import components and utilities
// import { DonorSearch } from './components/search.js';
// import { showNotification, formatDate, validateEmail } from './utils/helpers.js';

// Main Application Class
class HemolinkApp {
    constructor() {
        this.components = {};
        this.init();
    }

    init() {
        // Initialize components based on current page
        this.initializeComponents();
        this.setupEventListeners();
        this.setupPageSpecificFeatures();
    }

    initializeComponents() {
        // Initialize search functionality if on home page
        // if (document.querySelector('.donor-card')) {
        //     this.components.search = new DonorSearch();
        // }

        // Initialize other components as needed
        this.initializeDonorCards();
        this.initializeForms();
        this.initializeCharts();
    }

    initializeDonorCards() {
        const donorCards = document.querySelectorAll('.donor-card');

        donorCards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('button')) {
                    const donorName = card.querySelector('h3')?.textContent || 'Doador';
                    // showNotification(`Mostrar detalhes do doador: ${donorName}`, 'info');
                    alert(`Mostrar detalhes do doador: ${donorName}`);
                }
            });
        });
    }

    initializeForms() {
        const forms = document.querySelectorAll('form');

        forms.forEach(form => {
            form.addEventListener('submit', this.handleFormSubmit.bind(this));
        });

        // Initialize form validations
        this.initializeFormValidations();
    }

    initializeFormValidations() {
        // Email validation
        const emailInputs = document.querySelectorAll('input[type="email"]');
        emailInputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.value && !this.validateEmail(input.value)) {
                    this.showFieldError(input, 'Email inválido');
                } else {
                    this.clearFieldError(input);
                }
            });
        });

        // Required field validation
        const requiredInputs = document.querySelectorAll('input[required], select[required], textarea[required]');
        requiredInputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (!input.value.trim()) {
                    this.showFieldError(input, 'Este campo é obrigatório');
                } else {
                    this.clearFieldError(input);
                }
            });
        });
    }

    showFieldError(field, message) {
        this.clearFieldError(field);

        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        `;

        field.parentNode.appendChild(errorDiv);
        field.style.borderColor = '#ef4444';
    }

    clearFieldError(field) {
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        field.style.borderColor = '';
    }

    initializeCharts() {
        // Initialize charts if Chart.js is available
        if (typeof Chart !== 'undefined') {
            this.initializeDonationChart();
        }
    }

    initializeDonationChart() {
        const chartCanvas = document.getElementById('donationsChart');
        if (!chartCanvas) return;

        const ctx = chartCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [{
                    label: 'Doações',
                    data: [120, 190, 300, 500, 200, 300],
                    borderColor: '#dc2626',
                    backgroundColor: 'rgba(220, 38, 38, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    setupEventListeners() {
        // Global event listeners
        document.addEventListener('click', this.handleGlobalClick.bind(this));

        // Notification bell
        const notificationBell = document.querySelector('.fa-bell');
        if (notificationBell) {
            notificationBell.addEventListener('click', () => {
                // showNotification('Nenhuma notificação no momento', 'info');
                alert('Nenhuma notificação no momento');
            });
        }

        // Profile icon
        const profileIcon = document.querySelector('.user-profile-link');
        if (profileIcon) {
            profileIcon.addEventListener('click', (e) => {
                // Handle profile navigation
            });
        }
    }

    setupPageSpecificFeatures() {
        const currentPage = this.getCurrentPage();

        switch (currentPage) {
            case 'home':
                this.setupHomePage();
                break;
            case 'login':
                this.setupLoginPage();
                break;
            case 'donation-form':
                this.setupDonationForm();
                break;
            case 'request-form':
                this.setupRequestForm();
                break;
            case 'stats':
                this.setupStatsPage();
                break;
        }
    }

    getCurrentPage() {
        const path = window.location.pathname;

        if (path.includes('login')) return 'login';
        if (path.includes('agendar-doacao')) return 'donation-form';
        if (path.includes('pedir-doacao')) return 'request-form';
        if (path.includes('stats')) return 'stats';
        if (path === '/' || path.includes('index')) return 'home';

        return 'unknown';
    }

    setupHomePage() {
        // Carrossel responsivo para seção Doe Sangue
        const carousel = document.getElementById('carousel-doe-sangue');
        if (!carousel) return;
        const cards = Array.from(carousel.querySelectorAll('.carousel-card'));
        if (cards.length <= 1) return;

        // Cria navegação do carrossel
        let current = 0;
        const nav = document.createElement('div');
        nav.className = 'carousel-nav';
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-btn';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-btn';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nav.appendChild(prevBtn);
        nav.appendChild(nextBtn);
        carousel.parentNode.appendChild(nav);

        function updateCarousel() {
            if (window.innerWidth < 900) {
                cards.forEach((card, i) => {
                    card.classList.toggle('inactive', i !== current);
                });
                prevBtn.disabled = current === 0;
                nextBtn.disabled = current === cards.length - 1;
                nav.style.display = 'flex';
            } else {
                cards.forEach(card => card.classList.remove('inactive'));
                nav.style.display = 'none';
            }
        }

        prevBtn.addEventListener('click', () => {
            if (current > 0) {
                current--;
                updateCarousel();
            }
        });
        nextBtn.addEventListener('click', () => {
            if (current < cards.length - 1) {
                current++;
                updateCarousel();
            }
        });
        window.addEventListener('resize', updateCarousel);
        updateCarousel();
    }

    setupLoginPage() {
        // Login page specific features
        const actionButtons = document.querySelectorAll('.main-action-btn');

        actionButtons.forEach(button => {
            button.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-5px)';
            });

            button.addEventListener('mouseleave', function () {
                this.style.transform = '';
            });
        });
    }

    setupDonationForm() {
        // Show back button
        const backLink = document.querySelector('.back-link');
        if (backLink) {
            backLink.style.display = 'inline-flex';
        }

        // Setup blood type selector
        this.setupBloodTypeSelector();

        // Setup date picker
        this.setupDatePicker();
    }

    setupRequestForm() {
        // Show back button
        const backLink = document.querySelector('.back-link');
        if (backLink) {
            backLink.style.display = 'inline-flex';
        }

        // Setup blood type selector
        this.setupBloodTypeSelector();

        // Setup urgency selector
        this.setupUrgencySelector();
    }

    setupStatsPage() {
        // Stats page specific features
        const backLink = document.querySelector('.back-link');
        if (backLink) {
            backLink.style.display = 'inline-flex';
        }
    }

    setupBloodTypeSelector() {
        const bloodTypeOptions = document.querySelectorAll('.blood-type-option');

        bloodTypeOptions.forEach(option => {
            option.addEventListener('click', function () {
                // Remove selected class from all options
                bloodTypeOptions.forEach(opt => opt.classList.remove('selected'));

                // Add selected class to clicked option
                this.classList.add('selected');

                // Update hidden input
                const hiddenInput = document.getElementById('bloodType');
                if (hiddenInput) {
                    hiddenInput.value = this.dataset.type;
                }
            });
        });
    }

    setupUrgencySelector() {
        const urgencyOptions = document.querySelectorAll('.urgency-option');

        urgencyOptions.forEach(option => {
            option.addEventListener('click', function () {
                // Remove selected class from all options
                urgencyOptions.forEach(opt => opt.classList.remove('selected'));

                // Add selected class to clicked option
                this.classList.add('selected');

                // Update hidden input
                const hiddenInput = document.getElementById('urgencyLevel');
                if (hiddenInput) {
                    hiddenInput.value = this.dataset.level;
                }
            });
        });
    }

    setupDatePicker() {
        const dateInput = document.getElementById('date');
        if (dateInput) {
            // Set minimum date to today
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
        }
    }

    handleFormSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        // Validate form
        if (this.validateForm(form)) {
            this.submitForm(formData, form.id);
        }
    }

    validateForm(form) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                this.showFieldError(field, 'Este campo é obrigatório');
                isValid = false;
            }
        });

        return isValid;
    }

    submitForm(formData, formId) {
        // Simulate form submission
        // showNotification('Formulário enviado com sucesso!', 'success');
        alert('Formulário enviado com sucesso!');

        // In a real application, you would send the data to a server
        console.log('Form data:', Object.fromEntries(formData));

        // Redirect or show success message
        setTimeout(() => {
            window.location.href = '../doardores-disponiveis.html';
        }, 2000);
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    handleGlobalClick(event) {
        // Handle global click events
        const target = event.target;

        // Handle contact buttons
        if (target.closest('.contact-btn')) {
            const donorName = target.closest('.donor-card')?.querySelector('h3')?.textContent || 'Doador';
            // showNotification(`Entrando em contato com ${donorName}`, 'info');
            alert(`Entrando em contato com ${donorName}`);
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HemolinkApp();
});

// Export for testing or external use
export { HemolinkApp };

// Funcionalidade para botões de notificação
function initializeNotifications() {
    // Botão de notificação (campainha)
    const notificationBell = document.querySelector('.fa-bell');
    if (notificationBell) {
        notificationBell.addEventListener('click', function () {
            showNotifications();
        });
    }

    // Botão de perfil do usuário
    const profileIcon = document.querySelector('.user-profile-link, .flex.items-center.space-x-2.cursor-pointer');
    if (profileIcon) {
        profileIcon.addEventListener('click', function (e) {
            e.preventDefault();
            showUserMenu();
        });
    }
}

// Mostrar notificações
function showNotifications() {
    const notifications = [
        { type: 'urgent', message: 'Nova solicitação de doação urgente - Tipo O-', time: '2 min atrás' },
        { type: 'info', message: 'Você pode doar sangue novamente a partir de 15/09/2023', time: '1 hora atrás' },
        { type: 'success', message: 'Sua última doação ajudou a salvar 3 vidas', time: '2 dias atrás' }
    ];

    let notificationHtml = '<div class="fixed top-16 right-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-80 z-50">';
    notificationHtml += '<div class="flex justify-between items-center mb-3">';
    notificationHtml += '<h3 class="font-bold text-gray-800">Notificações</h3>';
    notificationHtml += '<button onclick="closeNotifications()" class="text-gray-400 hover:text-gray-600"><i class="fas fa-times"></i></button>';
    notificationHtml += '</div>';

    notifications.forEach(notification => {
        const iconClass = notification.type === 'urgent' ? 'fa-exclamation-triangle text-red-600' :
            notification.type === 'info' ? 'fa-info-circle text-blue-600' :
                'fa-check-circle text-green-600';

        notificationHtml += `<div class="flex items-start py-2 border-b border-gray-100 last:border-b-0">`;
        notificationHtml += `<i class="fas ${iconClass} mt-1 mr-3"></i>`;
        notificationHtml += `<div class="flex-1">`;
        notificationHtml += `<p class="text-sm text-gray-800">${notification.message}</p>`;
        notificationHtml += `<p class="text-xs text-gray-500 mt-1">${notification.time}</p>`;
        notificationHtml += `</div>`;
        notificationHtml += `</div>`;
    });

    notificationHtml += '</div>';

    // Remover notificação anterior se existir
    const existingNotification = document.querySelector('.notification-panel');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Adicionar nova notificação
    const notificationPanel = document.createElement('div');
    notificationPanel.className = 'notification-panel';
    notificationPanel.innerHTML = notificationHtml;
    document.body.appendChild(notificationPanel);
}

// Fechar notificações
function closeNotifications() {
    const notificationPanel = document.querySelector('.notification-panel');
    if (notificationPanel) {
        notificationPanel.remove();
    }
}

// Mostrar menu do usuário
function showUserMenu() {
    const menuItems = [
        { icon: 'fa-user', text: 'Meu Perfil', action: 'pages/auth/login.html' },
        { icon: 'fa-chart-line', text: 'Minhas Estatísticas', action: 'pages/dashboard/stats-user.html' },
        { icon: 'fa-calendar', text: 'Agendar Doação', action: 'pages/donor/agendar-doacao.html' },
        { icon: 'fa-edit', text: 'Editar Cadastro', action: 'pages/donor/editar-cadastro.html' },
        { icon: 'fa-sign-out-alt', text: 'Sair', action: 'logout' }
    ];

    let menuHtml = '<div class="fixed top-16 right-4 bg-white rounded-lg shadow-lg border border-gray-200 p-2 w-48 z-50">';

    menuItems.forEach(item => {
        if (item.action === 'logout') {
            menuHtml += `<button onclick="logout()" class="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded flex items-center">`;
        } else {
            menuHtml += `<a href="${item.action}" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded flex items-center">`;
        }
        menuHtml += `<i class="fas ${item.icon} mr-3 text-gray-500"></i>`;
        menuHtml += item.text;
        menuHtml += item.action === 'logout' ? '</button>' : '</a>';
    });

    menuHtml += '</div>';

    // Remover menu anterior se existir
    const existingMenu = document.querySelector('.user-menu-panel');
    if (existingMenu) {
        existingMenu.remove();
    }

    // Adicionar novo menu
    const menuPanel = document.createElement('div');
    menuPanel.className = 'user-menu-panel';
    menuPanel.innerHTML = menuHtml;
    document.body.appendChild(menuPanel);
}

// Função de logout
function logout() {
    alert('Logout realizado com sucesso!');
    window.location.href = 'doardores-disponiveis.html';
}

// Fechar menus quando clicar fora
document.addEventListener('click', function (e) {
    if (!e.target.closest('.fa-bell') && !e.target.closest('.notification-panel')) {
        closeNotifications();
    }

    if (!e.target.closest('.user-profile-link') && !e.target.closest('.user-menu-panel') && !e.target.closest('.flex.items-center.space-x-2.cursor-pointer')) {
        const userMenu = document.querySelector('.user-menu-panel');
        if (userMenu) {
            userMenu.remove();
        }
    }
});

// Inicializar funcionalidades quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
    initializeNotifications();
    initializeSearch();
});