
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import { LineChart} from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';

function GlobalWarmingPage() {
  const [data, setData] = useState({ time: [], station: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chartWidth, setChartWidth] = useState(document.documentElement.clientWidth * 0.8); // 80% of the page width

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://global-warming.org/api/temperature-api');
        const fetchedData = response.data.result;

        const time = fetchedData.map(item => item.time);
        const station = fetchedData.map(item => item.station);

        setData({ time, station });
        setLoading(false);
      } catch (error) {
        setError('Something went wrong with the API call.');
        setLoading(false);
      }
    };

    fetchData();

    const handleResize = () => {
      setChartWidth(document.documentElement.clientWidth * 0.8); // Recalculate 80% of page width on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <LineChart
            xAxis={[{ data: data.time }]}
            series={[{ data: data.station }]}
            width={chartWidth}
            height={chartWidth * 0.6} // Maintain a 3:2 aspect ratio
          />
        </div>
      </div>
    </div>
  );
}

export default GlobalWarmingPage;