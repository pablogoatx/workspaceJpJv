public class Person {

    private String name;
    private int age;
    private PetManager manager;

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

    public boolean removePet(Pet pet){
        return manager.removePet(pet);
    }
    
    public Pet[] getPets(){
        return manager.getPets();
    }

    public boolean updatePets(Pet pet, int index){
        return manager.updatePets(pet, index);
    }


}
