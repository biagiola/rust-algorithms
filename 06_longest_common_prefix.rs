struct Solution {}

impl Solution {
    pub fn longest_common_prefix(strs: Vec<&str>) -> &str {
        println!("{}", strs.len());

        let mut prefix = strs[0];

        for i in 0..strs.len() {
            while strs[i].find(prefix) != Some(0) {
                prefix = &prefix[0..prefix.len() - 1];

                if prefix == "" { return "" }
            }
        }
        
        if strs.len() == 0 { return "" };
        
        return prefix
    }
}

fn main() {
    let strs: Vec<&str> = vec!["flower", "flow", "flight"];
    let result: &str = Solution::longest_common_prefix(strs);
    println!("{}", result);
}