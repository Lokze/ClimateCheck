import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { debounce, groupBy } from 'lodash';

function GlobalWarmingPage() {
    const getResponsiveWidth = () => {
        const screenWidth = document.documentElement.clientWidth;
        if (screenWidth < 576) {
            return Math.max(screenWidth * 0.9, 300);
        } else if (screenWidth < 768) {
            return Math.max(screenWidth * 0.75, 350);
        } else {
            return Math.max(screenWidth * 0.7, 400);
        }
    };

    const [chartWidth, setChartWidth] = useState(getResponsiveWidth());
    const [data, setData] = useState({ time: [], station: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get('https://global-warming.org/api/temperature-api');
            const fetchedData = response.data.result;
            const newTime=fetchedData.map(item=>{item.time=item.time.slice(0,4);
                return(item);
        });
            const dataByYear = groupBy(newTime,'time');
            const time = Object.keys(dataByYear);
            const station = Object.entries(dataByYear).map(([time,data])=>data[0].station)

            setData({ time, station });
            setLoading(false);
        } catch (error) {
            setError('Something went wrong with the API call.');
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

    const memoizedData = useMemo(() => ({
        time: data.time,
        station: data.station
    }), [data]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <Container fluid className="text-center d-flex flex-column p-4 justify-content-center">
                <h3 className="text-wrap w-100">This is a chart that shows the rising global temperature since April of 1880</h3>
                <h5 className="text-wrap w-100">If reading from a phone, it is suggested to keep the phone horizontal as the graph is quite large.</h5>
            </Container>

            <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div style={{ width: chartWidth }}>
                    <LineChart
                        xAxis={[{ data: memoizedData.time, label: 'YEAR' }]}
                        yAxis={[{ label: 'CELSIUS' }]}
                        series={[{ data: memoizedData.station }]}
                        width={chartWidth}
                        height={chartWidth * 0.6}
                    />
                </div>
            </div>
        </div>
    );
}

export default GlobalWarmingPage;