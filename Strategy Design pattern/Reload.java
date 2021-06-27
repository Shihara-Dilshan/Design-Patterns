public interface Reload {
    public void reload();
}

class AReloadImpl implements Reload {
    @Override
    public void reload() {
        System.out.println("I am A reloading");
    }
}

class BReloadImpl implements Reload {
    @Override
    public void reload() {
        System.out.println("I am B reloading");
    }
}

class CReloadImpl implements Reload {
    @Override
    public void reload() {
        System.out.println("I am C reloading");
    }
}

