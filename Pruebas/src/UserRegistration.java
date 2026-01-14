

public class UserRegistration  {

    public void signUp(){
        String email = IOManager.inputEmail("Please enter an email adress");
        if (Validator.validateEmail(email) == true) {
            System.out.println("Successfully signed up");
        }else{
            System.err.println("invalid email, need to have @.");
        }
    }

}
