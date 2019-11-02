import { getAxios } from "../cfg/http-config";


class LoginService{

    constructor(){
        this.axios = getAxios();
    }

    async loginUser(username, password, isTeacher){

        const res =  await this.axios.post('/api/login',{
            username: username, 
            password: password,
            isTeacher: isTeacher
        })
        .then(resp => resp.json())
        .then(resp => {
            localStorage.setItem("loginToken", resp);
            localStorage.setItem("username", username);
            isTeacher ? localStorage.setItem("userType", "prof") : localStorage.setItem("userType", "student");   
            return true;}
            )
        .catch( error => {
            return false;
        });
        return res;

        
    }
    
}

const loginService = new LoginService();
export default loginService;
