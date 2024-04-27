import axios from 'axios';

const rapidKey = 'dad5165252msh60cffd50f3eae3dp1f5a1bjsnfafeb3d57740';
const rapidHost = 'zillow56.p.rapidapi.com';


async function getDataAmazon() {
    try {
        const response = await axios.get('https://zillow56.p.rapidapi.com/search', {
            params: {
              location: 'houston, tx'
            },
            headers: {
                'X-RapidAPI-Key': rapidKey,
                'X-RapidAPI-Host': rapidHost,
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export {
    getDataAmazon,
}