import ComputerBuilder from "./ComputerBuilder";
import Computer from "./Computer";

class Main {
  public static main = (): void => {
    let asus: Computer = new ComputerBuilder()
      .setName("Asus axRock")
      .setPrice(90000)
      .setProcessor("core i5 3.6GHZ")
      .setRam(2048)
      .setGraphics("Nvidia GTZ 760")
      .Build();

    asus.GetComputer();
    
  };
}

Main.main();
