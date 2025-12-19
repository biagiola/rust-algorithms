struct Solution {}

impl Solution {
    // pub fn is_valid(s: &str) -> bool { // not code changes when using &str
    pub fn is_valid(s: String) -> bool {
        let mut stack: Vec<char> = vec![];

        for i in 0..s.len() {
            let current = s.chars().nth(i).unwrap();
            
            if stack.len() > 0 {
                let last = stack.last().unwrap();

                if Self::is_pair(*last, current) {
                    stack.pop();
                    continue;
                }
            }

            stack.push(current);
        }

        return stack.len() == 0;
    }


    pub fn is_pair(last: char, current: char) -> bool {
        (last == '(' && current == ')') ||
        (last == '{' && current == '}') ||
        (last == '[' && current == ']')
    }
}

fn main() {
    let result: bool = Solution::is_valid(("[()]").to_string());      // true
    // let result: bool = Solution::isValid("[()]")     // false
    // let result: bool = Solution::isValid("[")        // false
    // let result: bool = Solution::isValid("[[")       // false
    // let result: bool = Solution::isValid("([]){")    // false
    // let result: bool = Solution::isValid("([)]")     // false
    println!("{}", result);
}

// notes
// line 11: take care to move out the if, make sure values exists inside first
// thats why we need to avoid unwrap() in production.