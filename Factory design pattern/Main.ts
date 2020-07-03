import Factory from "./Factory";
import { Run } from "./interface";

class Main {
  public static main = (): void => {
    let factory1: Factory = new Factory();
    try {
      let running: Run = factory1.getInstance("sosmeone");
      running.run();
    } catch (e) {
      let result = (e as Error).message;
      console.log(result);
    }
  };
}

Main.main();
