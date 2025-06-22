async function getCountryInfo() {
    const country = document.getElementById("countryInput").value.trim();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Loading...";
    
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);

        if(!response.ok) {
            throw new Error("Country not found!");
        }

        const data = await response.json();
        const info = data[0];

        resultDiv.innerHTML = `<h2>${info.name.common}</h2>
        <p><strong>Capital:</strong> ${info.capital?.[0] || "N/A"}</p>
        <p><strong>Population:</strong> ${info.population.toLocaleString()}</p>
        <p><strong>Region:</strong> ${info.region}</p>
        <img src="${info.flags.svg}" alt="Flag of ${info.name.common}" />`;
    } catch (error) {
        resultDiv.innerHTML = `<p class="error">${error.message}</p>`;
    } finally {
        console.log("Fetch operation completed.");
        
    }
}