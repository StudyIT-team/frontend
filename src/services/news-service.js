import { getAxios } from "../cfg/http-config";

class NewsService{
    constructor() {
        this.axios = getAxios();
    }
    async createNews(title,content){
        const result=await this.axios.post('/teacher-news',{
            // category:category,
            title:title,
            content:content
            
        })
    }
    
    async getNews(){
        const result=await this.axios.get('/news',{
            
        })
        return result;
        
    }
}

const newsService = new NewsService()
export default newsService; 