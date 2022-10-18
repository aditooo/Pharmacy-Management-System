package com.cg.UserService.Service;

import com.cg.UserService.Models.DoctorsData;

import java.util.List;
import java.util.Optional;

public interface DoctorDataService {

    public List<DoctorsData> getAllDoctors();

    public Optional<DoctorsData> getDoctorsById(int id);

    public DoctorsData saveDoctorsData(DoctorsData doctorsData);

    DoctorsData updateDoctorsData(DoctorsData doctorsData, int doctorId);

    DoctorsData updateDoctorsData(DoctorsData doctorsData, String email);

   public Optional<DoctorsData> getDoctorsDataByEmail(String email);

   // public DoctorsData getDoctorsDataByEmail(String email);

    public String deleteDoctorsData(int doctorId);


}
