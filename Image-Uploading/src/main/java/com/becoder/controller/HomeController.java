package com.becoder.controller;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model; 
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.becoder.model.Images;
import com.becoder.repository.uploadRepository;

import jakarta.servlet.http.HttpSession;

@Controller
public class HomeController{

    @Autowired
    private uploadRepository uploadRepo;
   

    @GetMapping("/")
    public String index(Model model) { // Changed parameter type to Model
        List<Images> list = uploadRepo.findAll(); // Changed to use List instead of Hibernate List
        model.addAttribute("list", list);
        return "index";
    }

    
    @PostMapping("/imageUpload")
    public String imageUpload(@RequestParam("img") MultipartFile img, HttpSession session) {
        Images im = new Images();
        im.setImageName(img.getOriginalFilename());
        Images uploadImg = uploadRepo.save(im);
        if (uploadImg != null) {
            try {
                // Get the directory path using ClassPathResource
                File saveDir = new ClassPathResource("static/img").getFile();
                Path path = Paths.get(saveDir.getAbsolutePath() + File.separator + img.getOriginalFilename());
                // Copy the content of the uploaded file to the specified location
                Files.copy(img.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
                session.setAttribute("msg", "Uploaded successfully");
            } catch (Exception e) {
                e.printStackTrace();
                session.setAttribute("msg", "Error occurred while uploading");
            }
        }
        return "redirect:/";
    }
}
