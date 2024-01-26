export function fetchCount(amount = 1) { //make a function
  return new Promise(async (resolve) =>{
    const response = await fetch('http://') 
    const data = await response.json()
    resolve({data})
  }
  );
}
