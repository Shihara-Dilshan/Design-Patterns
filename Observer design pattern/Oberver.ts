import Channel from './Subject'
import List from './Collections/List';

export interface Observer{
    update():void;
}

export class Subscriber implements Observer{

    private name:string;
    private subscribeChannels:List<Channel>

	constructor($name: string) {
        this.name = $name;
        this.subscribeChannels = new List<Channel>();
	}

    update(): void {
        console.log(`hey ${this.name} a new video has been uploaded`);
    }
    
    addNewSubscription = (channel:Channel):void => {
        this.subscribeChannels.add(channel);
    }
}


