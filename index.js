const countryApi = () => {
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayData(data);
        })
}
countryApi();

const displayData = (data) => {
    const CountryParentNode = document.getElementById('country');
    for (let i = 0; i < data.length; i++) {
        const country = data[i];

        const countryDiv = document.createElement('div');
        const countryName = document.createElement('h1');
        countryName.innerText = country.name;

        const capital = document.createElement('p');
        capital.innerText = country.capital;

        countryDiv.appendChild(countryName);
        countryDiv.appendChild(capital);

        CountryParentNode.appendChild(countryDiv);
    }
}