public class Main {
    public static void main(String[] args) throws Exception {
        //int[] numbers = {10, 20, 30, 40, 50};
        //String[] fruits = new String[3];
        //System.out.println(numbers[2] + " " + fruits[2]);
        Pet[] pets = new Pet[3];
        PetManager manager = new PetManager(pets);
        Person person = new Person("Pablo", 18, manager);
        Pet pet1 = new Pet("Rafa", "Perro");
        Pet pet2 = new Pet("Keylor", "Gato");
        Pet pet3 = new Pet("Fausto", "oso panda");
        Pet pet4 = new Pet("Diego", "tiburon");


        if (person.addPet(pet1) &&
        person.addPet(pet2) &&
        person.addPet(pet3)) {
            IOManager.printMessage("Pets added succesfully");
        } else{
            IOManager.printMessage("Failed to add pets");
        }

        if (person.removePet(pet3)) {
            IOManager.printMessage("Pet removed succesfully");
       }else {
         //   IOManager.printMessage("Failed to remove pet");
       }

         if (person.updatePets(pet4, 2)) {
            IOManager.printMessage("Succesfully updated");
        }else{
            IOManager.printMessage("Failed to up");
        }

        if (person.getPets().length == 0) {
            IOManager.printMessage("No pets founds");
        }else {
            for (Pet pet : person.getPets()) {
                IOManager.printMessage(pet.getPetName());
            }
        }
    }
}