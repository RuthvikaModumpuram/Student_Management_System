package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
	@Autowired
	private StudentDao stdDao;
	public Student addStd(Student std) {
		return stdDao.save(std);
	}
	
	public Student getStudentById(int id) {
		Optional<Student> std = stdDao.findById(id);
		return std.orElse(null);
	}
	public Student updateStd(Student std) {
		return stdDao.save(std);
	}
	public List<Student> getAllStudents(){
		return stdDao.findAll();
	}
	public void deleteStudentById(int id) {
		stdDao.deleteById(id);
	}

}
