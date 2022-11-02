package com.SpringBoot.ems.model;

import javax.persistence.*;

@Entity
@Table(name = "employees")

public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    //@Column(name = "id")


    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_name")
    private String last_name;

    @Column(name = "date_of_birth")
    private String date_of_birth;
    @Column(name="salary")
    private double salary;

    public Employee(){

    }

    public Employee(String first_name, String last_name, String date_of_birth, double salary){
        super();
        this.first_name=first_name;
        this.last_name=last_name;
        this.date_of_birth=date_of_birth;
        this.salary=salary;
    }


    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id =id;
    }

    public String getFirst_name(){
        return first_name;
    }

    public void setFirst_name(String first_name){
        this.first_name=first_name;
    }

    public String getLast_lame(){
        return last_name;
    }

    public void setLast_name(String last_name){
        this.last_name=last_name;
    }

    public String getDate_of_birth(){
        return date_of_birth;
    }
    public void setDate_of_birth(String date_of_birth){
        this.date_of_birth=date_of_birth;
    }

    public double getSalary(){
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }
}
