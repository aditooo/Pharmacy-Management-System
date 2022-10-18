package com.cg.UserService.Repository;

import com.cg.UserService.Models.DoctorsData;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DoctorRepository extends MongoRepository<DoctorsData,Integer> {

   // Optional<DoctorsData> getDoctorsDataByEmail(String email);

   // DoctorsData getDoctorsDataByEmail(String email);
   Optional<DoctorsData> getDoctorsDataByEmail(String email);


}
