
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        BankAccount pablosAcc = new BankAccount("Pablo", 1000);
        pablosAcc.showInfo();
        System.out.println("Enter amount to deposit:");
        pablosAcc.deposit(sc.nextDouble());
        pablosAcc.showInfo();
        System.out.println("Enter amount to withdraw:");
        pablosAcc.withdraw(sc.nextDouble());
        pablosAcc.showInfo();
        sc.close();
    }
}
