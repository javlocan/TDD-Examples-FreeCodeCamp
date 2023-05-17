
export const telephoneCheck = (str) => {
  // str to array of integers
  const arrAll = str.split('').map((char)=>{return parseInt(char)})

  const regNumber = /^\d$/
  const regNoSym = /[^\d-()\s]/g
  console.log(str.match(regNoSym),regNoSym.test(str))  //control other characters
 
  if(str.match(regNoSym)!==null){  
      return false  }

  const arrHyphen = str.split('-') // son string aqui, es más fácil
  // here we pass only the numbers for some useful comprobations

  const arrNum = arrAll.filter((char)=>{return regNumber.test(char)})
  const count = arrNum.length


  if(count===10||count===11){ //para longitudes de 10 u 11

 

    if(count===11){    // primero controlar el 11 con 1 (codigo de pais)
      if(arrNum[0]!==1){ return false }
    }
    if(arrHyphen.length>1){ // lo de los hyphens lo hago con split
      if(arrHyphen.length>3){ return false }//mas de dos guiones
      if(arrHyphen[arrHyphen.length-1].length!==4){ return false } // control guiones
      if(arrHyphen.length===3&&arrHyphen[1].length!==3){ return false }
    }
    if(/[(]/.test(str)||/[)]/.test(str)){ 
      if(str.match(/([(][^)]*[)])/)===null||str.match(/([(][^)]*[)])/)[0].length!==5){
      return false 
      }
     
    }
  
      

    return true
  }

  return false
}


telephoneCheck('(555)5(55?)-5555')