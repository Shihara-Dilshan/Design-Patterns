public abstract class Soldier {
    protected Reload reload;
    public abstract void shoot();
    public abstract void run();
}

class AtyleSoldier extends Soldier {
    void AtyleSoldier(){
        this.reload = new AReloadImpl();
    }

    @Override
    public void shoot() {
        System.out.println("it shoots");
    }

    @Override
    public void run() {
        System.out.println("it runs");
    }

    public void reloading(){
        this.reload.reload();
    }
}

class BtyleSoldier extends Soldier {

    void AtyleSoldier(){
        this.reload = new AReloadImpl();
    }

    @Override
    public void shoot() {
        System.out.println("it shoots");
    }

    @Override
    public void run() {
        System.out.println("it runs");
    }

    public void reloading(){
        this.reload.reload();
    }
}


