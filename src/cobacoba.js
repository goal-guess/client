let obj = [
  {
    name: 'a'
  },
  {
    name: 'b'
  }
]

function test() {
  let tot = 0
  obj.forEach(element => {
    tot++
  });
  return tot
}

// console.log(test())

