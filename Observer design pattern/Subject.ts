import List from "./Collections/List";
import {Observer, Subscriber} from './Oberver'
import Song from './Song'

interface Subject{
    subscribe(Subscriber:Subscriber):void;
    unSubscribe(Subscriber:Subscriber):void;
    notify():void;
    upload(name: string, category: string, releaseDated: string, duration: number):void;
}

class Channel implements Subject{
    private name:string;
    private subscribers:List<Observer>;
    private songs:List<Song>;

    constructor(name:string){
        this.name = name;
        this.subscribers = new List<Observer>();
        this.songs = new List<Song>();
    }

    subscribe(Subscriber: Subscriber): void {
        this.subscribers.add(Subscriber);
    }
    unSubscribe(Subscriber: Subscriber): void {
        this.subscribers.removeWithObj(Subscriber);
    }
    notify(): void {
        this.subscribers.array().forEach( subscriber => {
            subscriber.update();
        });
    }
    upload(name: string, category: string, releaseDated: string, duration: number): void {
        let song:Song = new Song(name, category, releaseDated, duration);
        this.songs.add(song);
        this.notify();
    }

    
}

export default Channel;