import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrencyCard from '../CurrencyCard/CurrencyCard';


function CryptoPriceCard() {
    const [priceData, setPriceData] = useState(null);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
            setPriceData(response.data.bpi);
        } catch (error) {
            setError(error.message);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    if (error) {
        return <div>Error Fetching Data</div>;
    }

    if (!priceData) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', margin: '20px', minHeight: '200px', flexWrap: 'wrap' }}>
            {Object.keys(priceData).map((key) => (
                <CurrencyCard key={key} currency={priceData[key]} />
            ))}
        </div>
    );
}

export default CryptoPriceCard;
