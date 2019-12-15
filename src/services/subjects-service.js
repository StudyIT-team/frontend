import { getAxios } from "../cfg/http-config";


class SubjectsService{

    constructor() {
        this.axios = getAxios();
    }
    
    async getSubjects() {
        try {
            return await this.axios.get('http://3.124.8.117/studyit/api/v1/enrollments/me');
          } catch (error) {
            console.error(error);
        }
    }

}
export default new SubjectsService;