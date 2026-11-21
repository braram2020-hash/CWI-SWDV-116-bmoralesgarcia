// Array de 10 objetos de autos en el ámbito global
const cars = [
    { type: "sedan", name: "Car Model 1", description: "Nice red Ford Fiesta.", year: 2022 },
    { type: "luxury", name: "Car Model 2", description: "Porsche 911. Dream car of all of us.", year: 2023 },
    { type: "luxury", name: "Car Model 3", description: "Maserati GranTurismo. For the fans of velocity.", year: 2023 },
    { type: "family", name: "Car Model 4", description: "Volvo XC90. Comfy car for family.", year: 2022 },
    { type: "sedan", name: "Car Model 5", description: "BMW Series 2 Coupé. Sporty performance with modern design.", year: 2024 },
    { type: "luxury", name: "Car Model 6", description: "BMW M4. High performance luxury with aggressive style.", year: 2024 },
    { type: "luxury", name: "Car Model 7", description: "BMW M4 Dark. Pure power and precision.", year: 2024 },
    { type: "suv", name: "Car Model 8", description: "Jeep Wrangler. Ready for off-road adventures.", year: 2021 },
    { type: "family", name: "Car Model 9", description: "Honda Odyssey. Spacious and reliable minivan.", year: 2022 },
    { type: "sedan", name: "Car Model 10", description: "Toyota Camry. Reliable and efficient daily driver.", year: 2023 }
];

function displayCars(carsArray) {
    const carGrid = document.querySelector('.car-grid');
    if (!carGrid) return;

    carGrid.innerHTML = '';

    carsArray.forEach(car => {
        const article = document.createElement('article');
        article.className = 'car-card';
        article.innerHTML = `
            <h3>${car.name}</h3>
            <p><strong>Type:</strong> ${car.type} | <strong>Year:</strong> ${car.year}</p>
            <p>${car.description}</p>
            <button type="button" class="rent-btn">Rent Car</button>
        `;

        const rentBtn = article.querySelector('.rent-btn');
        rentBtn.addEventListener('click', () => {
            const startDateInput = document.querySelector('#start-date, input[name="start-date"], input[type="date"]');
            const returnDateInput = document.querySelector('#return-date, input[name="return-date"]');

            const rentalDetail = {
                carType: car.type,
                startDate: startDateInput && startDateInput.value ? startDateInput.value : '2026-11-22',
                returnDate: returnDateInput && returnDateInput.value ? returnDateInput.value : '2026-11-25'
            };

            const confirmRentalEvent = new CustomEvent('confirm-rental', {
                detail: rentalDetail,
                bubbles: true
            });

            document.dispatchEvent(confirmRentalEvent);
        });

        carGrid.appendChild(article);
    });
}

function listCars() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('type')) {
        const carType = params.get('type');
        const filteredCars = cars.filter(car => car.type.toLowerCase() === carType.toLowerCase());
        displayCars(filteredCars);
    } else {
        displayCars(cars);
    }
}