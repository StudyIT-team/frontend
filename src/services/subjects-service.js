import { getAxios } from "../cfg/http-config";


class SubjectsService{

    constructor() {
        this.axios = getAxios();
    }

    async subjects(semester){
        const res =  await this.axios.post('http://3.124.8.117/studyit/api/v1/subjects',{
            semester:semester
        })
        .then(resp => {
            // localStorage.setItem("year", year);
            localStorage.setItem("semester", semester);
            return true;
            console.log(res);
        })
        .catch( error => {
            console.log(error);
        });
        console.log(res)
        return res;        
    }
    async getSubjects(semester) {
        try {
            return await this.axios.get('http://3.124.8.117/studyit/api/v1/subjects',{
                semester:semester
            });
          } catch (error) {
            console.error(error);
        }
    }

}
export default SubjectsService;