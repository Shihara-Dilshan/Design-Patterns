public class Main {
    public static void main(String[] args) {
        Animal dog = new Dog("Tommy", 5 , "Baw baw");
        dog.flyTypeObh.fly();

        Animal parrot = new Parrot("tiny" , 21);
        parrot.flyTypeObh.fly();

    }
}

class Animal{
    private String name;
    private int age;
    public flyType flyTypeObh;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal{
    private String barkSound;

    public Dog(String name, int age,String barkSound) {
        super(name, age);
        this.flyTypeObh = new cantFly();
        this.barkSound = barkSound;
    }
}

class Parrot extends Animal{

    public Parrot(String name, int age) {
        super(name, age);
        this.flyTypeObh = new canFly();
    }
}


interface flyType{
    void fly();
}

class canFly implements flyType{
    @Override
    public void fly() {
        System.out.println("I can flying");
    }
}
class cantFly implements flyType{
    @Override
    public void fly() {
        System.out.println("I can't fly");
    }
}