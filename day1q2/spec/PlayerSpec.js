/*describe("Player", function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
});
*/

/*(function() {
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

})();*/


describe("List of Prime Numbers from 2 to n, where n is the function argument ", function() {
  describe("Numbers less than 2", function() {

    it("should return an empty array for 0", function() {
      expect(getPrimes(0)).toEqual([]);
    });

    it("should return an empty array for 1", function() {
      expect(getPrimes(1)).toEqual([]);
    });

  });

  describe("Number equal to 2", function() {

    it("should return '[2]' for 2", function() {
      expect(getPrimes(2)).toEqual([2]);
    });

  });

  describe("Numbers above 2", function() {

    it("should return '[ 3, 5, 7, 11, 13, 17, 19 ]' for 22", function() {
      expect(getPrimes(22)).toEqual([ 3, 5, 7, 11, 13, 17, 19 ]);
    });

    it("should return '[ 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]' for 46", function() {
      expect(getPrimes(46)).toEqual([ 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]);
    });

    it("should return '[ 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ]' for 32", function() {
      expect(getPrimes(32)).toEqual([ 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ]);
    });

  });
  
  describe("Argument must be a number", function() {

    it("should return 'value must be a number' for `string`", function() {
      expect(getPrimes('string')).toEqual('value must be a number');
    });

    it("should return 'value must be a number' for `true`", function() {
      expect(getPrimes(true)).toEqual('value must be a number');
    });

  });
  

});