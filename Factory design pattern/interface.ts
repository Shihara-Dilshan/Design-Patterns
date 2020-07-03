export interface Run{
    run():void;
}

export class ShiharaRun implements Run{
    public run = () => {
        console.log("Shihara Is running fast");
    }
}   

export class DilshanRun implements Run{
    public run = () => {
        console.log("Dilshan Is running Slower");
    }
}

export class SomeoneRun implements Run{
    public run = () => {
        console.log("Others can't run");
    }
}