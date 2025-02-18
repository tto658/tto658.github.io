document.addEventListener("DOMContentLoaded", function() {
    const sp500Symbols = ["AAPL", "MSFT", "AMZN", "GOOGL", "FB", "TSLA", "BRK.B", "JNJ", "JPM", "V"];
    
    function getRandomStock() {
        const randomIndex = Math.floor(Math.random() * sp500Symbols.length);
        return sp500Symbols[randomIndex];
    }

    function fetchOptionsData() {
        const selectedStock = getRandomStock();
        console.log(`Selected Stock: ${selectedStock}`);

        fetch('http://localhost:5000/options-data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ symbol: selectedStock })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error(data.error);
                return;
            }
            createVolatilitySurface(data.optionsSurface, selectedStock);
        })
        .catch(error => console.error('Error:', error));
    }

    function createVolatilitySurface(optionsData, symbol) {
        let strikes = [];
        let expirations = [];
        let impliedVols = [];

        optionsData.forEach(option => {
            strikes.push(option.strike);
            expirations.push(new Date(option.expiration));
            impliedVols.push(option.impliedVolatility);
        });

        let data = [{
            x: strikes,
            y: expirations,
            z: impliedVols,
            type: 'mesh3d',
            opacity: 0.8,
            color: 'rgba(100,200,300,0.6)'
        }];

        let layout = {
            title: `Implied Volatility Surface for ${symbol}`,
            scene: {
                xaxis: { title: 'Strike Price' },
                yaxis: { title: 'Expiration Date' },
                zaxis: { title: 'Implied Volatility' }
            }
        };

        Plotly.newPlot('visualization', data, layout);
    }

    fetchOptionsData();
    setInterval(fetchOptionsData, 60000);  // Update every minute
});

