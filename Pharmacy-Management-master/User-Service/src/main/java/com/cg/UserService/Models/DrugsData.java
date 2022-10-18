package com.cg.UserService.Models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
//@Document("DrugsData")
public class DrugsData {
//    @Transient
//    public static  final String SEQUENCE_NAME="user_sequence";

//   @Id
    private int drugId;


    private String drugName;


    private double drugPrice;


    private int drugQuantity;

    @JsonFormat(pattern = "dd/MM/yyyy")
    @DateTimeFormat(pattern = "dd/MM/yyyy")

    private LocalDate expiryDate;

}