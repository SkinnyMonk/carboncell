import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

function PopulationChart() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [populationData, setPopulationData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
            setPopulationData(response.data.data);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (!populationData) return;
        function formatValue(value) {
            if (Math.abs(value) >= 1.0e+9) {
                return (value / 1.0e+9).toFixed(1) + 'B';
            }
            if (Math.abs(value) >= 1.0e+6) {
                return (value / 1.0e+6).toFixed(1) + 'M';
            }
            if (Math.abs(value) >= 1.0e+3) {
                return (value / 1.0e+3).toFixed(1) + 'K';
            }
            return value;
        }
        const config = {
            type: 'bar',
            data: {
                labels: populationData.map(country => country.Nation),
                datasets: [{
                    label: 'Population',
                    data: populationData.map(country => country.Population),
                    backgroundColor: 'rgba(89,178,66)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {

                        beginAtZero: false,
                        title: {
                            display: true,
                            text: 'Population',
                            font: {
                                size: 16,
                                weight: 'bold',
                            }
                        },
                        ticks: {
                            callback: function (value,) {
                                return formatValue(value);
                            },

                        },
                        grid: {
                            color: 'white'
                        }
                    },

                    x: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: 'Nations',
                            font: {
                                size: 16,
                                weight: 'bold',
                            }
                        },


                    }
                }
            }
        };

        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, config);
        }

    }, [populationData]);



    if (error) {
        return <div>Error Fetching Data: {error}</div>;
    }

    if (!populationData) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ margin: '20px', height: '40%', width: '80%', padding: '20px' }}>

            <canvas ref={chartRef} ></canvas>
        </div>
    );
}

export default PopulationChart;
