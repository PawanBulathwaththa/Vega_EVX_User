package com.example.vega.login.service;

import com.example.vega.login.entity.CarModel;
import com.example.vega.login.repository.CarModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarModelService {

    @Autowired
    private CarModelRepository carModelRepository;

    // Add a new car model
    public CarModel addCarModel(CarModel carModel) {
        return carModelRepository.save(carModel);
    }

    // Fetch all car models
    public List<CarModel> getAllCarModels() {
        return carModelRepository.findAll();
    }
}
