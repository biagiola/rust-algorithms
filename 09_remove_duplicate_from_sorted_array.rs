struct Solution {}

impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let mut cur: i32 = nums[0];
        let mut expected_nums: Vec<String> = vec![nums[0].to_string()];
        let mut k: i32 = 1;

        for i in 1..nums.len() {
            if nums[i] == cur {
                continue;
            } else {
                k += 1;
                cur = nums[i];
                expected_nums.push(nums[i].to_string());
            }
        }

        // This mimics: nums.forEach((num, i) => { if (!expectedNums[i]) expectedNums.push("_") })
        // In Rust we just ensure expected_nums has at least nums.len() items by pushing "_"
        while expected_nums.len() < nums.len() {
            expected_nums.push("_".to_string());
        }

        println!("k {}", k);
        println!("expected_nums {:?}", expected_nums);

        k
    }

}

fn main() {
    let mut nums = vec![1, 1, 2];
    
    Solution::remove_duplicates(&mut nums);
}

// side notes:
// if we dont use try_into() we're going to have this error:
// .unwrap() -> method not found in `i32`
// if we know nums.len() > 0 we use into() instead of try_into()