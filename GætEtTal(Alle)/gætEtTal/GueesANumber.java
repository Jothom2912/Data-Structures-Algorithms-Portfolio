import java.util.Scanner;

public class GueesANumber { 
    public static void main(String[] args) { 
        System.out.println("Hello!");

        Scanner scanner = new Scanner(System.in);

        int number = 42; // Replace with random number generation if needed

        int guess;
        do {
            System.out.print("Guess a number: ");
            guess = scanner.nextInt();

            if(guess > number ){
                System.out.println("Your guess is too high. Try again.");
            }
            if(guess < number) {
                System.out.println("Your guess is too low. Try again.");
            }
        } while (guess != number);
        
        System.out.println("Congratulations, you guessed correctly!");
        System.out.println("The number was " + number);
    }
}
