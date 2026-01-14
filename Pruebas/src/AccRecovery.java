public class AccRecovery   {

    public void requestRecovery(){
        String email = IOManager.inputEmail("Please enter an email adress");
        if (Validator.validateEmail(email) == true) {
            System.out.println("Successfully recovered");
        }else{
                System.err.println("invalid email, need to have @.");
        }
    }

}
