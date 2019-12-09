import { getAxios } from "../cfg/http-config";


class SubjectsService{

    constructor(){
        this.axios = getAxios();
    }

    async subjects(year, semester){
        const res =  await this.axios.post('/subjects',{
         
                year: year, 
                semester: semester,
            
        })
        // .then(resp => resp.json())
        .then(resp => {
            localStorage.setItem("year", year);
            localStorage.setItem("semester", semester);
            return true;
        })
        .catch( error => {
            return false;
        });
        console.log(res)
        return res;

        
    }
}

const SubjectsService = new SubjectsService();
export default SubjectsService;