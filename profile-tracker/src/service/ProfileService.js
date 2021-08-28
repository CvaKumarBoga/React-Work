import axios from "axios";

const BaseUrl= "http://localhost:2021/backend/profile";

class ProfileService {


    getAllProfile(){
        return axios.get(`${BaseUrl}/allprofiles`);
    }

    getProfile(id) {
        return axios.get(`${BaseUrl}/view/${id}`);
    }

    addProfile(profile) {
        return axios.post(`${BaseUrl}/create`,profile);
    }

    deleteProfie(id){
        return axios.delete(`${BaseUrl}/delete/${id}`);
    }
}
export default new ProfileService();