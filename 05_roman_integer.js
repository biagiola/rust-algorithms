function romanToInt(s) {
    const letters = s.replaceAll(" ", "").toLocaleUpperCase().split("");

    const c = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let sum = 0

    for (let i = 0; i < letters.length; i++) {
        if (c[letters[i]] >= c[letters[i + 1]] || i === letters.length - 1) {
            sum += c[letters[i]]
        }
        else {
            sum -= c[letters[i]]
        }
    }
    
    console.log("result", sum)
    return sum
};

// romanToInt("XXIVV") // invalid
romanToInt("MCMXCIV") // 1994
romanToInt("MCDLXXVI") // 1476
romanToInt("XXXIV") // 34
romanToInt("XXIV") // 24
romanToInt("III") // 3
romanToInt("MCMXC") // 1990
romanToInt("CDXLIV") // 444
romanToInt("IX") // 9
romanToInt("IV") // 4