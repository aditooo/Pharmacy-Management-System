package com.cg.OrderService.Service;


import com.cg.OrderService.Model.DbSequence;
//import com.cg.UserService.Models.DbSequence;
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

        //Checking the query for the dBSeq class
        Query query = new Query(Criteria.where("id").is(sequenceName));
        // Updating acc to the query
        Update update= new Update().inc("seq",1);
        // Incrementing the counter in DbSequence class
        DbSequence counter = mongoOperations.
                findAndModify(query,update,options().returnNew(true).upsert(true),
                        DbSequence.class);
        //Checking whether the counter is 0 or not and then increasing.
        return  !Objects.isNull(counter) ? counter.getSeq() : 1;
    }
}