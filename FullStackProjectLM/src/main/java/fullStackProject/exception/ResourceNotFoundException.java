package fullStackProject.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
/*@ResponseStatus marks a method or exception class 
with the status code and reason message that should be returned*/
public class ResourceNotFoundException extends RuntimeException{

	// Default serial version Id
	private static final long serialVersionUID = 1L;
	
	public ResourceNotFoundException(String message) {
		super(message);
	}
}






