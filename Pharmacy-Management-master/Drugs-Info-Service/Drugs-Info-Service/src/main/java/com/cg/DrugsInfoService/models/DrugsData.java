package com.cg.DrugsInfoService.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

//import javax.persistence.*;
import java.time.LocalDate;

//@Entity
//@Table(name = "Drugs_Data")

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "DrugsData")
public class DrugsData {

    @Transient
    public static final String SEQUENCE_NAME="user-sequence";

    @Id

    private int drugId;

    private String drugName;

    private double drugPrice;

    private int drugQuantity;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")

    private LocalDate expiryDate;

}
