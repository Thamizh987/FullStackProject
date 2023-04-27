package fullStackProject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import fullStackProject.model.Library;

//Interface extending the JPARepository Interface
public interface LibraryRepository extends JpaRepository<Library, Integer> {

	List<Library> findBysubjectNameContaining(String subjectName);
	List<Library> findBydeptId(int deptId);

}

