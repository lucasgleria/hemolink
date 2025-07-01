/**
 * Mock Data - Donors
 * Sample data for development and testing
 */

export const donors = [
    {
        id: 1,
        name: "Eduardo Antonio",
        bloodType: "O-",
        lastDonation: "2023-06-05",
        location: "São Paulo, SP - Santa Catarina",
        urgency: "maximum",
        status: "available",
        phone: "(11) 99999-1111",
        email: "eduardo.antonio@email.com"
    },
    {
        id: 2,
        name: "Vinícius Cruz",
        bloodType: "AB-",
        lastDonation: "2023-06-05",
        location: "Guaruhos, SP - Hospital Carlo Chagas",
        urgency: "high",
        status: "available",
        phone: "(11) 99999-2222",
        email: "vinicius.cruz@email.com"
    },
    {
        id: 3,
        name: "Johann Benjamin",
        bloodType: "B-",
        lastDonation: "2023-06-05",
        location: "Santa Cruz, Bolivia - Perrospital",
        urgency: "medium",
        status: "available",
        phone: "(591) 99999-3333",
        email: "johann.benjamin@email.com"
    },
    {
        id: 4,
        name: "Sabrina Mendonça",
        bloodType: "A-",
        lastDonation: "2023-06-05",
        location: "São Paulo, SP - Hospital XP Investimentos",
        urgency: "low",
        status: "available",
        phone: "(11) 99999-4444",
        email: "sabrina.mendonca@email.com"
    },
    {
        id: 5,
        name: "Gustavo Pires",
        bloodType: "AB+",
        lastDonation: "2023-06-05",
        location: "São Paulo, SP - Santo André Hospitais",
        urgency: "unavailable",
        status: "unavailable",
        phone: "(11) 99999-5555",
        email: "gustavo.pires@email.com"
    }
];

export const hemocentros = [
    {
        id: 1,
        name: "Hospital Santa Catarina",
        location: "São Paulo, SP",
        phone: "(11) 3016-7000",
        email: "contato@santacatarina.org.br"
    },
    {
        id: 2,
        name: "Hospital Carlo Chagas",
        location: "Guarulhos, SP",
        phone: "(11) 2442-7000",
        email: "contato@carlochagas.org.br"
    },
    {
        id: 3,
        name: "Hospital XP Investimentos",
        location: "São Paulo, SP",
        phone: "(11) 3003-3000",
        email: "contato@xpinvestimentos.org.br"
    },
    {
        id: 4,
        name: "Santo André Hospitais",
        location: "Santo André, SP",
        phone: "(11) 4990-7000",
        email: "contato@santoandrehospitais.org.br"
    },
    {
        id: 5,
        name: "Hemocentro Municipal",
        location: "São Bernardo do Campo, SP",
        phone: "(11) 4330-7000",
        email: "contato@hemocentro.org.br"
    }
];

export const bloodTypes = [
    "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"
];

export const urgencyLevels = [
    { value: 4, label: "Máxima", color: "red" },
    { value: 3, label: "Alta", color: "yellow" },
    { value: 2, label: "Média", color: "green" },
    { value: 1, label: "Baixa", color: "blue" }
];

export const donationTypes = [
    { value: "whole", label: "Sangue Total" },
    { value: "plasma", label: "Plasma" },
    { value: "platelets", label: "Plaquetas" }
];

// Helper functions
export function getDonorById(id) {
    return donors.find(donor => donor.id === id);
}

export function getDonorsByBloodType(bloodType) {
    return donors.filter(donor => donor.bloodType === bloodType);
}

export function getAvailableDonors() {
    return donors.filter(donor => donor.status === "available");
}

export function getDonorsByUrgency(urgency) {
    return donors.filter(donor => donor.urgency === urgency);
}

export function getHemocentroById(id) {
    return hemocentros.find(hemocentro => hemocentro.id === id);
} 