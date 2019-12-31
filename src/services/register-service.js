import { getAxios } from "../cfg/http-config";

class RegisterService{
    constructor() {
        this.axios = getAxios();
    }

    async getDepartments() {
        const url = 'http://ec2-3-124-8-117.eu-central-1.compute.amazonaws.com/studyit/api/v1/departments?clientId=studyit-35c2-11e9-b210-d663bd873d93';
        const result = await this.axios.get(url)
            .then(response => {
                console.log("works");
                console.log(response);
            })
            .catch(error => {
                console.log("not works");
                console.log(error);
            })
    }

    async getGroups(department) {
        const url = 'http://ec2-3-124-8-117.eu-central-1.compute.amazonaws.com/studyit/api/v1/departments/' + department + '/groups?clientId=studyit-35c2-11e9-b210-d663bd873d93';
        const result = await this.axios.get(url)
            .then(response => {
                console.log("works");
                console.log(response);
            })
            .catch(error => {
                console.log("not works");
                console.log(error);
            })
    }

    // async registerStudent(firstName, lastName, email, password, group) {
    //     const result = await this.axios.post('http://ec2-3-124-8-117.eu-central-1.compute.amazonaws.com/studyit/api/v1/departments?clientId=studyit-35c2-11e9-b210-d663bd873d93', {
    //         email: email,
    //         firstName: firstName,
    //         group: group,
    //         lastName: lastName,
    //         password: password,
    //     })
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    //     console.log(result);
    //     return result;
    // }

}

const registerService = new RegisterService()
export default registerService; 