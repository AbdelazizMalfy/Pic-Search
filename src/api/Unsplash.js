import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID 9605f495d0f1d574aefd1c09936827328d1e1522deafd4cc2ed64b56e4e42c26'
    } 
});