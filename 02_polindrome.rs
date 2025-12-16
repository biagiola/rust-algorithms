fn main() {
    struct Solution {}

    impl Solution {
        pub fn is_palindrome(x: i32) -> bool {
            let x: Vec<char> = x.to_string().chars().collect();
            let len = x.len();

            let mut c = if len % 2 == 0 {
                len / 2
            } else {
                (len - 1) / 2
            };

            // println!("{:?}", x);
            // println!("{:?}", c);
            for j in (0..c).rev() {
                println!("{}", j);    
            }

            for i in 0..c {
                println!("{}", i);
                // for j in (0..c=).rev() {
                //     println!("{} {}", i, j);    
                // }
            }
            return true;
        }
    }

    Solution::is_palindrome(1991);
}