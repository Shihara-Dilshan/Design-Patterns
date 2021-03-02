public class SingeltonThread {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Thread t1 = new Thread(new Runnable(){
			public void run(){
				Test t1 = Test.getIntance();
			}
		});
		
		Thread t2 = new Thread(new Runnable(){
			public void run(){
				Test t3 = Test.getIntance();
			}
		});
		t2.start();
		t1.start();
	}
}

class Test{
	private static Test oneIntance = null;
	
	private Test() {
		System.out.println("Object created with hash code :" + hashCode());
	}
	
	public static Test getIntance() {
		synchronized(Test.class){
			if(oneIntance == null) {
				oneIntance = new Test();
			}
		}
		
		return oneIntance;
	}
} 

