package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import com.example.demo.EmployeeRepository;

public class DatabaseLoader implements CommandLineRunner{

   private final EmployeeRepository repository;

   @Autowired
   public DatabaseLoader(EmployeeRepository repo){
       this.repository=repo;
   }
   @Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Employee("Frodo",  "ring bearer"));
	}


}