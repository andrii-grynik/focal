const raisinAlarmArray = function (cookie) {
  const result = []
  for (const item of cookie) {
    if (item.includes('🍇')) {
      result.push('Raising Alert!')
    } else {
      result.push('All Good!')
    }
  }
  return result
}

console.log(
  raisinAlarmArray([
    ['🍫', '🍫', '🍇', '🍫'],
    ['🍫', '🍇', '🍫', '🍫', '🍇'],
    ['🍫', '🍫', '🍫']
  ])
)
