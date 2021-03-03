import java.util.ArrayList;
import java.util.List;

public class ObserverTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Observer ob1 = new Observer("observer 1");
		Observer ob2 = new Observer("observer 2");
		Observer ob3 = new Observer("observer 3");
		
		Subject s1 = new Subject();
		s1.add(ob1);
		s1.add(ob2);
		s1.add(ob3);
		
		s1.notifyX();
	}

}


class Observer{
	private String name;
	
	public Observer(String name) {
		this.name = name;
	}
	public void update() {
		System.out.println(name +" is listning");
	}
}

class Subject{
	private List<Observer> observerList;
	
	public Subject() {
		observerList = new ArrayList<>();
	}
	
	public void add(Observer obj) {
		this.observerList.add(obj);
	}
	
	public void remove(Observer obj) {
		this.observerList.remove(obj);
	}
	
	public void update() {
		observerList
			.stream()
				.forEach( (observer) -> {
				observer.update();
			});
	}
	
	public void notifyX() {
		this.update();
	}
}