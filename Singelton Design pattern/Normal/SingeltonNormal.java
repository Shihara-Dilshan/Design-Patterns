public class SingeltonNormal {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Test t1 = Test.getIntance();
		Test t2 = Test.getIntance();
		Test t3 = Test.getIntance();
	}
}

class Test{
	private static Test oneIntance = null;
	
	private Test() {
		System.out.println("Object created with hash code :" + hashCode());
	}
	
	public static Test getIntance() {
		if(oneIntance == null) {
			oneIntance = new Test();
		}
		return oneIntance;
	}
} 

