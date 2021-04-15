package com.example.emtlab2.service.impl;

import com.example.emtlab2.model.Country;
import com.example.emtlab2.repository.CountryRepository;
import com.example.emtlab2.service.CountryService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public List<Country> findAll() {
        return this.countryRepository.findAll();
    }
}
