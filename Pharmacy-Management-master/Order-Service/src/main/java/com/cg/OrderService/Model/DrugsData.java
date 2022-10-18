package com.cg.OrderService.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

//@Entity
//@Table(name = "Drugs_Data")

@AllArgsConstructor
@NoArgsConstructor
@Data
//@Document(collection = "DrugsData")
public class DrugsData {

//    @Transient
//    public static final String SEQUENCE_NAME="user-sequence";
//
////    @Id
// //   @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int drugId;

    //    @Column(name = "Drug_Name")
    private String drugName;

    //  @Column(name = "Drug_Price")
    private double drugPrice;

    // @Column(name = "Drug_Quantity")
    private int drugQuantity;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    //  @Column(name = "Exp_Date")
    private LocalDate expiryDate;

}