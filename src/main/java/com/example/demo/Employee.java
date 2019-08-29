package com.example.demo;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;
@Entity
public class Employee{
    private @Id @GeneratedValue long id;
    private String name;
    private String description;
    public Employee(String name,String description){
        super();
        this.name=name;
        this.description=description;
    }

    public Employee(){

    }



    @Override
    public boolean equals(Object o){
       if(this==o) {return true;}
       else if(o==null || getClass()!=o.getClass()) {return false;}
       else{
           Employee employee = (Employee) o;
         return  Objects.equals(id, employee.id) &&
			Objects.equals(name, employee.name) &&
			Objects.equals(description, employee.description);
       }
    }

    @Override
    public String toString(){
        return "Employee{" +
			"id=" + id +", description='" + description + '\'' +", name='" + name + '\''  +'}';
    }
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}