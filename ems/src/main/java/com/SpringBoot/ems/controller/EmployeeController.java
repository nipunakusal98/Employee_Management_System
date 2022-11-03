package com.SpringBoot.ems.controller;

import com.SpringBoot.ems.exception.ResourceNotFoundException;
import com.SpringBoot.ems.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.SpringBoot.ems.repository.EmployeeRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    //get all employees

    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){

        return employeeRepository.findAll();
    }

    //create employee rest API
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }
    //get employee by id rest api
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id){
        Employee employee =employeeRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("Employee does not exist: "+id));
        return ResponseEntity.ok(employee);

    }

    //update Employee Rest API
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employeeDetails){
        Employee employee =employeeRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("Employee does not exist: "+id));
        employee.setFirst_name(employeeDetails.getFirst_name());
        employee.setLast_name(employeeDetails.getLast_lame());
        employee.setDate_of_birth(employeeDetails.getDate_of_birth());
        employee.setSalary(employeeDetails.getSalary());

        Employee updatedEmployee= employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);

    }
}
