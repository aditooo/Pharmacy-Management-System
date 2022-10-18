package com.cg.UserService.Controllers;


import com.cg.UserService.Exception.ResourceNotFoundException;
import com.cg.UserService.Models.DoctorsData;
//import com.cg.UserService.Models.DrugResource;
//import com.cg.UserService.Models.DrugsData;
import com.cg.UserService.Models.DrugsData;
import com.cg.UserService.Models.Order;
import com.cg.UserService.Security.Model.AuthenticationRequest;
import com.cg.UserService.Service.DoctorDataService;
import com.cg.UserService.Service.SequenceGeneratorService;
//import com.cg.UserService.Service.ServiceImplementation.ApiCall;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/doctors")
public class DoctorController {

    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    @Autowired
    RestTemplate restTemplate;


    @Autowired
    DoctorDataService doctorDataService;

    AuthenticationRequest authenticationRequest = new AuthenticationRequest();

    @PutMapping("/update/username/{email}")
    public ResponseEntity<DoctorsData> updateDoctorsData(@RequestBody DoctorsData doctorsData ,
                                                         @PathVariable("email") String email){
        DoctorsData updatedDoctorsData = doctorDataService.updateDoctorsData(doctorsData,email);
        return  ResponseEntity.ok(updatedDoctorsData);
    }


   @GetMapping("/username/{email}")
    public ResponseEntity<DoctorsData> getDoctorsDataByEmail(@PathVariable("email") String email) throws ResourceNotFoundException {

        Optional<DoctorsData> doctorsData = doctorDataService.getDoctorsDataByEmail(email);
        if (doctorsData.isEmpty()) {
            throw new ResourceNotFoundException("No Doctors found with email: " + email);
        }
        return ResponseEntity.ok(doctorsData.get());

    }

    //Fetching All Drugs from DrugInfo for Doctor
    @GetMapping("/drugs/all")
    public DrugsData[] getAllDrugs() throws ResourceNotFoundException{
        ResponseEntity<DrugsData[]> response =
                restTemplate.getForEntity("http://Drugs-Info-Service/drugs/", DrugsData[].class);
        DrugsData[] drugsData = response.getBody();
        return (drugsData);
    }

    //Fetching A Drug by name from DrugInfo for Doctor
    @GetMapping("/drugs/{drugsname}")
    public DrugsData getDrugsData(@PathVariable("drugsname")String drugsname) {

        return restTemplate.getForObject("http://Drugs-Info-Service/drugs/drugsname/" + drugsname, DrugsData.class);
    }

    //***********************Ordering Drugs*****************************



     @RequestMapping("/order")
    public ResponseEntity<String> placeOrder(@RequestBody Order order) throws ResourceNotFoundException {

         Order order1 =new Order(order.getId(), order.getCost(),order.getDate(),order.getQuantity(),
                 order.getDrugname(),order.getDoctorname(),order.getDoctoremail());
         String s = restTemplate.postForObject("http://Order-Info-Service/order/save", order1, String.class);
         String s1 = s+ authenticationRequest.getUsername();
         return ResponseEntity.ok(s);
    }
}


