function findWaldo (list, found) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === 'Waldo') {
      found(i)
    }
  }
}

findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], function (index) {
  console.log(`Found Waldo at ${index}! In stealth mode! Sneaky me!`)
})
