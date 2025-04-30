document.getElementById('divizao')

//consumo de API

function fetch() {
    let abril = new XMLHttpRequest ();
    let anoAfuera = document.getElementById('anos').value;
    let paisesAfuera = document.getElementById('paises').value;
    let url = `https://date.nager.at/api/v3/PublicHolidays/2025/AT`;
    abril.open('GET' , url);
}