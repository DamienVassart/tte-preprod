// Générique
window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});

// Annonces
window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const annonces = document.getElementById('annonces');
    if (annonces) {
        new simpleDatatables.DataTable(annonces, {
            language: '../../js/DataTables/fr-FR.json'
        });
    }
});

// Organisateurs
window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const organisateurs = document.getElementById('organisateurs');
    if (organisateurs) {
        new simpleDatatables.DataTable(organisateurs);
    }
});

// Staff
window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const staff = document.getElementById('staff');
    if (staff) {
        new simpleDatatables.DataTable(staff);
    }
});