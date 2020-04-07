import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// fetch nessasary data 
export const fetchData = async () => {
    try {
        const { data } = await axios.get(url);

        return {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }

    } catch (error) {
        
    }
};

