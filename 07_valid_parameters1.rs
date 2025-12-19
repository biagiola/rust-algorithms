struct Solution {}

// optimized
impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut stack = Vec::new();


        for i in s.chars() {
            match i {
                '{' => stack.push('}'),
                '(' => stack.push(')'),
                '[' => stack.push(']'),
                '}' | ')' | ']' if Some(i) != stack.pop() => return false, // invalidation, terminate the loop and the program
                _ => (),
            }
        }

        // case: "["
        return stack.is_empty()
    }
}

// [()]
fn main() {
    // let result: bool = Solution::is_valid(("[()]").to_string());      // true
    // let result: bool = Solution::is_valid("[".to_string());           // false
    // let result: bool = Solution::is_valid("[[".to_string());          // false
    // let result: bool = Solution::is_valid("([]){".to_string());       // false
    let result: bool = Solution::is_valid("(())]".to_string());        // false
    println!("{}", result);
}
