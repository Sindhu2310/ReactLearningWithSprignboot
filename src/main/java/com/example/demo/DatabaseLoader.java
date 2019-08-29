package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner{

   private final EmployeeRepository repository;

   @Autowired
   public DatabaseLoader(EmployeeRepository repo){
       this.repository=repo;
   }
   @Override
	public void run(String... strings) {
        System.out.println("Adding Object ");
        try{
		this.repository.save(new Employee("Frodo",  "ring bearer"));
        }catch(Exception e){
            System.out.println(e.getMessage());
        }
	}



}