import {Run, ShiharaRun, DilshanRun, SomeoneRun} from './interface';

class Factory{
    public getInstance = (instance:string):Run => {
        if(instance === "shihara")
            return new ShiharaRun();
        else if(instance === "dilshan")
            return new DilshanRun();
        else if(instance === "someone")
            return new SomeoneRun();
        else
            return undefined;
    }   
}

export default Factory;