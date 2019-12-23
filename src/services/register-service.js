import { getAxios } from "../cfg/http-config";

class RegisterService{
    constructor() {
        this.axios = getAxios();
    }

    async getDepartments() {
        const url = 'http://ec2-3-124-8-117.eu-central-1.compute.amazonaws.com/studyit/api/v1/departments?clientId=studyit-35c2-11e9-b210-d663bd873d93';
        const result = await this.axios.get(url)
            .then(response => {
                const res = {
                    data: response.data,
                    status: response.status
                }
                return res;
            })
            .catch(error => {
                const res = {
                    data: error.response.data,
                    status: error.response.status
                }
            })
        return result;
    }

    async getGroups(department) {
        const url = 'http://ec2-3-124-8-117.eu-central-1.compute.amazonaws.com/studyit/api/v1/departments/' + department + '/groups?clientId=studyit-35c2-11e9-b210-d663bd873d93';
        const result = await this.axios.get(url)
            .then(response => {
                const res = {
                    data: response.data,
                    status: response.status
                }
                return res;
            })
            .catch(error => {
                const res = {
                    data: error.response.data,
                    status: error.response.status
                }
            })
        return result;
    }

    async registerStudent(firstName, lastName, email, password, group) {
        // const url = 'http://ec2-3-124-8-117.eu-central-1.compute.amazonaws.com/studyit/api/v1/users/student?clientId=studyit-35c2-11e9-b210-d663bd873d93';
        // const requestBody = {
        //     email: email,
        //     firstName: firstName,
        //     group: group,
        //     lastName: lastName,
        //     password: password,
        // };
        // console.log(requestBody);
        // const result = await this.axios.post(url, requestBody)
        // .then(response => {
        //     console.log(response)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
        // console.log(result);
        // // return result;
        console.log("to be fixed");
    }

}

const registerService = new RegisterService()
export default registerService; 