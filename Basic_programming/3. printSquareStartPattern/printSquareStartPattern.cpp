#include <iostream>
using namespace std;

int main() {
    int row;
    cout<< "enter how many row you want" << endl;
    cin>>row;

    for(int i=0;i<row;i++){
        for(int j=0;j<row;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}
