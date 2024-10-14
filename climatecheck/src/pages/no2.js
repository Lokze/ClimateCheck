import React, { useEffect, useState, useMemo, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { Line } from 'react-chartjs-2';
import { debounce } from 'lodash';
import { fetchNitrousData } from './api';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function NitrousPage() {
    const getResponsiveWidth = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 576) {
            return Math.max(screenWidth * 0.9, 300);
        } else if (screenWidth < 768) {
            return Math.max(screenWidth * 0.75, 350);
        } else {
            return Math.max(screenWidth * 0.7, 400);
        }
    };

    const [chartWidth, setChartWidth] = useState(getResponsiveWidth());
    const [data, setData] = useState({ time: [], trend: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        try {
            const data = await fetchNitrousData();
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();

        const handleResize = debounce(() => {
            requestAnimationFrame(() => {
                setChartWidth(getResponsiveWidth());
            });
        }, 200);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [fetchData]);

    const chartData = useMemo(() => ({
        labels: data.time,
        datasets: [
            {
                label: 'NITROUS OXIDE MOLE FRACTION (ppb)',
                data: data.trend,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    }), [data]);

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'YEAR',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'NITROUS OXIDE MOLE FRACTION (ppb)',
                },
            },
        },
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <Container fluid className="text-center d-flex flex-column p-4 justify-content-center">
                <h3 className="text-wrap w-100">This is a chart that shows the rising levels of Nitrous Oxide since 2002</h3>
                <h5 className="text-wrap w-100">If reading from a phone, it is suggested to keep the phone horizontal as the graph is quite large.</h5>
            </Container>

            <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div style={{ width: chartWidth, height: chartWidth * 0.6 }}>
                    <Line
                        data={chartData}
                        options={chartOptions}
                        width={chartWidth}
                        height={chartWidth * 0.6}
                    />
                </div>
            </div>
        </div>
    );
}

export default NitrousPage;
