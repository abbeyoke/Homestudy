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


(function(){
  'use strict';
  describe("Car Class: Create a car, make it drive", function() {

    it("The car should be a type of `object`, and an instance of the `Car` class", function() {
      var honda = new Car('Honda');
      expect(typeof honda).toEqual(typeof {});
      expect(honda instanceof Car).toBeTruthy();
    });

    it("The car should be called 'General' if no name is passed as a parameter", function() {
      var gm = new Car();
      expect(gm.name).toEqual('General');
      expect(gm.model).toBe('GM');
    });

    it("The car name and model should be a property of the car", function() {
      var toyota  = new Car('Toyota', 'Corolla');
      expect(toyota.name).toBe('Toyota');
      expect(toyota.model).toBe('Corolla');
    });

    it("The car shoud have four (4) doors except its a Porshe or Koenigsegg", function() {
      var opel  = new Car('Opel', 'Omega 3');
      expect(opel.numOfDoors).toBe(4);

      var porshe = new Car('Porshe', '911 Turbo');
      expect(porshe.numOfDoors).toBe(2);
      porshe.drive(5);
      expect(porshe.speed).toBe('250 km/h');
      expect((function(){return new Car('Koenigsegg', 'Agera R');}()).numOfDoors).toBe(2);
    });

    it("The car shoud have four (4) wheels except its a type of trailer", function() {
      var man  = new Car('MAN', 'Truck', 'trailer');
      expect(man.numOfWheels).toBe(8);
      expect(man.isSaloon).toBe(false);

      var koenigsegg = new Car('Koenigsegg', 'Agera R');
      expect(koenigsegg.numOfWheels).toBe(4);
      expect(koenigsegg.isSaloon).toBeTruthy();
    });

    it("The Trailer should have speed 0 km/h until you put `the pedal to the metal`", function() {
      var man  = new Car('MAN', 'Truck', 'trailer');
      expect(man.speed).toBe('0 km/h');
      man.drive(7);
      expect(man.speed).toBe('77 km/h');
    });

    it("The car drive function should return the instance of the Car class", function() {
      var man  = new Car('MAN', 'Truck', 'trailer');
      var drivingMan = man.drive(7);
      expect(drivingMan instanceof Car).toBeTruthy();
      expect(typeof drivingMan.drive).toBe(typeof (function (){}));
      expect(man.speed).toBe(drivingMan.speed);
    });

  });
})();