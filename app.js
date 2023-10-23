function tribonacci(signature,n){

    for ( let i = 3; i < n; i++ ){
      signature[i] = signature[i-1] + signature[i-2] + signature[i-3];
    }
    return signature.slice(0,n);
}
// usage exampe
const signature=[0,1,1];
const n=10;
const result = tribonacci(signature,n);
console.log(result) 
console.log('hello');