import axios from 'axios';

//const DRUG_API_BASE_URL = "http://localhost:8082/";
const ORDER_API_BASE_URL_1 = "http://localhost:8086/api/";
/*const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  }*/

class OrderService {    

    
    getAllOrders(){
        return axios.get(ORDER_API_BASE_URL_1 + 'order/');
    }
    saveOrder(order){
        return axios.post(ORDER_API_BASE_URL_1 + 'order/save', order);
    }
    deleteOrder(orderId){
        return axios.delete(ORDER_API_BASE_URL_1 + 'order/delete/' + orderId);
    }
    getOrderbyId(id){
        return axios.get(ORDER_API_BASE_URL_1 + 'order/'+id);
    }
    
    
}

export default new OrderService()