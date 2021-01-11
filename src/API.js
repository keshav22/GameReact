import axios from "axios";
const API = {
    GetOpenAPIData: async function (payload) {
        try {
            return await axios({
                method: "get",
                url: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json",
                headers: {"Content-Type": "application/json"}
              }).then(data => {
                return data;
            });
        } catch (error) {
            throw error;
        }
    }
}
export default API;  