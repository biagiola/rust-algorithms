function isValid(s: string): boolean {
    if (s.length === 1) return false
    
    let stack = []
    let c = 0

    for (let i = 0; i < s.length; i++) {
        // const element = array[i]
        if (
            s[i] === "(" ||
            s[i] === "[" ||
            s[i] === "{" 
        ) {
            stack.push(s[i])
            c++
            continue
        }

        if (
            (stack.at(-1) === "(" && s[i] === ")") ||
            (stack.at(-1) === "[" && s[i] === "]") ||
            (stack.at(-1) === "{" && s[i] === "}")
        ) {
            stack.pop()
            continue
        } else {
            return false
        }
    }

    return stack.length > 0 ? false : true
};

// const result_07 = isValid("[()]")  // false
// const result_07 = isValid("[")     // false
// const result_07 = isValid("[[")    // false
// const result_07 = isValid("([]){") // false
const result_07 = isValid("([)]")    // false
console.log("result: ", result_07)