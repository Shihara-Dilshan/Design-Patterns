public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Factory fac = new Factory();
		OS osObj = fac.getInstance("windows");
		osObj.about();
	}

}

class Factory{
	public OS getInstance(String name) {
		switch (name) {
		case "windows":
			return new Windows();
		case "linux":
			return new Linux();	
		case "mac":
			return new Mac();	
		default:
			return new Linux();	
		}
	}
	
}

interface OS{
	void about();
}

class Windows implements OS{

	@Override
	public void about() {
		// TODO Auto-generated method stub
		System.out.println("The worst OS ever");
	}
	
}

class Linux implements OS{

	@Override
	public void about() {
		// TODO Auto-generated method stub
		System.out.println("The best OS Ever");
	}
	
}

class Mac implements OS{

	@Override
	public void about() {
		// TODO Auto-generated method stub
		System.out.println("Safest OS ever");
	}
	
}

