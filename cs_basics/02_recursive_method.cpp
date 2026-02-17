#include <iostream>
using namespace std;
void printBinary(int n) {
        if (n == 0) return;
        printBinary(n / 2); // go deeper
        cout << n % 2;      // print while coming back
}     

int main() {
    int n;
    cin >> n;
    if (n == 0) cout << 0;
    printBinary(n);
    return 0;
}