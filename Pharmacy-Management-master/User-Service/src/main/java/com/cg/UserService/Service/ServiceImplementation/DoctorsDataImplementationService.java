package com.cg.UserService.Service.ServiceImplementation;

import com.cg.UserService.Models.DoctorsData;
//import com.cg.UserService.Models.DrugsData;
import com.cg.UserService.Repository.DoctorRepository;
import com.cg.UserService.Service.DoctorDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class DoctorsDataImplementationService implements DoctorDataService {

    @Autowired
    DoctorRepository doctorRepository;

//    @Autowired
//    ApiCall apiCall;

    //DrugsData drugsData = apiCall.getDrugsData()


    @Override
    public List<DoctorsData> getAllDoctors() {
        return  doctorRepository.findAll();
    }

    @Override
    public Optional<DoctorsData> getDoctorsById(int id) {
        return doctorRepository.findById(id);
    }

    @Override
    public DoctorsData saveDoctorsData(DoctorsData doctorsData) {
        return  doctorRepository.save(doctorsData);
    }

    @Override
    public Optional<DoctorsData> getDoctorsDataByEmail(String email) {
        return doctorRepository.getDoctorsDataByEmail(email);
    }


//    @Override
//    public DoctorsData getDoctorsDataByEmail(String email) {
//        return doctorRepository.getDoctorsDataByEmail(email);
//    }

    @Override
    public DoctorsData updateDoctorsData(DoctorsData doctorsData, String email) {
        DoctorsData dgDB
                = doctorRepository.getDoctorsDataByEmail(email)
                .get();

        //name update
        if (Objects.nonNull(doctorsData.getName())
                && !"".equalsIgnoreCase(
                doctorsData.getName())) {
            dgDB.setName(
                    doctorsData.getName());
        }
        //update Phone No.
        if (Objects.nonNull(doctorsData.getPhNo())
                && !"".equalsIgnoreCase(
                String.valueOf(doctorsData.getPhNo()))) {
            dgDB.setPhNo(
                    doctorsData.getPhNo()
            );
        }
        //update Experience
//        if (Objects.nonNull(doctorsData.getExp())
//                && !"".equalsIgnoreCase(
//                String.valueOf(doctorsData.getExp()))) {
//            dgDB.setExp(
//                    doctorsData.getExp()
//            );
//        }
        return  doctorRepository.save(dgDB);
    }

    @Override
    public DoctorsData updateDoctorsData(DoctorsData doctorsData, int doctorId) {
        DoctorsData dgDB
                = doctorRepository.findById(doctorId)
                .get();

        //name update
        if (Objects.nonNull(doctorsData.getName())
                && !"".equalsIgnoreCase(
                doctorsData.getName())) {
            dgDB.setName(
                    doctorsData.getName());
        }
        //update Phone No.
        if(Objects.nonNull(doctorsData.getPhNo())
                && !"".equalsIgnoreCase(
                String.valueOf(doctorsData.getPhNo()))) {
            dgDB.setPhNo(
                    doctorsData.getPhNo()
            );
        }
//        //update Experience
//        if(Objects.nonNull(doctorsData.getExp())
//                && !"".equalsIgnoreCase(
//                String.valueOf(doctorsData.getExp()))) {
//            dgDB.setExp(
//                    doctorsData.getExp()
//            );
//        }
        return  doctorRepository.save(dgDB);
    }

    @Override
    public String deleteDoctorsData(int doctorId) {

        doctorRepository.deleteById(doctorId);
        //System.out.println("Deleted Doctor with id:"+doctorId);
        return "Successfully Deleted";
    }
}
