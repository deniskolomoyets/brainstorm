const stringArray1 = ['Hello,', 'world']
const stringArray2 = ['Brad', 'came', 'to', 'dinner', 'with', 'us']
const stringArray3 = ['This', 'is', 'a', 'very', 'big', 'sentence', 'I', 'swear', 'you']
const stringArray4 = ['Once', 'again', 'and', 'again', 'big', 'sentence']
const stringArray5 = ['He', 'loves', 'tacos']


let strings = [
    stringArray1, stringArray2, stringArray3, stringArray4, stringArray5
]

function stringFormat(string) {
    for (var i = 0; i < string.length; i++) {
        resArray[i] = string[i].join(' ')
        return 
    };
   
}
stringFormat(strings)