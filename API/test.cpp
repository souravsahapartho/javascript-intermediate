#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;
struct Subarray{
    int sum ,low,high;
};

Subarray MaxCrossingSum(vector<int>& a, int low, int mid, int high){
      int bestSum = INT_MIN;
      int bestStart = -1;


      for (int s = mid - 2; s <= mid; s++) {
        if (s >= low && s + 2 <= high) {
            int cur = a[s] + a[s + 1] + a[s + 2];
            if (cur > bestSum) {
                bestSum = cur;
                bestStart = s;
            }
        }
    }

    Subarray cross;
    cross.sum = bestSum;
    cross.low = bestStart;
    cross.high = bestStart + 2;
    return cross;


}


Subarray FindMaxPeriod(vector<int> a,int low,int high){

     if(low == high){
        Subarray m;
        m.low = low,m.high = high,m.sum = a[low];
        return m;
     }
     int mid = (low+high)/2;

     Subarray left = FindMaxPeriod(a, low,mid);
     Subarray right= FindMaxPeriod(a,mid+1 ,high );
     Subarray cross = MaxCrossingSum(a, low, mid, high);
    if(left.sum >= right.sum && left.sum >= cross.sum) return left;
    else if(right.sum >= left.sum && right.sum >= cross.sum) return right;
    else return cross;

}


int main(){

    vector<int> arr= {28,31,29,34,30,33,27,35,32};
    int n = arr.size();

    Subarray sub = FindMaxPeriod(arr,0,n-1);
    int sum = sub.sum;
    int low = sub.low;
    int high =sub.high;

    cout << "Highest total tempareture:"<< sum << endl;
    cout << "Max 3 consecutive days: "<< endl;
    for(int i=low; i<= high ;i++)
        cout << arr[i] << " ,";



}