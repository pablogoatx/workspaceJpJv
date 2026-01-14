public class PetManager {
    
    private int size;
    private Pet[] pets;

    public PetManager(Pet[] pets) {
        size = 0;
        this.pets = pets;
    }

    public boolean addPet(Pet pet){
        for (int i = 0; i < pets.length; i++) {
            if (pets[i] == null) {
                pets[i] = pet;
                size++;
                return true;
            }
        }
        return false;
    }

    public void setPets(Pet[] pets) {
        this.pets = pets;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public Pet[] getPets() {
        return pets;
    }

    public int getSize() {
        return size;
    }

}
