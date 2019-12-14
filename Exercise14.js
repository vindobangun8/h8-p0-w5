function changeVocals (str) {
    
    var hasil = ""
    for(i = 0;i<str.length;i++){
        switch(str[i]){
            case 'a' : hasil += 'b'
            break;
            case 'i' : hasil += 'j'
            break;
            case 'u' : hasil += 'v'
            break;
            case 'e' : hasil += 'f'
            break;
            case 'o' : hasil += 'p'
            break;
            case 'A' : hasil += 'B'
            break;
            case 'I' : hasil += 'J'
            break;
            case 'U' : hasil += 'V'
            break;
            case 'E' : hasil += 'F'
            break;
            case 'O' : hasil += 'P'
            break;
            default : hasil += str[i]
            break; 
        }
    }
    return hasil
  }
  
  function reverseWord (str) {
    //code di sini
    var hasil =""
    for(i = str.length-1;i>=0;i--){
        hasil += str[i]
    }
    return hasil
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var alfabetB='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var alfabetK='abcdefghijklmnopqrstuvwxyz'
    var hasil =''
    for(i=0;i<str.length;i++){
       
        for(j=0;j<alfabetB.length;j++){
            if(alfabetB[j] == str[i]){
                hasil +=alfabetK[j]
                found = true
            }
            else if(alfabetK[j] == str[i]){
                hasil+= alfabetB[j]
                found = true
            }
        }
        if (!found){
            hasil +=str[i]
        }
        found = false
    }
    return hasil
  }
  
  function removeSpaces (str) {
    //code di sini
    var hasil = ''
    for(i=0;i<str.length;i++){
        if(str[i] != ' '){
         hasil += str[i]
        }
    }
    return hasil
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length >=5){
        hasil = changeVocals(name)
        balik = reverseWord(hasil)
        ubah = setLowerUpperCase(balik)
        spasi = removeSpaces(ubah)
        return spasi
    }
    else{
        return 'Minimal karakter yang diiunputkan adalah 5 karakter'
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'