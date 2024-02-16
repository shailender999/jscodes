// WAP to find the largest substring without repeating characters

let str = "pwwkew";

function largestSubstring(s) {
    if(!s) {
        return 0;
    }
    if(s.length === 1) {
        return 1;
    }
    let left = 0;
    let right = 0;
    let max_size = 0;
    let set = new Set();
    while (right < s.length) {
        if(!set.has(s[right])) {
            set.add(s[right]);
            max_size = Math.max(max_size, set.size);
        } else {
            set.delete(s[left]);
            left++;
        }
        right++;
    }
    return max_size;
}
console.log(largestSubstring(str));