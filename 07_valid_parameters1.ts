// optimized
var isValid1 = function(s: string): boolean {
    const stack = []

    for (let i = 0; i < s.length; i++) {
        const cur = s[i]
        console.log('cur: ', cur)

        if (stack.length) {
            const last = stack[stack.length - 1]

            if (isPair(last, cur)) {
                stack.pop()
                continue
            }
        }
        stack.push(cur)
    }

    return stack.length === 0
};

var isPair = function(last: string, cur: string): boolean {
    return (
        (last === '(' && cur === ')') ||
        (last === '{' && cur === '}') ||
        (last === '[' && cur === ']')
    )
};

const result_08 = isValid1("[()]")  // true
// const result_08 = isValid1("[")     // false
// const result_08 = isValid1("[[")    // false
// const result_08 = isValid1("([]){") // false
// const result_08 = isValid1("([)]")     // false
console.log("result: ", result_08)