import axios from 'axios';

//const DRUG_API_BASE_URL = "http://localhost:8082/";
//base rest api url
const DRUG_API_BASE_URL_1 = "http://localhost:8081/api/";


class DrugService {

    getAllDrugs(){
        return axios.get(DRUG_API_BASE_URL_1 + 'drugs');
    }

    saveDrugs(drugs){
        return axios.post(DRUG_API_BASE_URL_1 + 'drugs/save', drugs);
    }
    
    getDrugById(drugId){
        return axios.get(DRUG_API_BASE_URL_1 + 'drugs/' + drugId);
    }
    getDrugByName(drugName){
        return axios.get(DRUG_API_BASE_URL_1 + 'drugs/drugsname/' + drugName);
    }

    updateDrugs(drugs, drugId){
        return axios.put(DRUG_API_BASE_URL_1 + 'drugs/update/' + drugId, drugs);
    }

    
    deleteDrugs(drugId){
        return axios.delete(DRUG_API_BASE_URL_1 + 'drugs/delete/' + drugId);
    }
}
//Exporting object of Drug Service class to be used inside component
export default new DrugService()