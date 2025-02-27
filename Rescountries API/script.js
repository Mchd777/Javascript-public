  async function fetchCountries() {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                if (!response.ok) throw new Error("Erreur lors du chargement des pays");
                const data = await response.json();

                // Mélanger les pays et en sélectionner 20
                let countries = data.sort(() => 0.5 - Math.random()).slice(0, 20);

                // Sélection de l'élément conteneur
                let container = document.querySelector('.container');

                // Affichage des pays
                countries.forEach(country => {
                    let currency = country.currencies ? Object.values(country.currencies)[0]?.name ?? "Non disponible" : "Non disponible";
                    let capital = country.capital ? country.capital[0] : "Non disponible";
                    let flag = country.flags?.png ?? ""; 

                    let countryCard = document.createElement("div");
                    countryCard.classList.add("country-card");

                    countryCard.innerHTML = `
                        <h2>${country.name.common}</h2>
                        <img src="${flag}" alt="Drapeau de ${country.name.common}">
                        <p><strong>Capitale :</strong> ${capital}</p>
                        <p><strong>Devise :</strong> ${currency}</p>
                    `;

                    container.appendChild(countryCard);
                });
            } catch (error) {
                console.error(error);
            }
        }

        fetchCountries();