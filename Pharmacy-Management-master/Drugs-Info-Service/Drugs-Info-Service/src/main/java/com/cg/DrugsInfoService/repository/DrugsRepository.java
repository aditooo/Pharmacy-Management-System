package com.cg.DrugsInfoService.repository;

import com.cg.DrugsInfoService.models.DrugsData;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DrugsRepository extends MongoRepository<DrugsData,Integer> {

    Optional<DrugsData> getDrugsDataByDrugName(String drugName);
}
