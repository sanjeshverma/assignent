const longestCommenPrefix = input => {
    const size = input.length;
    if(size == 0) return "";
    if(size == 1) return input[0];

    input.sort();

    const end = Math.min(input[0].length, input[size-1].length);
    let i=0; 
    while(i < end && input[0][i] == input[size-1][i]) i++;

    const prefix = input[0].substring(0,i);
    return prefix;
}

// const words_as_numbers = ["11232","121232","11111"] // output = 1
const words_as_numbers = ["11232","1123123213","11232", "112333913", "1123122"] // output = 1123
console.log(longestCommenPrefix(words_as_numbers));
