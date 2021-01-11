#include <iostream>
#include <string>

using std::cout;
using std::cin;
using std::string;

int main(int argc, char** argv)
{
    bool truth = true;
    short shorty = 12;
    int input_number = 0;
    long longer_num = 9999999;
    float deci = 3.14;
    double doubler = 9999999.999;
    char mander = 'r';
    string cheese = "yum!";

    if(shorty == 15){
        cout << "shorty == 15!" << std::endl;
    }
    else{
        cout << "shorty != 15!" << std::endl;
    }

    cout << "Please enter a number: ";
    cin >> input_number;
    
    cout << "You entered " << input_number << std::endl;

    return 0;
}