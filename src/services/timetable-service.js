import { getAxios } from "../cfg/http-config";
// import moment from "moment";
import moment from "moment";


const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
const shameUrl = 'http://3.124.8.117/studyit/api/v1'


class TimetableService{

    constructor(){
        this.axios = getAxios();
    }

    async fetchTimetable(){
        

        
        let meInfo = await this.fetchMeInfo();
        const groupInfo = meInfo.group.split('/')
        let group = groupInfo[0] + "/" + groupInfo[1];
    
        // let getUrl = `/timetable`;
        // getUrl += `?group=${group}`;
        let getUrl = '/timetable/student/me'
    
        const timetable = await this.axios.get(getUrl);
        console.log("Timetable", timetable)
        
        return this.mapTimetableData(timetable);
        
    }

    async fetchMeInfo(){
        const resp = await this.axios.get(`/users/student/me`)
        console.log("MeInfo", resp['data'])
        return resp.data
    }

    mapTimetableData(response){
        const eventsMapper = {'MONDAY' : [], 'TUESDAY': [], 'WEDNESDAY': [], 'THURSDAY': [], 'FRIDAY': [], 'SATURDAY': []};
        response['data'].forEach(event => {
            event.type = event.classType;
            event.name = event.type + " " +  event.subjectDto.name;
            event.startTime = moment("2018-02-23T" + event.startTime);
            event.endTime = moment("2018-02-23T" + event.endTime);
            const day = event.day;
            if (eventsMapper[day]){
                eventsMapper[day].push(event);
            }
            else{
                eventsMapper[day] = [event];
            }
        });
        
        return eventsMapper;
    }

}

export const timetableService = new TimetableService();