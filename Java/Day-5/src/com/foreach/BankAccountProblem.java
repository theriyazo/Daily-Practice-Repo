package com.foreach;

public class BankAccountProblem {
    public static void main(String[] args) {
        int [][] arr = {
                {1,2,3},
                {2,3,4}
        };

        System.out.println("Richest customer has Wealth =  "+wealth(arr));
    }
    static int wealth(int [][] acc){
        int AccSum = 0;
        int[] sum = new int[acc.length];

        for (int row=0; row<acc.length; row++) {
            for (int col = 0; col < acc[row].length; col++) {

                AccSum += acc[row][col];
//                System.out.println(AccSum);
            }
            sum[row] = AccSum;
            printCustomerAndWealth(sum, row);
            AccSum = 0;

        }
        return richestWealth(sum);
    }
    static int richestWealth(int[] sum){
        int Max = Integer.MIN_VALUE;
        for (int element : sum) {
            if (element > Max) {
                Max = element;
            }
        }
        return Max;
    }
    static void printCustomerAndWealth(int [] WealthOf, int customer){
        int customerNo= customer;
        customerNo += 1;
        switch (customerNo) {
            case 1 -> System.out.println(customerNo + "st customer has Wealth = " + WealthOf[customer]);
            case 2 -> System.out.println(customerNo + "nd customer has Wealth = " + WealthOf[customer]);
            case 3 -> System.out.println(customerNo + "rd customer has Wealth = " + WealthOf[customer]);
            default -> System.out.println(customerNo + "th customer has Wealth = " + WealthOf[customer]);
        }
    }
}
