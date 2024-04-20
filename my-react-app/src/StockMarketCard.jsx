import React, { useState, useEffect } from 'react';

/**
 * StockMarketCard component displays stock market information for a specific stock.
 */
function StockMarketCard() {
    const [priceChange, setPriceChange] = useState(''); // State variable to store the price change
    const [totalValue, setTotalValue] = useState(''); // State variable to store the total value

    // useEffect is a hook that tells React to do some code when this component is rendered or updated  
    // the syntax is useEffect(() => { code to run }, [dependencies])
    // The 3 different types of dependencies are:
    // 1. No dependencies: useEffect(() => { code to run }, []), will run on mount (i.e. when the component is first rendered)
    // 2. Dependencies: useEffect(() => { code to run }, [dependencies]), will run on mount + when value of dependencies changes
    // 3. No second argument: useEffect(() => { code to run }), will run aftr every re-render
    useEffect(() => {
        /**
         * Fetches stock data from the API and updates the state with the retrieved data.
         */
        const fetchStockData = async () => {
            try {
                const response = await fetch('https://api.example.com/stock/VT'); // Fetch stock data from the API
                const data = await response.json(); // Parse the response as JSON
                setPriceChange(data.priceChange); // Update the price change state variable
                setTotalValue(data.totalValue); // Update the total value state variable
            } catch (error) {
                console.error('Error fetching stock data:', error); // Log any errors that occur during the fetch
            }
        };
    
        fetchStockData(); // Fetch data once when the component is rendered
    
        const intervalId = setInterval(fetchStockData, 5000); // Fetch data every 5 seconds
    
        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="stockMarketCard">
            <h2>Vanguard Total World Stock ETF(VT)</h2>
            <p>Price Change: {priceChange}</p>
            <p>Total Value: {totalValue}</p>
        </div>
    );
}

export default StockMarketCard;
