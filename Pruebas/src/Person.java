public class Person {
    
    private String name;
    private EmailService email;

    public Person(String name, EmailService emailService){
        this.name = name;
        this.email = emailService;
    }

    public void notifyPerson(){
        System.out.println("Hello my name is " + name);
        email.sendEmail("How are you?");
    }
}