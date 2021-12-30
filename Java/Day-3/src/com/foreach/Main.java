package com.foreach;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        int N = in.nextInt();
        int rem = N%2;
        System.out.println(rem);
        if(N<=100 && N>=1){
            if(rem == 0){
                if(N <= 5 && N >= 2){
                    System.out.println("Not Weird");
                }
                else if(N <= 20 && N >= 6 ){
                    System.out.println("Weird");
                }
                else if(N > 20){
                    System.out.println("Not Weird");
                }
            }
            else{
                System.out.println("Weird");
            }
        }

//        if (N >= 1 && N <= 100) {
//
//            if (rem == 0) {
//                System.out.println("Weird");
//            }
//            else if (rem == 0 ) {
//                if (N >= 2 || N <= 5) {
//                    System.out.println("Not Weird");
//                }
//                else if (N >= 6 || N <= 20) {
//                    System.out.println("Weird");
//                }
//                else if (N > 20) {
//                    System.out.println("Not Weird");
//                }
//            }
//        }

    }
}