// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""
    
    let result = ""
    let len = strs[0].length
    
    // detects the shortest word
    strs.forEach(word => {
        word.length < len
            ? len = word.length
            : len = len
    })
    
    console.log("strs.length", strs.length)
    console.log("len", len)

    // console.log("w from flow", strs[1][3]) // word, letter

    if (strs.length === 1) {
        console.log("result: ", strs[0])
        return strs[0]
    };
    if (len === 1) {
        for (let i = 0; i < strs.length - 1; i++) {
            console.log(strs[i][0])
            console.log(strs[i + 1][0])

            if (strs[i][0] === strs[i + 1][0]) {
                continue
            } else {
                return ""
            }
        }
        console.log("result*: ", strs[0][0])
        return strs[0][0];
    }
    
    let stop = false;
    for (let i = 0; i < len; i++) {         // letters
        for (let j = 0; j < strs.length - 1; j++) { // words
            console.log("j, i", j, i)
            console.log("*", strs[j][i])
            console.log("*", strs[j+1][i])

            if (strs[j][i] === strs[j+1][i]) {
                if (j === strs.length - 2) {
                    console.log("added", strs[j][i])
                    result += strs[j][i]
                }
            } else {
                console.log("this is a break")
                stop = true
                break
            }
        }
        if (stop == true) break
    }

    console.log("result: ", result)
    return result
};

//                   0,0       1,0   2,0
//                   0,1       1,1   2,1
//                   0,2       1,2   2,2
// longestCommonPrefix(["flower","flow","flight"])            // "fl"
// longestCommonPrefix(["dog","racecar","car"])               // ""
// longestCommonPrefix(["daf","dax","dat"])                   // "da"
// longestCommonPrefix(["d","d","d","d"])                     // "d"
// longestCommonPrefix(["d","d","d"])                         // "d"
// longestCommonPrefix(["a"])                                 // "a"
// longestCommonPrefix(["flower","flower","flower","flower"]) // "flower"
longestCommonPrefix(["cir","car"])                            // "c"

