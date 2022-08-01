//JSObjectsExercise
//Exercise 1: The Sum of an Array
// Sum of array of numbers
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    //let sum = 0;

    // iterate over each value in the array
    // add each number to the sum
    // arr.forEach((number => {
    // sum += number;
    //}));

  // Using the Array reduce method
  return arr.reduce((sum, number) => {
    return sum + number;
  }, 0);  
}

console.log(arraySum(numbers));
//239
console.log(arraySum[1, 2, 3, 4, 5]);
//undefined


//Exercise 2: Favorite Book
let favBook = {};

favBook.title = "The Talisman";
favBook.author = "Stephen King";
favBook.pageCount = 784;
favBook.readCount = 4;

console.log(favBook);

function info() {
    return '${this.title} by ${this.author} is ${this.pageCount} page(s) and has been read ${this.readCount} time(s).';
}

favBook.info = info;

console.log(favBook.info());

let favBook2 = {
    title: "Insomnia",
    author: "Stephen King",
    pageCount: 787,
    readCount: 4,
    info,
};

console.log(favBook2.info());

//Exercise 3: Reverse a String
let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
    // Identify the words based on spaces
    let words = sentence.split(" ");


//Returns a new array after returning changed values per iteration
let result = words.map((word) => {
    let letters = word.split(""); // ex "The" => [ "T", "h", "e"]
    letters.reverse(); // ex [ "e", "h", "T" ]
    return letters.join("");    
})

return result.join(" ");
}

console.log(reverseWords(sentence));
console.log(reverseWords("My name is Sherry"));
console.log(reverseWords("I am Ironman"));


//Exercise 4: Parse a CSV

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(data) {
    // Determine headers from the first row/line of the data
    // Split the header string to an array of headers
    let headers = data.slice(0, data.indexOf("\n")).split(","); // [ "name", "age" ]

    // Determine the row data
    let valuesList = data.slice(data.indexOf("\n") + 1).split("\n");

    const output = valuesList.map((row) => {
        // Seperate the values into array values
        let values = row.split(",");
        let obj = {};

        values.forEach((value, idx) => {
            if (idx < headers.length) {
                obj[headers[idx]] = value;
              } else {
                obj['misc${idx - headers.length + 1}'] = value;
              }
        });

        return obj;
    });

    return output;
}   

console.log(csvConverter(csvData));

// "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26"
// Headers: | name  | age |
//          | ----  | --- |
// Row ex:  | Frodo |  50 |
function converter(fileData) {
    // Split the fileData into rows based on every newLine character
    let rows = fileData.split("\n"); // [ "name, age", "Frodo, 50",... ]
    // Split the first row, or headers into individual strings based on the, delimiter
    let headers = rows [0].split(","); // ["name", "age"]

    let result = [] 
    // Iterate over every content row
    for (let i = 1; i < rows.length; i++) {
        let obj = {};
        let data = rows[i].split(","); // ex ["Frodo", 50]
        data.forEach((value, index) => {
            let headerName = headers[index]; // "name", "age", ...
            obj[headerName] = value;
        });
        result.push(obj);
        }

        return result;
}

