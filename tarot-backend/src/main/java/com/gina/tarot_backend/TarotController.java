package com.gina.tarot_backend;

import org.springframework.web.bind.annotation.RestController;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TarotController {

    private final TarotService tarotService;

    public TarotController(TarotService tarotService) {
        this.tarotService = tarotService;
    }

    @PostMapping("/reading")
    public TarotCard reading() {
        return tarotService.drawCard();
    }
    
}
