import { getAxios } from "../cfg/http-config";

class RegisterService{
    constructor() {
        this.axios = getAxios();
    }

    async registerStudent(firstName, lastName, email, password, group) {
        const result = await this.axios.post('http://3.124.8.117/studyit/api/v1/students', {
            email: email,
            firstName: firstName,
            group: group,
            lastName: lastName,
            password: password,
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        console.log(result);
        return result;
    }

    async getDepartments() {
        try {
            return await this.axios.get('http://3.124.8.117/studyit/api/v1/departments');
          } catch (error) {
            console.error(error);
        }
    }

    async getGroups(department) {
        try {
            return await this.axios.get('http://3.124.8.117/studyit/api/v1/departments/' + department + '/groups');
        } catch (error) {
            console.error(error);
        }
    }
}

const registerService = new RegisterService()
export default registerService; 