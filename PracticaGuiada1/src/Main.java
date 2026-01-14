public class Main {
    public static void main(String[] args) throws Exception {
        //int[] numbers = {10, 20, 30, 40, 50};
        //String[] fruits = new String[3];
        //System.out.println(numbers[2] + " " + fruits[2]);
        Pet[] pets = new Pet[3];
        PetManager manager = new PetManager(pets);
        Person person = new Person("Pablo", 18, manager);
        person.addPet(new Pet("Rafa", "Perro"));
         person.addPet(new Pet("Keylor", "Gato"));
          person.addPet(new Pet("Fausto", "oso panda"));

        for (Pet pet : person.getManager().getPets()) {
            IOManager.printMessage((pet.getPetName()));       
        }
    }
}
