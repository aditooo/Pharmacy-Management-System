package com.cg.DrugsInfoService.controllers;

import com.cg.DrugsInfoService.exception.ResourceNotFoundException;
import com.cg.DrugsInfoService.models.DrugsData;
import com.cg.DrugsInfoService.services.DrugService;
import com.cg.DrugsInfoService.services.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class DrugsController {

    @Autowired
    SequenceGeneratorService sequenceGeneratorService;
    @Autowired
    DrugService drugService;

    @GetMapping("/drugs")
    public ResponseEntity<List<DrugsData>> getAllDrugsData() throws ResourceNotFoundException {
        List<DrugsData> list = drugService.getAllDrugsData();
        if (list.isEmpty()) {
            throw new ResourceNotFoundException("There are no medicines present in the database!");
        }
        return ResponseEntity.ok(list);
    }

    @GetMapping("/drugs/{id}")
    public ResponseEntity<DrugsData> findDrugsById(@PathVariable("id") int drugId) throws ResourceNotFoundException {
        Optional<DrugsData> drugsDataOptional = drugService.findDrugsById(drugId);
        if (drugsDataOptional.isEmpty()) {
            throw new ResourceNotFoundException("No medicine found with id: " + drugId);
        }
        return ResponseEntity.ok(drugsDataOptional.get());
    }

    @GetMapping("/drugs/drugsname/{drugName}")
    public ResponseEntity<DrugsData> getDrugsDataByDrugName(@PathVariable("drugName") String drugName) throws ResourceNotFoundException {
        Optional<DrugsData> drugsDataOptional = drugService.getDrugsDataByDrugName(drugName);
        if (drugsDataOptional.isEmpty()) {
            throw new ResourceNotFoundException("No medicine found with name: " + drugName);
        }
        return ResponseEntity.ok(drugsDataOptional.get());
    }



    @PostMapping("/drugs/save")
    public ResponseEntity<DrugsData> saveDrugs(@RequestBody DrugsData drugsData) {

        drugsData.setDrugId(sequenceGeneratorService.getSequenceNumber(DrugsData.SEQUENCE_NAME));
        DrugsData savedDrugsData = drugService.saveDrugsData(drugsData);
        return ResponseEntity.ok(savedDrugsData);
    }

    //update function
    @PutMapping("/drugs/update/{id}")
    public ResponseEntity<DrugsData> updateDrugsData(@RequestBody DrugsData drugsData ,
                                                     @PathVariable("id") int drugId){
        DrugsData updatedDrugsData = drugService.updateDrugsData(drugsData,drugId);
        return  ResponseEntity.ok(updatedDrugsData);

    }

    @DeleteMapping("/drugs/delete/{id}")
    public void deleteDrugsData(@PathVariable("id") int drugId) throws ResourceNotFoundException
    {
        Optional<DrugsData> drugsData = drugService.findDrugsById(drugId);
        if(drugsData.isEmpty()) {
            throw new ResourceNotFoundException("No medicine found with id " + drugId);
        }
        drugService.deleteDrugsData(drugId);
    }

}
