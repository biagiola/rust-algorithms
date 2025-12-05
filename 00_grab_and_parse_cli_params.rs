use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    println!("{:?}", args);

    let target: u32 = match args[1].parse() {
        Ok(num) => num,
        Err(_) => {
            eprintln!("Error: First argument '{}' is not a valid u32.", args[1]);
            return
        }
    };

    let elements: Vec<i32> = args[2]
        .trim_start_matches('[')
        .trim_end_matches(']')
        .split(',')
        .filter_map(|s| {
            println!("{}", s);
            match s.trim().parse::<i32>() {
                Ok(num) => Some(num),
                Err(_) => {
                    eprintln!("Warning: Skipping invalid number '{}' in the elements vector", s.trim());
                    None
                }
            }
        })
        .collect();

    println!("target: {}", target);
    println!("elements: {:?}", elements);
    
}