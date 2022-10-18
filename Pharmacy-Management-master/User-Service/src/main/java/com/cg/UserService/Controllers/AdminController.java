package com.cg.UserService.Controllers;

import com.cg.UserService.Exception.ResourceNotFoundException;
import com.cg.UserService.Models.DoctorsData;
import com.cg.UserService.Models.DrugsData;
import com.cg.UserService.Service.DoctorDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    DoctorDataService doctorDataService;

    @Autowired
    RestTemplate restTemplate;

    @GetMapping("/doctors/all")
    public ResponseEntity<List<DoctorsData>> getAllDoctors() throws ResourceNotFoundException {
        List<DoctorsData> list = doctorDataService.getAllDoctors();
        if (list.isEmpty()) {
            throw new ResourceNotFoundException("There are no Doctors present in the database!");
        }
        return ResponseEntity.ok(list);
    }
    @PutMapping("/doctors/update/{id}")
    public ResponseEntity<DoctorsData> updateDoctorsData(@RequestBody DoctorsData doctorsData ,
                                                         @PathVariable("id") int doctorId){
        DoctorsData updatedDoctorsData = doctorDataService.updateDoctorsData(doctorsData,doctorId);
        return  ResponseEntity.ok(updatedDoctorsData);
    }
    @DeleteMapping("/doctors/delete/{id}")
    public void deleteDoctorsData(@PathVariable("id") int doctorId) throws ResourceNotFoundException
    {
        Optional<DoctorsData> doctorsData = doctorDataService.getDoctorsById(doctorId);
        if(doctorsData.isEmpty()) {
            throw new ResourceNotFoundException("No Doctor found with id " + doctorId);
        }
        doctorDataService.deleteDoctorsData(doctorId);
    }

    //*******************************************Drugs******************************************************************

    //saving drugs by admin
    @PostMapping("/drugs/save")
    public ResponseEntity<DrugsData> saveDrugs(@RequestBody DrugsData drugsData) {


        DrugsData drugsData1 = new DrugsData(drugsData.getDrugId(),drugsData.getDrugName(), drugsData.getDrugPrice(), drugsData.getDrugQuantity(), drugsData.getExpiryDate());
        DrugsData response =
                restTemplate.postForObject("http://Drugs-Info-Service/drugs/save", drugsData1, DrugsData.class);
        return ResponseEntity.ok(response);

    }
    //deleting any drug by admin
    @DeleteMapping("/delete/{id}")
    public String deleteDrugsData(@PathVariable("id") int drugId) throws  Exception{

        if(drugId != 0){
            restTemplate.delete("http://Drugs-Info-Service/drugs/delete/" + drugId);
            return "Deleted Succesfully";
        }
        else {
            throw new Exception("No Id Found");
        }

    }

    //getting all the drug by admin
    @GetMapping("/drugs/all")
    public DrugsData[] getAllDrugs() throws ResourceNotFoundException{
        ResponseEntity<DrugsData[]> response =
                restTemplate.getForEntity("http://Drugs-Info-Service/drugs/", DrugsData[].class);
        DrugsData[] drugsData = response.getBody();
        return (drugsData);
    }

    //getting drugs by id for admin
    @GetMapping("/drugs/{id}")
    public DrugsData getDrugsbyId(@PathVariable("id") int drugId) throws ResourceNotFoundException{
       // ResponseEntity<DrugsData> response =
         return restTemplate.getForObject("http://Drugs-Info-Service/drugs/" +drugId, DrugsData.class);
        //DrugsData drugsData = response.getBody();
        //return (drugsData);
    }


    //updating any drug data by admin
    @PutMapping("/drugs/update/{id}")
    public DrugsData updateDrugsData(@RequestBody DrugsData drugsData,
                                     @PathVariable("id") int drugId) {
        RequestEntity<DrugsData> request = RequestEntity
                .put("http://Drugs-Info-Service/drugs/update/"+drugId)
                .accept(MediaType.APPLICATION_JSON)
                .body(drugsData);
        ResponseEntity<DrugsData> response = restTemplate.exchange(request,DrugsData.class);
        DrugsData drugsData1=response.getBody();
        return drugsData1;
    }



    



}
