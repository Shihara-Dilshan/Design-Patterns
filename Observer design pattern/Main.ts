import Channel from './Subject'
import {Subscriber} from './Oberver'

class Main {
  public static main = (): void => {
    let channel1 :Channel = new Channel("Telusko");
    let channel2 :Channel = new Channel("NoobStack");

    let subscriber1:Subscriber = new Subscriber("Shihara");
    let subscriber2:Subscriber = new Subscriber("Dilshan");

    channel1.subscribe(subscriber1);
    channel1.subscribe(subscriber2);

    channel2.subscribe(subscriber1);

    subscriber1.addNewSubscription(channel1);
    subscriber1.addNewSubscription(channel2);

    subscriber1.addNewSubscription(channel1);

    /* ------------------------------------------*/

    channel2.upload("Java full course" , "Programmming" , "2020-02-19" , 6.23);
    
    
  };
}

Main.main();
