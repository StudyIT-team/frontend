import { getAxios } from "../cfg/http-config";


class SubjectsService{

    constructor() {
        this.axios = getAxios();
    }
    
    async getSubjects() {
        try {
            return await this.axios.get('/enrollments/me');
          } catch (error) {
            console.error(error);
        }
    }

}
export default new SubjectsService;