// Array.from()
// 유사 배열(Array-like)을 실제 배열로 반환

const arraylike = {
    0:'A',
    1:'B',
    2: 'C',
    length:3
}

console.log(arraylike.constructor === Array)
console.log(arraylike.constructor === Object)

Array.from(arraylike).forEach(item => console.log(item))

// Array.isArray()
// 배열 데이터인지 확인

const array = ['A', 'B', 'C']
const arraylike = {
    0:'A',
    1:'B',
    2:'C',
    length:3
}

console.log(Array.isArray(array))  // true
console.log(Array.isArray(arraylike)) // false