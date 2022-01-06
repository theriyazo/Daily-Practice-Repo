package com.foreach;

public class EvenOddDigitsInARRAY {
    public static void main(String[] args) {
        int[][] arr = {
                {130,26655},
                {-2205,52254,52025},
                {855455,-95, 12}
        };


        System.out.println(evenDigits(arr));
    }
    static int evenDigits(int[][] array){
        int count = 0;
        for (int row=0; row<array.length; row++) {
            for (int col = 0; col < array[row].length; col++) {
                if(isEven(array[row][col])){
                    count ++;
                }
            }
        }
        return count;
    }

    static int digits(int num){
        int count = 0;
        if(num < 0){
            num *= -1;
        }
        if(num == 0 ){
            return 1;
        }
        while(num > 0){
            count++;
            num/=10;
        }
        return count;
    }

    static boolean isEven(int number){
//        System.out.println(digits(number));
        return  digits(number) % 2 == 0;
    }

}
