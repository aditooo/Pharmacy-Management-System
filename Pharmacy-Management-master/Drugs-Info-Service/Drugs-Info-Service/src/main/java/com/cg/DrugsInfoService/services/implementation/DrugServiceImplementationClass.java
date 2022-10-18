package com.cg.DrugsInfoService.services.implementation;

import com.cg.DrugsInfoService.models.DrugsData;
import com.cg.DrugsInfoService.repository.DrugsRepository;
import com.cg.DrugsInfoService.services.DrugService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class DrugServiceImplementationClass implements DrugService {

    @Autowired
    DrugsRepository drugsRepository;

    @Override
    public Optional<DrugsData> getDrugsDataByDrugName(String drugName) {
        return drugsRepository.getDrugsDataByDrugName(drugName);
    }

    @Override
    public DrugsData saveDrugsData(DrugsData drugsData) {
        return drugsRepository.save(drugsData);
    }

    @Override
    public List<DrugsData> getAllDrugsData() {
        return drugsRepository.findAll();
    }

    @Override
    public Optional<DrugsData> findDrugsById(int drugId) {
        return drugsRepository.findById(drugId);
    }

    @Override
    public DrugsData
    updateDrugsData(DrugsData drugsData,
                    int drugId) {

        DrugsData dgDB
                = drugsRepository.findById(drugId)
                .get();

        if (Objects.nonNull(drugsData.getDrugName())
                && !"".equalsIgnoreCase(
                drugsData.getDrugName())) {
            dgDB.setDrugName(
                    drugsData.getDrugName());
        }

        if(Objects.nonNull(drugsData.getDrugPrice())
                && !"".equalsIgnoreCase(
                        String.valueOf(drugsData.getDrugPrice()))) {
            dgDB.setDrugPrice(
                    drugsData.getDrugPrice()
            );
        }
        return  drugsRepository.save(dgDB);
    }

    @Override
    public void deleteDrugsData(int drugId) {
        drugsRepository.deleteById(drugId);

    }
}
