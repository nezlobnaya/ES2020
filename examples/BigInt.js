// Using BigInt
const maxInteger = Number.MAX_SAFE_INTEGER;

const maxIntegerBigInt = BigInt(maxInteger);
console.info(maxIntegerBigInt); // 9007199254740991n
console.info(maxIntegerBigInt + 1n); // 9007199254740992n
console.info(maxIntegerBigInt + 2n); // 9007199254740993n 
console.info(maxIntegerBigInt + 3n); // 9007199254740994n 
console.info(maxIntegerBigInt + 200n); // 9007199254741191n
console.info(maxIntegerBigInt * 200n); // 1801439850948198200n
