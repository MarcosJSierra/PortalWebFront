import axios from "axios";

const baseApiURL = "localhost:8080/api/portal/";

async function request(httpCall){
    const response = await httpCall();
    return response.data;
}

const all = (fuente) => request(() => axios.get(baseApiURL + fuente));

export default {
    all
}
