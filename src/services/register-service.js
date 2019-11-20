import { getAxios } from "../cfg/http-config";

class RegisterService{
    constructor() {
        this.axios = getAxios();
    }

    async registerUser(firstName, lastName, username, password, isTeacher) {
        const result = await this.axios.post('/register', {
            firstName: firstName, 
            lastName: lastName, 
            username: username,
            password: password,
            isTeacher: isTeacher
        })
        .then(resp => {
            return true;
        })
        .catch(error => {
            return false;
        })
        console.log(result);
        return result;
    }
}

const registerService = new RegisterService()
export default registerService; 