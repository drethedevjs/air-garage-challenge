import Axios from 'axios'

export const axios = Axios.create({
    baseUrl: "https://api.yelp.com/v3/businesses/search",
    headers: {
        Authorization: "Bearer mi5qSSqdhmrNXBjLq5MBMwuqcS0q8aE4u52fwqrG8CkrBjjksgdV8ZblHdh4ThtDqQVFapfOwrCqadcTH4sJIMhQgEcWpc0bK_9ms_rJ1H"
    }
})
