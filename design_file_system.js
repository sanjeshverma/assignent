const designFileSystem = input => {
    const size = input.length;
    if(size == 0) return [];
    input.sort();
    const fileObj = {};
    input = input.map((val, index) => {
        if(fileObj[val]){
            const leftIndex = val.indexOf('(');
            if (leftIndex == -1) {
                fileObj[val+'(1)'] = 1;
            } else {
                const rightIndex = val.indexOf(")");
                let existingValue = val.slice(leftIndex+1, rightIndex);                
                const newValue = Number(existingValue) + 1;
                existingValue = val.slice(0,leftIndex);
                fileObj[existingValue+ '(' + newValue + ')'] = 1
            }
        } else {
            fileObj[val] = 1;
        }
    })
    return Object.keys(fileObj);
}
// const fileNames = ["Valorant","Valorant(1)","Valorant","Valorant(2019)"];
const fileNames = ["naruto","naruto(1)","naruto(2)","naruto(3)", "naruto"] // output =[ 'naruto', 'naruto(1)', 'naruto(2)', 'naruto(3)', 'naruto(4)']
console.log(designFileSystem(fileNames));