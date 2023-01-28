#include <iostream>
using namespace std;

bool isPrime(int number) {
    int count = 0;
    if (number <= 1)
        return false;

    // Every time we check for the square of i to be less than of the given number. So if we give 53, it will check only from 2 to 7. thus makes it more efficient     
    for (int i = 2; i*i < number; ++i) { 
        if (number % i == 0)
            return false;
    }
    
    return true;
}

int main() {
    int n;
    std::cout << "Enter a number: ";
    std::cin >> n;
    
    if (isPrime(n))
        std::cout << n << " is a prime number." << std::endl;
    else
        std::cout << n << " is not a prime number." << std::endl;
    
    return 0;
}

