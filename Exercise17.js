function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if(angka <=9){
        return angka
    }
    return kaliTerusRekursif((angka-angka%10) / 10) * angka % 10
    
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6