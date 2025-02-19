import axios from 'axios';
import { groupBy } from 'lodash';


export const fetchTemperatureData = async () => {
    try {
        const response = await axios.get('https://global-warming.org/api/temperature-api');
        const fetchedData = response.data.result;
        const newTime = fetchedData.map(item => {
            item.time = item.time.slice(0, 4);
            return item;
        });
        const dataByYear = groupBy(newTime, 'time');
        const time = Object.keys(dataByYear);
        const station = Object.entries(dataByYear).map(([time, data]) => data[0].station);
        return { time, station };
    } catch (error) {
        throw new Error('Something went wrong with the temperature API call.');
    }
};

export const fetchMethaneData = async () => {
    try {
        const response = await axios.get('https://global-warming.org/api/methane-api');
        const fetchedData = response.data.methane;
        const newTime = fetchedData.map(item => {
            item.date = item.date.slice(0, 4);
            return item;
        });
        const dataByYear = groupBy(newTime, 'date');
        const time = Object.keys(dataByYear);
        const trend = Object.entries(dataByYear).map(([date, data]) => data[0].trend);
        return { time, trend };
    } catch (error) {
        throw new Error('Something went wrong with the methane API call.');
    }
};

export const fetchCo2Data = async () => {
    try {
        const response = await axios.get('https://global-warming.org/api/co2-api');
        const fetchedData = response.data.co2;
        const dataByYear = groupBy(fetchedData, 'year');
        const time = Object.keys(dataByYear);
        const trend = Object.entries(dataByYear).map(([time, data]) => data[0].trend);
        return { time, trend };
    } catch (error) {
        throw new Error('Something went wrong with the CO2 API call.');
    }
};

export const fetchNitrousData = async () => {
    try {
        const response = await axios.get('https://global-warming.org/api/nitrous-oxide-api');
        const fetchedData = response.data.nitrous;
        const newTime = fetchedData.map(item => {
            item.date = item.date.slice(0, 4);
            return item;
        });
        const dataByYear = groupBy(newTime, 'date');
        const time = Object.keys(dataByYear);
        const trend = Object.entries(dataByYear).map(([date, data]) => data[0].trend);
        return { time, trend };
    } catch (error) {
        throw new Error('Something went wrong with the nitrous oxide API call.');
    }
};

export const fetchArcticData = async () => {
    try {
        const response = await axios.get('https://global-warming.org/api/arctic-api');
        const fetchedData = response.data.arcticData.data;

        const newData = Object.entries(fetchedData)
            .map(([dateKey, data]) => ({
                year: dateKey.slice(0, 4),
                trend: parseFloat(data.value)
            }))
            .filter(entry => !isNaN(entry.trend) && entry.trend !== -9999); // Ignore invalid values

        const dataByYear = groupBy(newData, 'year');
        const time = Object.keys(dataByYear);
        const trend = time.map(year => dataByYear[year][0].trend);

        return { time, trend };
    } catch (error) {
        throw new Error('Something went wrong with the Arctic data API call.');
    }
};