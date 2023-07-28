import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_VbPYyDKeBRqrWQi2YvbxGPd4ho6kLR430xBL0o3NFcwgjFhxcsSQytmYLg0ysLG3";

export function fetchBreeds(baseUrl) {
    return axios.get(baseUrl)
        .then(res => {
        return res.data;
    })
}

// export function fetchCatByBreed(breedId) {
//     return axios.get(breedId)
//         .then(res => {
//             return res.data;
//         })
// }
