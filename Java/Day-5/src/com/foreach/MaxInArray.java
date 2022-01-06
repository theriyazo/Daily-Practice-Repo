package com.foreach;

public class MaxInArray {

    public static void main(String[] args) {
        int[][] arr = {
                {10,25},
                {25,54,55},
                {85,95, 120}
        };
        System.out.println(max(arr));




    }
    static int max(int[][] array){
        int max = Integer.MIN_VALUE;
        for (int row=0; row<array.length; row++) {
            for (int col = 0; col < array[row].length; col++) {
                if(array[row][col]>max){
                    max = array[row][col];
                }

            }
        }
        return max;
    }
}
