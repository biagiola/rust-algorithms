// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

fn main() {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let sum = 0;
        let mut result = false;

        let mut x: i32 = 0;
        let mut y: i32 = 0;

        for i in 0..nums.len() - 1 {
            for j in i + 1..nums.len() {
                let sum = nums[i] + nums[j];

                if sum == target as i32 {
                    result = true;
                    x = i as i32;
                    y = j as i32;
                    break;
                }
            }
            if result {
                break;
            }
        }

        vec![x, y]
    }
}

