package fullStackProject.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fullStackProject.exception.ResourceNotFoundException;
import fullStackProject.model.Library;
import fullStackProject.repository.LibraryRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
/*@ResponseBody-tells a controller that the object returned is automatically 
 * serialized into JSON and passed back into the HttpResponse object.
 * @Controller->The dispatcher will scan such annotated classes for mapped methods.*/
@RequestMapping("/FullStackproject")
//@RequestMapping Annotation which is used to map HTTP requests to handler methods REST controllers
public class LibraryController {

	@Autowired
	/*is used for automatic dependency injection. 
	If we mention @Autowired over the attribute,no need to write the setter methods for injection*/
	private LibraryRepository libraryRepository;


	//CREATE RECORD REST API
	@PostMapping("/libraryRecords")
	/*@PostMapping annotation maps HTTP POST requests onto specific handler methods.
	Shortcut for-->@RequestMapping(method = RequestMethod.POST)*/
	public ResponseEntity<Library> createLibraryRecords(@RequestBody Library library) {
		Library savedRecords= libraryRepository.save(library);
		try {
			return new ResponseEntity(savedRecords,HttpStatus.CREATED);
		}
		catch(Exception exp) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	//GET RECORDS REST API
	@GetMapping("/libraryRecords")
	//@GetMapping annotated methods handle the HTTP GET requests matched with the given URI expression.
	/*It will search the book by its name..If the book is present it will be fetched from the database with HttpStatus as OK .If the search book is empty,then
	 * all the books will be fetched from the database using findAll() and display in the booklist with HttpStatus as OK.Or else it will throw an exception with 
	 * HttpStatus as INTERNAL_SERVER_ERROR*/
	public ResponseEntity<List<Library>>  getRecordsFromDb(@RequestParam(required=false)String subjectName){
		try {
			List<Library> libraryList=new ArrayList<Library>();
			if(subjectName != null) {
				libraryRepository.findBysubjectNameContaining(subjectName).forEach(libraryList::add);
				return new ResponseEntity<>(libraryList,HttpStatus.OK);
			}
			else {
				libraryList=libraryRepository.findAll();
				return new ResponseEntity<>(libraryList,HttpStatus.OK);
			}
		}
		catch(Exception e) {
			return new ResponseEntity<> (null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}	
	

	//GET RECORD BY BOOKID REST API
	@GetMapping("/libraryRecords/{BookId}")
	//@GetMapping annotated methods handle the HTTP GET requests matched with the given URI expression
	/*@PathVariable-->annotation which indicates that a method parameter should be bound to a URI template variable.
	  If we want to extract particular record by its ID,then we can use @PathVariable*/
	public ResponseEntity<Library> searchById(@PathVariable int BookId) {
		Library library = libraryRepository.findById(BookId)
				.orElseThrow(() -> new ResourceNotFoundException("Book does not exist with id :" + BookId));
		return ResponseEntity.ok(library);
	}


	//UPDATE RECORDS BY BOOKID
	@PutMapping("/libraryRecords/{BookId}")
	//@PutMapping annotated methods handle the HTTP PUT requests matched with the given URI expression
	/*@RequestBody used to convert JSON to Java Objects
	 Spring automatically deserializes the JSON into a Java type*/
	public ResponseEntity<Library> updateBookDetails(@PathVariable int BookId, @RequestBody Library libraryRecordDetails){
		Library library = libraryRepository.findById(BookId)
				.orElseThrow(() -> new ResourceNotFoundException("Book does not exist with id :" + BookId));
		
		library.setSubjectCode(libraryRecordDetails.getSubjectCode());
		library.setSubjectName(libraryRecordDetails.getSubjectName());
		library.setAuthorName(libraryRecordDetails.getAuthorName());
		library.setEdition(libraryRecordDetails.getEdition());
		library.setDeptName(libraryRecordDetails.getDeptName());
		library.setNoOfCopies(libraryRecordDetails.getNoOfCopies());

		Library updatedRecords = libraryRepository.save(library);
		return ResponseEntity.ok(updatedRecords);
	}

	//DELETE RECORD BY BOOK ID
	@DeleteMapping("/libraryRecords/{BookId}")
	//@DeleteMapping annotated methods handle the HTTP DELETE requests matched with the given URI expression
	//@ResponseEntity represents the whole HTTP response: status code.we can use it to fully configure the HTTP response.
	public ResponseEntity<Map<String, Boolean>> deleteRecord(@PathVariable int BookId){
		Library library = libraryRepository.findById(BookId)
				.orElseThrow(() -> new ResourceNotFoundException("Book does not exist with id :" + BookId));

		libraryRepository.delete(library);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	@DeleteMapping("/libraryRecords")
	// It is to delete all the records by using deleteAll() in JPA repository with HttpStatus as No_Content or else it will throw an exception
	public ResponseEntity<HttpStatus> deleteAll() {
		try {
			libraryRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/libraryRecords/viewByEEE")
	/* It is to search the book by department name by using the method findBydeptId().If it is empty , it will show the http status as NO_CONTENT or else it will
	return the books under department name with HttpStatus as OK*/
	public ResponseEntity<List<Library>> viewEEE() { 
		try {
			List<Library> deptBookList=libraryRepository.findBydeptId(1);
			if(deptBookList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(deptBookList, HttpStatus.OK);
			}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
	}
		
		@GetMapping("/libraryRecords/viewByECE")
		public ResponseEntity<List<Library>> viewECE() { 
			try {
				List<Library> deptBookList=libraryRepository.findBydeptId(2);
				if(deptBookList.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(deptBookList, HttpStatus.OK);
				}
			catch(Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
				}
		}
	
		@GetMapping("/libraryRecords/viewByIT")
		public ResponseEntity<List<Library>> viewIT() { 
			try {
				List<Library> deptBookList=libraryRepository.findBydeptId(3);
				if(deptBookList.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(deptBookList, HttpStatus.OK);
				}
			catch(Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
				}
		}
		@GetMapping("/libraryRecords/viewByMech")
		public ResponseEntity<List<Library>> viewMechanical() { 
			try {
				List<Library> deptBookList=libraryRepository.findBydeptId(4);
				if(deptBookList.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(deptBookList, HttpStatus.OK);
				}
			catch(Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
				}
		}
		@GetMapping("/libraryRecords/viewByCSE")
		public ResponseEntity<List<Library>> viewCSE() { 
			try {
				List<Library> deptBookList=libraryRepository.findBydeptId(5);
				if(deptBookList.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(deptBookList, HttpStatus.OK);
				}
			catch(Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
				}
		}
	
	
	
	}







