/* use less recourses */

class Singolten{
    private static obj:Singolten;

    private constructor(){
        
    }

    public static getObj = ():Singolten => {
        if (Singolten.obj === null){
            Singolten.obj = new Singolten();
        }
        return Singolten.obj;
    }
}

class Main{
    public static main = () => {
        let obj1:Singolten = Singolten.getObj();
        let obj2:Singolten = Singolten.getObj();

    }
}

Main.main();