package com.foreach;

public class Main {

    public static void main(String[] args) {
        pattern2b(10);

        Developer p1 = new Developer(23, "Riyaz");
        p1.walk(23);


    }


    static void pattern2b(int n){
        for (int row = 0; row < 2 * n; row++) {

            int totalNumCol = row > n ? 2 * n - row : row;
            int noOfSpaces = n - totalNumCol;

            for (int s = 0; s < noOfSpaces; s++) {
                System.out.print(" ");
                
            }

            for (int col = 0; col < totalNumCol; col++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }


    static void pattern2(int n){
        int count= n;
        boolean mid = false;


        for (int row = 0; row < 2 * n; row++) {

//            If the current row is the middle of total rows
            if (row == n+1){
                mid = true;
            }
            if (mid){
                count--;
                for (int col = 0; col < count; col++) {
                    System.out.print("* ");
                }
                System.out.println();
            }
            else {
                for (int col = 0; col < row; col++) {
                    System.out.print("* ");
                }
                System.out.println();
            }
        }
    }

    static void pattern1(int n){
        for (int row = 0; row <= n; row++) {
            int count = 0;

            for (int col = 0; col < row; col++) {
                count++;

                System.out.print(count+" ");

            }
            System.out.println();
        }
    }
}
class Developer extends Person{

    public Developer(int age, String name) {
        super(age, name);
    }


}

class Person{

    public Person(int age, String name){
        System.out.println(age+" "+name);
    }

    int walk(int age){
        return 10;
    }




}

