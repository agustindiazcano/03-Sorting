function bubbleSort(array){

  for(let i = 0 ; i<array.length; i++){ 
    for(let j=0; j<array.length;j++){
      if(array[j]>array[j+1]){
        let coso = array[j]
        array[j]=array[j+1]
        array[j+1]=coso
      }
    }
  }

  return array

}


// function bubbleSort(array) {
//     return array
//   }

// function swap(array){
//     /* let arr = [1,2,3,4,6,5,8] ===> inicial
//     function bubble sort
//     ler arr = [1,2,3,4,5,6,8] ===> dsps de buble sort
//     */
// }

// function inOrder(array){
  
// }


/////////////////

// function bubbleSort(array){

//   for(let i = 0 ; i<array.length; i++){ 
//     for(let j=0; j<array.length;j++){
//       if(array[j]>array[j+1]){
//         let coso = array[j]
//         array[j]=array[j+1]
//         array[j+1]=coso
//       }
//     }
//   }

//   return array

// }