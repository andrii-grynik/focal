function findWaldo (list, found) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === 'Waldo') {
      found(i)
    }
  }
}

function actionWhenFound (i) {
  console.log('Found Waldo at index ' + i + '!')
}

findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], actionWhenFound)
