
import java.util.Scanner;

public class IOManager {

    private static Scanner sc = new Scanner(System.in);

    public static String inputEmail(String message){
        System.out.println(message);
        String email = sc.nextLine();
        return email;
    }

}
