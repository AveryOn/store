import axios from 'axios';

// PRODUCTS
async function getProducts(page?: number) {
    try {
        const response = await axios.get('https://world.openfoodfacts.org/api/v2/search', {
            params: {
                page,
                page_size: 10,
                tagtype_O: 'categoties',
                tag_0: 'frozen-foods'
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export {
    getProducts,
}