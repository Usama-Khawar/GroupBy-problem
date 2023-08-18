const array = [
  { id: 'one', next: 'two', value: null },
  { id: 'two', next: 'three', value: null },
  { id: 'three', next: 'null', value: null },
]

/***********************************  Solution 1 ****************************************/
const val = (next, arr) => {
  return array.reduce((acc, curr) => {
    if (curr.id === next) {
      acc = curr
    }
    return acc
  }, {})
}

const problem = array.map((curr) => {
  if (curr.next === 'null') {
    return curr
  }
  let result = curr
  while (curr.next !== 'null') {
    curr.value = val(curr.next, array)
    curr = curr.value
  }
  return result
})

// console.log(problem);

/***********************************  Solution 2 ****************************************/

const output = array.map((curr, index) => {
  let result = curr
  if (curr.next !== 'null') {
    while (curr.next !== 'null') {
      const nextIndex = array.findIndex((item) => item.id === curr.next)
      curr.value = { ...array[nextIndex] }
      curr = curr.value
    }
  }
  return result
})

console.log(output)
