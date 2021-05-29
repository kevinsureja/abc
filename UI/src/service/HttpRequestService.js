import axios from 'axios';
import {showErrorMessages} from '../components/common/commonfunction';

class HttpRequest {
    configHeader = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    static GET(url){
        return new Promise((resolve, reject)=>{
            axios.get(`${process.env.REACT_APP_API_URL}${url}`,this.configHeader).then(res=>{
                resolve(res.data)
            },error =>{
                showErrorMessages(error.response.data.error);
                reject(error.data);
            })
        })
    }
    static POST(url, data){
        return new Promise((resolve, reject)=>{
            axios.post(`${process.env.REACT_APP_API_URL}${url}`,data, this.configHeader).then(res=>{
                resolve(res.data)
            },error =>{
                showErrorMessages(error.response.data.error);
                reject(error.response);
            })
        })
    }
    static DELETE(url){
        return new Promise((resolve, reject)=>{
            axios.delete(`${process.env.REACT_APP_API_URL}${url}`,this.configHeader).then(res=>{
                resolve(res.data)
            },error =>{
                showErrorMessages(error.response.data.error);
                reject(error.response);
            })
        })
    }
}
export default HttpRequest;