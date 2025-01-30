package com.example.vega.login.controller;

import com.example.vega.login.entity.CarModel;
import com.example.vega.login.service.CarModelService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/api/cars")
public class CarModelController {

    private final CarModelService carModelService;

    @Value("${upload.path}")
    private String uploadPath; // Specify the upload directory in application.properties

    public CarModelController(CarModelService carModelService) {
        this.carModelService = carModelService;
    }

    @PostMapping
    public CarModel addCarModel(
            @RequestParam("name") String name,
            @RequestParam("price") double price,
            @RequestParam("video") MultipartFile videoFile
    ) throws IOException {
        // Save the video file to the upload directory
        String videoFileName = System.currentTimeMillis() + "_" + videoFile.getOriginalFilename();
        File destinationFile = new File(uploadPath + videoFileName);
        videoFile.transferTo(destinationFile);

        // Save the car model with the video path
        return carModelService.addCarModel(name, price, "/videos/" + videoFileName);
    }
}
