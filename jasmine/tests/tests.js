// testing code goes here

'use strict'



var myApp = require('../app/library.js');

(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {
      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toBe([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toBe([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toBe([2, 78]);
      });
	  
	  it('should return [3, 12] for [3, 4, 5, 6, 12, 8]', function () {
        expect(findMinMax([3, 4, 5, 6, 12, 8])).toBe([3, 12]);
      });
	  
	  it('should return [4, 24] for [4, 6, 8, 10, 12, 14, 16, 20, 24]', function () {
        expect(findMinMax([4, 6, 8, 10, 12, 14, 16, 20, 24])).toBe([4, 24]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toBe([4]);
      });

    });

  });

})();