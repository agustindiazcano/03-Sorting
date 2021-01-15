// // Bubble Sort

// // 01 -----------------------------------------------------------------

// describe('Bubble Sort', function(){
//     it('Bubble Sort maneja un array vacío', function(){
//       expect( bubbleSort([]) ).toEqual( [] );
//     });
// });

// // 02 -----------------------------------------------------------------

// describe('Swap', function(){
//   it('toma un array, y un index y los swapea el elemento del indice con el siguiente', function() {
//     var arr = [1,2];
//     swap(arr, 2);
//     expect(arr).toEqual([2,1]);
//   });
// });

// // 03 -----------------------------------------------------------------

// describe('In Order', function(){
//   it('me ordena las cosas', function() {
//     var arr = [6,3,2,1];
//     swap(arr, 2);
//     expect(arr).toEqual([1,2,3,6]);
//   });
// });

// 04 -----------------------------------------------------------------

describe('Bubble Sort', function(){
  it('Recibe un array desordenado, y me lo entrega ordenado', function() {
    var arr = [6,3,2,1,4,2,4,5,6,7];

    expect(bubbleSort(arr)).toEqual([1, 2, 2, 3, 4, 4, 5, 6, 6, 7]);
  });
});

// Merge Sort

// 01-05 -----------------------------------------------------------------

describe('Merge Sort', function(){
  it('Merge Sort maneja un array vacío', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

// 02-06 -----------------------------------------------------------------

describe('Merge Sort', function(){
  it('Recibe un array desordenado, y me lo entrega ordenado', function() {
    var arr = [6,3,2,1,4,2,4,5,6,7];
    swap(arr, 2);
    expect(bubbleSort([arr])).toEqual([1, 2, 2, 3, 4, 4, 5, 6, 6, 7]);
  });
});

