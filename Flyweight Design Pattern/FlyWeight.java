import java.util.HashMap;
import java.util.Random;

public class FlyWeight {
	
	private static Random r = new Random();
	private static String employeeType[] = {"Developer" , "Tester"};
	private static String skills[] = {"Java" , "C++" , ".Net" , "Python"};
	
	public static void main(String[] args) {
		for(int i=0; i <= 100; i++) {
			Employee e = Factory.getEmployee(employeeType[r.nextInt(employeeType.length)]);
			e.assignSkill(skills[r.nextInt(skills.length)]);
			
			e.task();
			
		}
	}

}

class Factory{
	private static HashMap<String, Employee> m = new HashMap<>();
	
	public static Employee getEmployee(String type) {
		Employee p = null;
		if(m.get(type) != null) {
			p = m.get(type);
		} else {
			switch (type) {
			case "Developer":
				System.out.println("Developer created");
				p = new Developer();
				break;
			case "Tester":
				System.out.println("Tester created");
				p = new Tester();
				break;
			default:
				System.out.println("No such Employee");
			}
			m.put(type, p);
		}
		return p;
	}
	
	
}

class Developer implements Employee{
	
	private final String JOB;
	private String skill;
	
	public Developer() {
		super();
		JOB = "Fix the issue";
	}
	
	@Override
	public void assignSkill(String skill) {
		// TODO Auto-generated method stub
		this.skill = skill;
	}

	@Override
	public void task() {
		// TODO Auto-generated method stub
		System.out.println("Developer with skill " + this.skill + " with job " + this.JOB);
	}
}

class Tester implements Employee{
	
	private final String JOB;
	private String skill;
	
	
	public Tester() {
		super();
		JOB = "Test the issue";
	}

	@Override
	public void assignSkill(String skill) {
		// TODO Auto-generated method stub
		this.skill = skill;
	}

	@Override
	public void task() {
		// TODO Auto-generated method stub
		System.out.println("Tester with skill :" + this.skill + " with job : " + this.JOB);
	}
}

interface Employee{
	void assignSkill(String skill);
	void task();
}
