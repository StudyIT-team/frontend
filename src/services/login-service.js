import { getAxios } from "../cfg/http-config";


class LoginService{

    constructor(){
        this.axios = getAxios();
    }

    async loginUser(username, password, isTeacher){
        console.log('logging user', username, password, isTeacher)
        const res =  await this.axios.post('/login',{
         
                username: username, 
                password: password,
                isTeacher: isTeacher ? "1" : "0"
            
        })
        // .then(resp => resp.json())
        .then(resp => {
            localStorage.setItem("loginToken", resp['token']);
            localStorage.setItem("username", username);
            isTeacher ? localStorage.setItem("userType", "prof") : localStorage.setItem("userType", "student");   
            return true;
        })
        .catch( error => {
            return false;
        });
        console.log(res)
        return res;

        
    }
    
}

const loginService = new LoginService();
export default loginService;
