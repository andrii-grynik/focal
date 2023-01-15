function sumToOne(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumToOne(n - 1);
}

console.log(sumToOne(4))

//"return 4 + (4-1) then (3 -1) then (2-1) " steps recur within return and do not start from the top.