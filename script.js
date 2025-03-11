let tg = window.Telegram.WebApp;
tg.expand();

const banksData = [
    {
        name: "Сбербанк",
        tariff: "Премьер",
        limitDay: "1 млн",
        limitMonth: "5 млн",
        withdrawType: "На лк",
        cards: "1",
        totalDay: "1 млн",
        totalMonth: "5 млн",
        note: "Подключаем премьер (требований нет)",
        status: "green"
    },
    {
        name: "ВТБ",
        tariff: "Привилегия",
        limitDay: "1 млн",
        limitMonth: "5 млн",
        withdrawType: "На лк",
        cards: "1",
        totalDay: "1 млн",
        totalMonth: "5 млн",
        note: "Тариф премиальный с привилегиями подключается в ВТБ Онлайн. Первый месяц бесплатно. Лимит на снятие нала 1 млн в день и 5 млн в месяц",
        status: "blue"
    },
    {
        name: "Газпром",
        tariff: "Привилегии +",
        limitDay: "1,1 млн",
        limitMonth: "1,1 млн",
        withdrawType: "На карту",
        cards: "3",
        totalDay: "3,4 млн",
        totalMonth: "3,4 млн",
        note: "Можно снять по 1кк с карт Юнион, Универсал и Премиум в банкоматах Газа. В других банкоматах можно доп к 1кк снять еще 100к. Но также можно подключить 'привилегии +' к одной из карт, и ваш лимит по ней вырастет до 200к в банках партнерах",
        status: "blue"
    },
    {
        name: "Альфа",
        tariff: "Стандарт",
        limitDay: "1 млн",
        limitMonth: "1 млн",
        withdrawType: "На лк",
        cards: "1",
        totalDay: "1 млн",
        totalMonth: "1 млн",
        note: "",
        status: "red"
    },
    {
        name: "Россельхоз",
        tariff: "Стандарт/Именная",
        limitDay: "150к/350к",
        limitMonth: "2 млн",
        withdrawType: "На лк",
        cards: "1",
        totalDay: "150к/350к",
        totalMonth: "2 млн",
        note: "",
        status: "green"
    },
    {
        name: "МКБ",
        tariff: "Стандарт",
        limitDay: "3 млн",
        limitMonth: "3 млн",
        withdrawType: "На лк",
        cards: "1",
        totalDay: "3 млн",
        totalMonth: "3 млн",
        note: "Через банкоматы альфа только 500к лимит на снятие. С банкоматов МКБ можно снимать все 3 млн",
        status: "red"
    },
    {
        name: "Совком",
        tariff: "Стандарт",
        limitDay: "150к",
        limitMonth: "300к",
        withdrawType: "На карту",
        cards: "2",
        totalDay: "300к",
        totalMonth: "600к",
        note: "Партнеры банкоматы: альфа, втб, райфайзен, рос банк, открытие",
        status: "red"
    },
    {
        name: "Банк дом РФ",
        tariff: "Стандарт/Премиум",
        limitDay: "500к/500к",
        limitMonth: "1 млн/3 млн",
        withdrawType: "На карту",
        cards: "10/1",
        totalDay: "5 млн/500к",
        totalMonth: "10 млн/3 млн",
        note: "Фактически карт можно открыть любое количество, но, надо знать как :) Без комиссии можно снимать: альфа банк и банкоматы Дом РФ",
        status: "red"
    },
    {
        name: "Т-банк",
        tariff: "Black/Премиум",
        limitDay: "500к/безлимит",
        limitMonth: "1 млн/безлимит",
        withdrawType: "На счет",
        cards: "1",
        totalDay: "500к/безлимит",
        totalMonth: "1 млн/безлимит",
        note: "При подключении премиума лимит на снятие присваивается выборочно. Все карты Black привязаны к одному счету",
        status: "yellow"
    },
    {
        name: "РосБанк",
        tariff: "Стандарт/Премиум",
        limitDay: "300к/500к",
        limitMonth: "2 млн/3 млн",
        withdrawType: "На карту",
        cards: "3/5",
        totalDay: "600к/2.5 млн",
        totalMonth: "3 млн/5 млн",
        note: "Снимать без комиссии с Т-банк, Альфа-Банк и РосБанк. Тариф Премиум дает возможность снимать 500к в день и 3 млн в мес с 1 карты. Также в рамках тарифа Премиум можно открыть 4 дополнительные карты. С них можно снимать по 500к максимум в день и месяц. В обычном тарифе можно открыть еще 2 доп карты к основной. С них можно снимать по 150к в день и 500к в месяц. Тоже снятие можно увеличить вдвое по заявке",
        status: "red"
    },
    {
        name: "Райф",
        tariff: "Стандарт/Премиум",
        limitDay: "200к/500к",
        limitMonth: "2 млн/15 млн",
        withdrawType: "На карту",
        cards: "3/3",
        totalDay: "800к/1,5 млн",
        totalMonth: "15 млн",
        note: "Снять с 2 цифровых карт можно по 300к и с пластика 200к на обычном тарифе и по 500к с премом + 2 виртуалки к ней тоже по 500к каждая. Это лимиты в день. + Заказ нала через банкоматы около 1,2 млн на обычном и около 5-6 млн на преме",
        status: "yellow"
    },
    {
        name: "Банк России",
        tariff: "Голд/Прем (слава ек)",
        limitDay: "1.5млн/3млн",
        limitMonth: "1.5 млн/3млн",
        withdrawType: "На карту",
        cards: "5/1",
        totalDay: "1.1 млн",
        totalMonth: "6 млн",
        note: "Без комиссии только через банкоматы (Банк России) (в теории можно сделать больше карт если одобрят оформление). Только Голд есть моментум",
        status: "blue"
    },
    {
        name: "ЮниКредит",
        tariff: "Мир обыч/Стандарт/Прайм",
        limitDay: "200к/250к/250к",
        limitMonth: "1 млн/1 млн/1.5 млн",
        withdrawType: "На карту",
        cards: "1/1",
        totalDay: "700к",
        totalMonth: "3.5 млн",
        note: "Партнеры: открытие, райф, уралсиб, МКБ. И 2 раза в мес без комиссии в любых банкоматах",
        status: "red"
    },
    {
        name: "Спб банк",
        tariff: "Стандарт/Мир суприм",
        limitDay: "100к/500к",
        limitMonth: "600к/3 млн",
        withdrawType: "На лк",
        cards: "1",
        totalDay: "100к/600к",
        totalMonth: "500к/3 млн",
        note: "Банкоматы партнеры - Альфа банк, Россельхозбанк",
        status: "blue"
    },
    {
        name: "Ак Барс",
        tariff: "Стандарт/прем",
        limitDay: "100к/100к",
        limitMonth: "400к/400к",
        withdrawType: "На карту",
        cards: "2",
        totalDay: "200к",
        totalMonth: "800к",
        note: "Любые банкоматы",
        status: "green"
    },
    {
        name: "Новиком",
        tariff: "Всегда в плюсе/суприм/прем",
        limitDay: "1.7 млн",
        limitMonth: "7 млн",
        withdrawType: "На карту",
        cards: "3",
        totalDay: "5.1 млн",
        totalMonth: "21 млн",
        note: "Комиссия в сторонних банках от 0.5%, со своих банкоматов нет комиссии. 5к в год ежегодно. Можно попробовать открыть больше 3 карт",
        status: "blue"
    },
    {
        name: "УралСиб",
        tariff: "Стандарт",
        limitDay: "500к",
        limitMonth: "1,5 млн",
        withdrawType: "На карту",
        cards: "4",
        totalDay: "2 млн",
        totalMonth: "6 млн",
        note: "Есть премки, но они только под заказ",
        status: "blue"
    },
    {
        name: "Почта банк",
        tariff: "Стандарт/Прем",
        limitDay: "350к/1млн",
        limitMonth: "2 млн/5 млн",
        withdrawType: "На лк",
        cards: "1",
        totalDay: "350к/1 млн",
        totalMonth: "2млн/5млн",
        note: "Премка. Почта банк, открытие, РНБ банк",
        status: "blue"
    },
    {
        name: "МТС БАНК",
        tariff: "КэшБэк/Викенд",
        limitDay: "40к/100к",
        limitMonth: "40к/100к",
        withdrawType: "На карту",
        cards: "2",
        totalDay: "140к",
        totalMonth: "140к",
        note: "С любых банкоматов",
        status: "red"
    },
    {
        name: "РНКБ",
        tariff: "Стандарт",
        limitDay: "200к",
        limitMonth: "1 млн",
        withdrawType: "На карту",
        cards: "1",
        totalDay: "200к",
        totalMonth: "1 млн",
        note: "ВТБ, Открытие (банкоматы без комиссии)",
        status: "red"
    },
    {
        name: "ОТП Банк",
        tariff: "Стандарт/Прем именная",
        limitDay: "300к/300к",
        limitMonth: "500к/1.5 млн",
        withdrawType: "На карту",
        cards: "3",
        totalDay: "900к",
        totalMonth: "1.5 млн/4.5 млн",
        note: "Газпром и ОТП без комиссии (можно попробовать больше карт сделать)",
        status: "green"
    },
    {
        name: "Банк Зенит",
        tariff: "Стандарт",
        limitDay: "1,5 млн",
        limitMonth: "1,5 млн",
        withdrawType: "На карту",
        cards: "10",
        totalDay: "15 млн",
        totalMonth: "15 млн",
        note: "Снимать с МКБ и Альфа-Банк (не больше 500к в день в Альфе)",
        status: "blue"
    },
    {
        name: "ПСБ",
        tariff: "Стандарт/Оранж",
        limitDay: "150к/500к",
        limitMonth: "600к/3млн",
        withdrawType: "На лк",
        cards: "1",
        totalDay: "150к/500к",
        totalMonth: "600к/3млн",
        note: "Банкоматы партнеры - Альфа банк, Россельхозбанк",
        status: "blue"
    },
    {
        name: "Локо банк",
        tariff: "Стандарт",
        limitDay: "300к",
        limitMonth: "300к",
        withdrawType: "На карту",
        cards: "3",
        totalDay: "900к",
        totalMonth: "900к",
        note: "Партнеров нет. Можно попробовать сделать больше 3 карт. Надо придти и подписать заявление на расширение лимита на данный месяц (до 2 млн)",
        status: "red"
    },
    {
        name: "Рус стандарт",
        tariff: "Карманный мир",
        limitDay: "1 млн",
        limitMonth: "2 млн",
        withdrawType: "На карту",
        cards: "1",
        totalDay: "1 млн",
        totalMonth: "2 млн",
        note: "Есть премиум карта (много заббот по ее открытию и стоит от 20к мес) лучше снимать с банкоматов русский стандарт",
        status: "purple"
    },
    {
        name: "БКС (Ультра)",
        tariff: "Ультра",
        limitDay: "6 млн",
        limitMonth: "6 млн",
        withdrawType: "На счет",
        cards: "1",
        totalDay: "6 млн",
        totalMonth: "6 млн",
        note: "В тарифе Ультра 3 млн с банкомата бкс и 3 млн в банкоматов других. Свыше 3 млн в других (любых) банкоматах комиссия 1% (До 10 млн можно снять). При открытии счета в офисе надо выбрать тариф ультра!",
        status: "green"
    },
    {
        name: "Ренессанс",
        tariff: "Стандарт",
        limitDay: "200к",
        limitMonth: "1 млн",
        withdrawType: "На лк",
        cards: "1",
        totalDay: "200к",
        totalMonth: "1 млн",
        note: "Банкоматы-партнеры Альфа, ВТБ, РАЙФ",
        status: "blue"
    },
    {
        name: "Цифра Банк",
        tariff: "База/прем/индивид",
        limitDay: "150к/400к/600к",
        limitMonth: "?/2млн/4млн",
        withdrawType: "На лк",
        cards: "1",
        totalDay: "600к",
        totalMonth: "4 млн",
        note: "1. Тариф премиум: лимит 400к в день. В месяц можно снять 1,5 млн в банкоматах цифра банка и 500к в других банкоматах. 2. Тариф индивидуальный: лимит 600к в день. В месяц можно снять 3 млн в банкоматах цифра банка и 1 млн в других банкоматах",
        status: "purple"
    }
];

function displayBanks(banks) {
    const tbody = document.getElementById('banksTableBody');
    tbody.innerHTML = '';
    
    banks.forEach(bank => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="bank-name">
                    <span class="bank-status" style="background-color: ${bank.status}"></span>
                    ${bank.name}
                </div>
            </td>
            <td>${bank.tariff}</td>
            <td>${bank.limitDay}</td>
            <td>${bank.limitMonth}</td>
            <td>${bank.withdrawType}</td>
            <td>${bank.cards}</td>
            <td>${bank.totalDay}</td>
            <td>${bank.totalMonth}</td>
            <td class="note">${bank.note}</td>
        `;
        tbody.appendChild(row);
    });
}

function filterBanks() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const filterValue = document.getElementById('filterSelect').value;
    
    let filteredBanks = banksData.filter(bank => {
        const matchesSearch = bank.name.toLowerCase().includes(searchText) ||
                            bank.tariff.toLowerCase().includes(searchText);
        
        if (filterValue === 'all') return matchesSearch;
        
        const limitDay = parseInt(bank.limitDay.replace(/[^0-9]/g, '')) || 0;
        
        switch(filterValue) {
            case 'high': return matchesSearch && limitDay >= 1000000;
            case 'medium': return matchesSearch && limitDay >= 500000 && limitDay < 1000000;
            case 'low': return matchesSearch && limitDay < 500000;
            default: return matchesSearch;
        }
    });
    
    displayBanks(filteredBanks);
}

document.getElementById('searchInput').addEventListener('input', filterBanks);
document.getElementById('filterSelect').addEventListener('change', filterBanks);

// Initial display
displayBanks(banksData);