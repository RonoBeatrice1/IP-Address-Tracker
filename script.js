// script.js

document.getElementById("ipForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const ipAddress = document.getElementById("ipInput").value;
    fetch(`https://api.ipstack.com/${ipAddress}?access_key=YOUR_API_KEY`)
        .then((response) => response.json())
        .then((data) => {
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `
                <h2>IP Address: ${data.ip}</h2>
                <p>Country: ${data.country_name}</p>
                <p>Region: ${data.region_name}</p>
                <p>City: ${data.city}</p>
                <p>Latitude: ${data.latitude}</p>
                <p>Longitude: ${data.longitude}</p>
            `;
        })
        .catch((error) => {
            console.error("Error:", error);
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `<p>Error fetching IP information.</p>`;
        });
});
