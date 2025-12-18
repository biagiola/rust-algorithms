// optimized solution
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 0; i < strs.length; i++) {

        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.slice(0, prefix.length - 1)

            console.log("prefix", prefix)

            if (prefix === "") return ""
        }
    }

    return prefix
}

const result_06 = longestCommonPrefix(["flight","flow","flower"])            // "fl"
// const result_06 = longestCommonPrefix(["dog","racecar","car"])               // ""
// const result_06 = longestCommonPrefix(["daf","dax","dat"])                   // "da"
// const result_06 = longestCommonPrefix(["d","d","d","d"])                     // "d"
// const result_06 = longestCommonPrefix(["d","d","d"])                         // "d"
// const result_06 = longestCommonPrefix(["a"])                                 // "a"
// const result_06 = longestCommonPrefix(["flower","flower","flower","flower"]) // "flower"
// const result_06 = longestCommonPrefix(["cir","car"])                         // "c"

console.log("result: ", result_06)