/** @author Meyerson, Gabe (gabemeyerson@gmail.com)
 *  @version 0.0.1
 *  @summary Calculates Total salary based on base salary and commission rate on total sales.
 *  @todo
 * Created by Gabe Meyerson on 9/20/2016.
 */

"use strict";
const PROMPT = require('readline-sync');

let baseSalary, totalSales, commissionRate, totalSalary;

function main() {
    setBaseSalary();
    setTotalSales();
    setCommissionRate();
    setTotalSalary();
    printResults();
}

main();

function setBaseSalary() {
    baseSalary = PROMPT.question('\n Enter base salary ');
}

function setTotalSales() {
    totalSales = PROMPT.question('\n Enter total sales ');
}

function setCommissionRate() {
    commissionRate = PROMPT.question('\n Enter your commission rate in decimal form ');
}

function setTotalSalary() {
    totalSalary = totalSales * commissionRate - -baseSalary;
}

function printResults() {
    console.log('Your total salary is ' + totalSalary + '!');
}