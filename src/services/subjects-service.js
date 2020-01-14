import { getAxios } from "../cfg/http-config";


class SubjectsService{

    constructor() {
        this.axios = getAxios();
    }
    
    async getSubjects() {
        try {
             
            const enrolls = await this.axios.get('/students/enrollments');
            return enrolls['data'];
          } catch (error) {
            console.error(error);
        }
    }

    async enrollAfterRegister(){
        return await this.axios.post('/enrollments/me')
    }
    async enrollAtSubject(subjectId){
        const enrollments = await this.axios.post('/students/enroll?subjects=' + subjectId);
        return enrollments['data'];
    }

    async getOptionalSubjects(optionalNames){
        const optionalList = [];
        for(let optional of optionalNames){
            let optionalSubj = await this.axios.get('/subjects?startsWith=' + optional)
            if(!optionalSubj['data'][0]){
                continue
            }
            optionalSubj = optionalSubj['data'][0];
            optionalSubj['category'] = optionalSubj['name'];
            optionalList.push(optionalSubj);
        }
        return optionalList;
    }
    async deleteOptionalSubscription(optionalSubscriptionId){
        return await this.axios.delete('/students/enrollments/' + optionalSubscriptionId);
    }

}
export default new SubjectsService;