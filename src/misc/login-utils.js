import { getAxios } from "../cfg/http-config";
import {User} from '../models/login/user';


export async function isAuth() {
    localStorage.setItem("loginToken", "test");
    const cookie = localStorage.getItem("loginToken");
    if(!cookie){
        return false;
    }
    const axios = getAxios();
    const user = await axios.get('/api/getUser');
    if(!user){
        localStorage.removeItem("loginToken");
        localStorage.removeItem("username");
        localStorage.removeItem("userType");
        return false;
    }

    return true;
}

export function getUser(){
    if (!isAuth()){
        return undefined;
    }
    const username = localStorage.getItem("username");
    const type = localStorage.getItem("userType");
    return new User(username, type);
}