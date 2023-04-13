package com.example.demo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Getter
@Setter
@ToString
@Document(collection = "hum_temp")
public class HumTemp {

    @Id
    private String id;
    @Field("temp")
    private String temperature;
    private String date;
    private String heure;

}