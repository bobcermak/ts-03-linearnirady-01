let x_start:number = 6
let n_pocet:number 
let c_nextNumber:number = 4
let s_continue:number



n_pocet = 1

console.log(x_start)

while (n_pocet <= 44) {

  if(x_start) {
    c_nextNumber = x_start += 4
    n_pocet += 1

    if(n_pocet % 5 === 0) {
      continue
    }
    console.log(c_nextNumber)
  }
}