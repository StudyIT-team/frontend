import { getAxios } from "../cfg/http-config";

class RegisterService{
    constructor() {
        this.axios = getAxios();
    }

    async registerUser(firstName, lastName, email, role, group) {
        const result = await this.axios.post('/register', {
            email: email,
            firstName: firstName,
            lastName: lastName,
            group: group,
            role: role
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

    async getDepartments() {
        const result = await this.axios.get('/departments', {

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

    async getGroups(department) {
        const result = await this.axios.get('/groups', {
            params: {
                department: department
            }
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