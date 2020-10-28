// A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive.

let memoryPlainInput = prompt('Please input the size of your flash drive memory.');
memory = parseInt(memoryPlainInput) * 1000;

const FILE_SIZE = 820;

let numberOfFiles = Math.floor(memory / FILE_SIZE);

console.log(`Approximately ${numberOfFiles} 820MB files can be stored on a flash drive of ${memoryPlainInput} GB`);