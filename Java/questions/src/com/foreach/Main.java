package com.foreach;

import java.util.Scanner;

public class Main {

    public static  void main(String[] args) {








    }
}
/*
remove dublicates from given string*/

class validator{
    int[] DaysInMonth = {28, 30, 31};

    static  String validateSalaryData(){
        int[] DaysInMonth = {28, 30, 31};
        for (int i = 0; i < DaysInMonth.length; i++) {
            if(s == DaysInMonth[i]){}
            else{
                throw new InvalidDaysException("Invalid Days");
            }
        }
        if(s.salary > 10000000 ){
            throw new InvalidSalaryException("Invalid Salary");
        }
        return  null;

    }



