
(function(){
  'use strict';
  describe("Employee Class: Create Employees for a company", function() {

    it("The employee should be a type of `object`, and an instance of the `Employee` class", function() {
      var moses = new Employee('Moses');
      expect(typeof moses).toEqual(typeof {});
      expect(moses instanceof Employee).toBeTruthy();
    });

    it("The employee's first name and last name should be 'John' and 'Smith'respectively if no name is passed as a parameter", function() {
      var john = new Employee();
      expect(john.fname).toEqual('John');
      expect(john.lname).toBe('Smith');
    });

    it("The employee fname and lname should be a property of the Employee", function() {
      var akinjide  = new Employee('Akinjide', 'Adeolu', 12, '6000usd');
      expect(akinjide.fname).toEqual('Akinjide');
      expect(akinjide.lname).toEqual('Adeolu');
	  expect(akinjide.level).toEqual(12);
	  expect(akinjide.salary).toEqual('6000usd');
    });

    it("The michael should pick the default salary while moses salary in the arguement should replace the default value", function() {
      var michael  = new Employee('Michael', 'Carson', 10);
      expect(michael.salary).toBe('4000usd');

      var moses = new Employee('Moses', 'Adenugba', 7);
	  moses.salary = '2500usd';
      expect(moses.salary).toBe('2500usd');
    });

    it("The concatenation of emmanuel's fname and last name to give his full name", function() {
      var emmanuel = new Employee('Emmanuel', 'Christian', 12, '6000usd');
	  var fullname = emmanuel.fname +" " + emmanuel.lname;
      expect(fullname).toBe('Emmanuel Christian');
    });

  });
})();

