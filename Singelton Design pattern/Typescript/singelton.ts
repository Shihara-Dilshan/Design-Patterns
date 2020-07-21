/*
this method will use many resources. 
object will be created no matter what
*/

class Singelton {
  private static object: Singelton = new Singelton();

  private constructor() {
      console.log("obj created");
  }

  public static getObject(): Singelton {
    return Singelton.object;
  }
}

class Main {
  public static main(): void {
    let obj1: Singelton = Singelton.getObject();
    let obj2: Singelton = Singelton.getObject();
  }
}

Main.main();
