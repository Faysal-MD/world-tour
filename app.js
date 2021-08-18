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
            <button class="details-button">Details</button>
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