/*
Hackerearth 

Given a 2D matrix filled with integers (+ve, -ve, 0). Let's say each cell has a weight. The top left
is (1,1) & bottom right cell is (N, M) where N-> Rows, M-> columns.

From any location, you can move only towards right or down i.e, From (x,y) -> (x,y+1) of course, you can't go outside the matrix.
 
There are 2 types of queries you need to answer.
a) 1XY
b) 2XY

Here (x, y) is starting location, Goal is to reach (N,M)
 
For both type 1 & type 2 queries, you have to find what is the max sum of weights that you can collect starting from
(X,Y) reaching (N, M).
 
For type 1, you have to collect all weights on your path to (N,M). 
For type 2, here you can decide whether to skip or collect weights in any cell on your path.
 
In any case you can move only towards the right and/or down.

Input:
4 5             => Size of matrix (N M)
-21 1 8 35 40       =>  N lines have M space separated integers
14 -21 -26 -35 -29
-40 36 48 37 24 
46 8 33 -21 -3
10                  =>  Q no of queries
1 1 1               =>  Q lines have 3 integers (Type start_X start_Y)
1 2 2
1 2 4
1 3 5
1 4 3
2 1 1
2 2 2
2 2 4
2 3 5
2 4 3


Output:
Print Q integers one in each line, result of each query
114
121
23
21
9
159
145
61
24
33


Explanation:
For Query => 1 1 1
It is type 1 query
maximum sum path => -21  -> 14  -> -21  -> 36  -> 48  -> 37  -> 24  -> -3
sum = 114
*/
const matrix = [
    [-21, 1, 8, 35, 40],
    [14, -21, -26, -35, -29],
    [-40, 36, 48, 37, 24],
    [46, 8, 33, -21, -3],
]
const N = 4;
const M = 5;
const Q = [
    [1, 1, 1],
    [1, 2, 2],
    [1, 2, 4],
    [1, 3, 5],
    [1, 4, 3],
    [2, 1, 1],
    [2, 2, 2],
    [2, 2, 4],
    [2, 3, 5],
    [2, 4, 3]
]
Q.forEach(item => findMaximumSum(item[0], item[1], item[2], matrix, N, M))
function findMaximumSum(type, x, y, arr, N, M){
    let start_x = x - 1;
    let start_y = y - 1;
    let right_steps = M - start_x - 1
    let down_steps = N - start_y - 1
    const sum = [];
    while(down_steps >= start_y){
        while(right_steps >= start_x ) {
            console.log(arr[down_steps][right_steps]);
            right_steps--;
        }
        down_steps--;
    }
/*     for(let i=start_y; i< down_steps; i++) {
        for(let j=start_x; j<right_steps; j++){
            console.log(arr[i][j]);
        }
    } */
//    console.log(type, start_x, start_y, N, M);
}