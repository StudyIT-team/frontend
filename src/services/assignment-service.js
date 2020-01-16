
import {getAxios} from '../cfg/http-config'

class AssignmentService{

    constructor(){
        this.axios = getAxios()
    }

    async getAssignments(subjectId, professorId){
     
        const getUrl = `/assignments?subjectId=${subjectId}`
        if(professorId != undefined){
            getUrl += `&&professorId=${professorId}`
        }
        const assignments = await this.axios.get(getUrl);
        return assignments['data']
    }

    async addAssign(content, deadline, subjectId, professorId){
        let postUrl = `/assignments?content=${content}&&deadline=${deadline}&&subjectId=${subjectId}&&professorId=${professorId}`
        await this.axios.post(postUrl);
    }
}

const assignmentService = new AssignmentService();
export default assignmentService;