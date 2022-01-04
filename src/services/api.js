import axios from 'axios'
const api = axios.create({
    baseURL:"https://gist.githubusercontent.com/robertosousa1/693fafb14e682573ae1a046b6ae6c12d/raw/fd1128e20f6787443db55183b1475e7e157abfcb/server-dio.json",
})

export default api