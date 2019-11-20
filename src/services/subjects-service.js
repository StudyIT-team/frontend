import { getAxios } from "../cfg/http-config";


class SubjectsService{

    constructor(){
        this.axios = getAxios();
    }
}

const SubjectsService = new SubjectsService();
export default SubjectsService;