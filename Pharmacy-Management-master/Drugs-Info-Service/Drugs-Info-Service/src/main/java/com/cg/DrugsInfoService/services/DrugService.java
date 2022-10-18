package com.cg.DrugsInfoService.services;

import com.cg.DrugsInfoService.models.DrugsData;

import java.util.List;
import java.util.Optional;

public interface DrugService {
    DrugsData saveDrugsData(DrugsData drugsData);
    public List<DrugsData> getAllDrugsData();
    public Optional<DrugsData> findDrugsById(int drugId);

    public Optional<DrugsData> getDrugsDataByDrugName(String drugName);

    DrugsData updateDrugsData(DrugsData drugsData, int drugId);


    void deleteDrugsData(int drugId);
}
