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
    const CountryParentNode = document.getElementById('countries');
    data.forEach((country) => {
        const countriesDiv = document.createElement('div');
        countriesDiv.className = 'country';

        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p class="capital-name">${country.capital}</p>
            <button onclick="displayCountryDetail('${country.name}')" class="details-button">Details</button>
        `;
        countriesDiv.innerHTML = countryInfo;

        CountryParentNode.appendChild(countriesDiv);
    })
    // for (let i = 0; i < data.length; i++) {
    //     const country = data[i];

    //     const countriesDiv = document.createElement('div');
    //     countriesDiv.className = 'country';

    //     const countryInfo = `
    //         <h3 class="country-name">${country.name}</h3>
    //         <p class="capital-name">${country.capital}</p>
    //     `;
    //     countriesDiv.innerHTML = countryInfo;

    //     CountryParentNode.appendChild(countriesDiv);
    // }
}

const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => extraInfo(data[0]))
}
const extraInfo = country => {
    const countryDiv = document.getElementById('countryDetails');
    countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img class="flag" src="${country.flag}">
    `
}