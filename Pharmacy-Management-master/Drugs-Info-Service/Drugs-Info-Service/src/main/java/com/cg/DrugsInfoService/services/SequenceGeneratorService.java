package com.cg.DrugsInfoService.services;

import com.cg.DrugsInfoService.models.DbSequence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.Objects;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;

@Service
public class SequenceGeneratorService {

    @Autowired
    MongoOperations mongoOperations;

    public int getSequenceNumber(String sequenceName){

        //Get the sequence no.
        Query query = new Query(Criteria.where("id").is(sequenceName));
        // update the sequence no.
        Update update= new Update().inc("seq",1);
        // Incrementing the counter in DbSequence class
        DbSequence counter = mongoOperations.
                findAndModify(query,update,options().returnNew(true).upsert(true),
                        DbSequence.class);
        //Checking whether the counter is 0 or not and then increasing.
        return  !Objects.isNull(counter) ? counter.getSeq() : 1;
    }
}
