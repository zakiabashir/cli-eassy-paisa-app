#!  /usr/bin/env node
import chalk from "chalk";
import * as readlineSync from 'readline-sync';
// Main function
function main() {
    console.log('\n\t\t\ <==== Welcome to EasyPaisa CLI app ====>');
    // Mock user data
    const users = {
        'user1': { username: 'user1', password: 'password1', balance: 100000, transactions: [] },
        'user2': { username: 'user2', password: 'password2', balance: 200000, transactions: [] },
        'user3': { username: 'user1', password: 'password3', balance: 10000, transactions: [] },
        'user4': { username: 'user2', password: 'password4', balance: 20000, transactions: [] }
    };
    // Function to authenticate user
    function login() {
        const username = readlineSync.question(chalk.green('\n\t\t\ Enter your username:==> '));
        const password = readlineSync.question(chalk.red('\n\t\t\Enter your password:==> ', { hideEchoBack: true }));
        const user = users[username];
        if (user && user.password === password) {
            return user;
        }
        else {
            console.log(chalk.red('\n\t\tInvalid username or password.'));
            return undefined;
        }
    }
    // Function to display main menu
    function displayMainMenu() {
        console.log(chalk.green(`\n\t\t=======================================================`));
        console.log(chalk.magenta('\n\t\t\t\ Main Menu:'));
        console.log(chalk.gray('\n\t\t\ 1: Check Balance'));
        console.log(chalk.green('\n\t\t\ 2: View Transaction History'));
        console.log(chalk.red('\n\t\t\  3: Exit'));
        console.log(chalk.green(`\n\t\t=======================================================`));
    }
    // Function to check balance
    function checkBalance(user) {
        console.log(chalk.yellow(`\n\t\t\ :===Your current balance is:===> ${user.balance} PKR`));
    }
    // Function to view transaction history
    function viewTransactionHistory(user) {
        console.log(chalk.yellow(`\n\t\t\ :==='Transaction History:\n\t\t\ :===> your account has no transaction'`));
        user.transactions.forEach((transaction, index) => {
            console.log(`${index + 1}. ${transaction}`);
        });
    }
    console.log(chalk.green(`\n\t\t=======================================================`));
    // Authentication loop
    let user;
    do {
        user = login();
    } while (!user);
    console.log(chalk.green(`\n\t\t=======================================================`));
    // Main menu loop
    let choice;
    do {
        displayMainMenu();
        choice = readlineSync.question(chalk.magenta('\n\t\t\ <=== Enter your choice :===> '));
        switch (choice) {
            case '1':
                checkBalance(user);
                break;
            case '2':
                viewTransactionHistory(user);
                break;
            case '3':
                console.log(chalk.magenta(`\t=========================================================`) + chalk.yellow(`===============`));
                console.log(chalk.green(`\t   thanks for using my cli eassypaisa app; CREATOR BY: =>`) + chalk.white(` "ZAKIA BASHIR"`));
                console.log(chalk.magenta(`\t=========================================================`) + chalk.yellow(`===============`));
                break;
            default:
                console.log('\n\t\t\ Invalid choice. Please try again.');
        }
    } while (choice !== '3');
}
console.log(chalk.green(`\n\t\t=======================================================`));
// Entry point
main();
