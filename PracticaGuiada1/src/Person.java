public class Person {

    private String name;
    private int age;
    private PetManager manager;
    public Object getManager;

    public Person(String name, int age, PetManager manager){
        this.name = name;
        this.age = age;

        this.manager = manager;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setName(String name) {
        this.name = name;
    }

    
    public int getAge() {
        return age;
    }

    public String getName() {
        return name;
    }

    public PetManager getManager() {
        return manager;
    }

    public void setManager(PetManager manager) {
        this.manager = manager;
    }


    public boolean addPet(Pet pet){
        return manager.addPet(pet);
    }


}
