import { getAxios } from "../cfg/http-config";

class NewsService{
    constructor() {
        this.axios = getAxios();
    }
    async createNews(title,content,datetime,subjectId){
        const result=await this.axios.post('/news',{
            // category:category,
            title:title,
            content:content,
            datetime:datetime,
            subjectId:subjectId,
            
        })
        return result;

    }
    
    async getNews(){
        const result=await this.axios.get('/news',{
            
        })
        return result;
        
    }
    async getSubjects(){
        try {
            return await this.axios.get('http://3.124.8.117/studyit/api/v1/subjects');
          } catch (error) {
            console.error(error);
        }

    }
}

const newsService = new NewsService()
export default newsService; 


