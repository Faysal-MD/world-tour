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

        const countriesDiv = document.createElement('div');
        // countriesDiv.className = 'country';
        // const countryName = document.createElement('h1');
        // countryName.innerText = country.name;

        // const capital = document.createElement('p');
        // capital.innerText = country.capital;

        // countryDiv.appendChild(countryName);
        // countryDiv.appendChild(capital);
        
        const countryInfo = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
        `
        countriesDiv.innerHTML = countryInfo;

        CountryParentNode.appendChild(countriesDiv);
    }
}