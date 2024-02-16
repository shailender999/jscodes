// WAP to find factorial of n

//method 1 -> without memoization
const fib = n => {
    if (n <= 1) return 1
    return fib(n - 1) + fib(n - 2)
}
console.log(fib(5));
//method 2 -> with memoization
const fib_new = (n, memo) => {
    memo = memo || {}

    if (memo[n]) return memo[n]

    if (n <= 1) return 1
    return memo[n] = fib_new(n-1, memo) + fib_new(n-2, memo)
}
console.log(fib_new(5));