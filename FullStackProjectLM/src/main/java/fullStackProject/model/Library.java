package fullStackProject.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Books")
/*@Entity-->It identifies a class as an entity class
 * A table is created with this class name(in lower case)by default in DB,we can also change the table name*/
public class Library {


	//Attributes--->columns of the table
	@Id //Primary key of the table
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "BookId",length=5)//@Column-->to change the column properties(name,length,nullable)
	private Integer bookId;
	
	@Column(name = "DeptID",length=5)//@Column-->to change the column properties(name,length,nullable)
	private Integer deptId;

	@Column(name = "DeptName",length=10, nullable = false)
	private String deptName;

	@Column(name = "SubjectCode",length=10, nullable = false)
	private String subjectCode;

	@Column(name = "SubjectName", nullable = false)
	private String subjectName;

	@Column(name = "AuthorName",length=30, nullable = false)
	private String authorName;

	@Column(name = "Edition", nullable = false)
	private Integer edition;

	@Column(name = "NoOfCopies", nullable = false)
	private Integer noOfCopies;



	//Non-parameterized constructor
	public Library() {

	}

	//parameterized constructor
	public Library(Integer deptId, String deptName, String subjectCode, String subjectName, String authorName,
			Integer edition, Integer noOfCopies) {
		super();
		this.deptId = deptId;
		this.deptName = deptName;
		this.subjectCode = subjectCode;
		this.subjectName = subjectName;
		this.authorName = authorName;
		this.edition = edition;
		this.noOfCopies = noOfCopies;
	}


	//Public getters and setters for the above mentioned attributes
	
	

	public Integer getBookId() {
		return bookId;
	}

	public void setBookId(Integer bookId) {
		this.bookId = bookId;
	}
	
	public Integer getDeptId() {
		return deptId;
	}

	public void setDeptId(Integer deptId) {
		this.deptId = deptId;
	}

	public String getDeptName() {
		return deptName;
	}

	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}

	public String getSubjectCode() {
		return subjectCode;
	}

	public void setSubjectCode(String subjectCode) {
		this.subjectCode = subjectCode;
	}

	public String getSubjectName() {
		return subjectName;
	}

	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public Integer getEdition() {
		return edition;
	}

	public void setEdition(Integer edition) {
		this.edition = edition;
	}

	public Integer getNoOfCopies() {
		return noOfCopies;
	}

	public void setNoOfCopies(Integer noOfCopies) {
		this.noOfCopies = noOfCopies;
	}

	@Override
	public String toString() {
		return "Library [deptId=" + deptId + ", deptName=" + deptName + ", subjectCode=" + subjectCode + ", subjectName="
				+ subjectName + ", authorName=" + authorName + ", edition=" + edition + ", noOfCopies=" + noOfCopies + "]";
	}


}