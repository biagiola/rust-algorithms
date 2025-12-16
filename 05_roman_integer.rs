use std::collections::HashMap;

fn roman_to_int(s: &str) -> i32 {
    let mut c = HashMap::new();
    c.insert('I', 1);
    c.insert('V', 5);
    c.insert('X', 10);
    c.insert('L', 50);
    c.insert('C', 100);
    c.insert('D', 500);
    c.insert('M', 1000);

    let letters: Vec<char> = s.replace(" ", "").to_uppercase().chars().collect();
    let mut sum = 0;

    for i in 0..letters.len() - 1 {
        println!("loop");
        
        let current = c[&letters[i]];
        let next = c[&letters[i + 1]];

        if current >= next {
            sum += current;
        } else {
            sum -= current;
        }
    }
    sum
}

fn main() {
    let result = roman_to_int("MCDLXXVI");
    println!("Converted value: {}", result);
}