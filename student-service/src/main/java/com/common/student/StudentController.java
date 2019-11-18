package com.common.student;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.opencsv.CSVWriter;
import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@RestController
public class StudentController {

	@Autowired
	StudentRepository repository;

	@ApiOperation(value = "save student", notes = "save student")
	@ApiParam(name = "student", value = "student to save", required = true)
	@PostMapping()
	public ResponseEntity<Student> create(@RequestBody Student entity) {
		entity = repository.save(entity);
		return new ResponseEntity<Student>(entity, HttpStatus.CREATED);
	}

	@GetMapping("/exportCSV")
	public void exportCSV(HttpServletResponse response) throws Exception {

		//set file name and content type
		String filename = "users.csv";

		response.setContentType("text/csv");
		response.setHeader(HttpHeaders.CONTENT_DISPOSITION,
				"attachment; filename=\"" + filename + "\"");

		//create a csv writer
		StatefulBeanToCsv<Student> writer = new StatefulBeanToCsvBuilder<Student>(response.getWriter())
				.withQuotechar(CSVWriter.NO_QUOTE_CHARACTER)
				.withSeparator(CSVWriter.DEFAULT_SEPARATOR)
				.withOrderedResults(false)
				.build();

		//write all users to csv file
		writer.write(repository.findAll());

	}


}
