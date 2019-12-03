import { getAxios } from "../cfg/http-config";
import moment from "moment";


const defaultGroup = 931;
const defaultSemi = 1;


class TimetableService{

    constructor(){
        this.axios = getAxios();
    }

    async fetchTimetable(group, semigroup){
        
        let getUrl = "/timetable";
        if( group && semigroup){
            getUrl += `?group=${group}&&semigroup=${semigroup}`;
        }
        else{
            getUrl += `?group=${defaultGroup}&&semigroup=${defaultSemi}`;
        }
        const timetable = await this.axios.get(getUrl);
        
        return this.mapTimetableData(timetable);
        
    }

    mapTimetableData(response){
        const eventsMapper = {};
        response['data'].forEach(event => {
            event.type = event.classType;
            event.name = event.type + " " +  event.subject.name;
            event.startTime = moment("2018-02-23T" + event.startTime);
            event.endTime = moment("2018-02-23T" + event.endTime);
            const day = event.day.toLowerCase();
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