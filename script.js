let tg = window.Telegram.WebApp;
tg.expand();

const banksData = [
    { name: "Сбербанк", limit: "100,000₽/день", status: "active" },
    { name: "Тинькофф", limit: "150,000₽/день", status: "active" },
    { name: "ВТБ", limit: "80,000₽/день", status: "inactive" },
    { name: "Альфа-Банк", limit: "200,000₽/день", status: "active" },
    { name: "Райффайзен", limit: "120,000₽/день", status: "inactive" }
];

function displayBanks(banks) {
    const tbody = document.getElementById('banksTableBody');
    tbody.innerHTML = '';
    
    banks.forEach(bank => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${bank.name}</td>
            <td>${bank.limit}</td>
            <td class="${bank.status}">${bank.status === 'active' ? 'Активен' : 'Неактивен'}</td>
        `;
        tbody.appendChild(row);
    });
}

function filterBanks() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const filterValue = document.getElementById('filterSelect').value;
    
    let filteredBanks = banksData.filter(bank => {
        const matchesSearch = bank.name.toLowerCase().includes(searchText);
        const matchesFilter = filterValue === 'all' || bank.status === filterValue;
        return matchesSearch && matchesFilter;
    });
    
    displayBanks(filteredBanks);
}

document.getElementById('searchInput').addEventListener('input', filterBanks);
document.getElementById('filterSelect').addEventListener('change', filterBanks);

// Initial display
displayBanks(banksData);