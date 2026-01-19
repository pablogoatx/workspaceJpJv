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
        Pet[]pets = new Pet[this.size];
        for (int i = 0; i < this.size; i++) {
            pets[i] = this.pets[i];
        }
        return pets;
    }

    public int getSize() {
        return size;
    }

    public boolean removePet(Pet pet){

        for (int i = 0; i < pets.length; i++) {
            if (pets[i] != null && pets[i].equals(pet)) {
                for (int j = i; j < pets.length -1; j++) {
                    pets[j] = pets[j+1];
                }
                pets[pets.length -1] = null;
                size--;
                return true;
            }
        }
        return false;
    }

    public boolean updatePets(Pet pet, int index){
        if (pet != null && index >= 0 && index < size) {
            pets[index] = pet;
            return true;
        }
        return false;
    }
}