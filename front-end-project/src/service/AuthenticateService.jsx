import axios from "axios";

const BaseUrl= "http://localhost:9696/user";

class AuthenticateService  {
    
    loginRequest(loginRequest){
        return axios.post(`${BaseUrl}/login`,loginRequest);
    }
    
}
export default new AuthenticateService()
