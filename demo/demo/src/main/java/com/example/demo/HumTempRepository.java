package com.example.demo;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface HumTempRepository extends MongoRepository<HumTemp,String> {

    List<HumTemp> findAll();



}
