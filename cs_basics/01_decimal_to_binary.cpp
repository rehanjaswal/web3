#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;

    if (n == 0) cout << 0;

    string binary = "";

    while (n > 0) {
        int remainder = n % 2;
        binary = char('0' + remainder) + binary; // or  binary = char(48 + remainder) + binary
        n /= 2;
    }
    cout << binary;
    return 0;
}