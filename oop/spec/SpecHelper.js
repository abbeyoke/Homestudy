/*

var Car = function (name, model){
	this.name = name || 'General';
	this.model = model || 'GM';
	this.type;
	this.numOfDoors = 4;
	this.drive;
	this.speed;
	this.msg;
	
}

var toyota = new car('Toyota', 'Corolla');

var porshe = new Car('Porshe', '911 Turbo');
porshe.numOfDoors = 2;
porshe.drive(5);
porshe.speed = '250 km/h';

var opel  = new Car('Opel', 'Omega 3');*/

var Employee = function (fname, lname, level, salary){
	this.fname = fname || 'John';
	this.lname = lname || 'Smith';
	this.level = level;
	this.salary = salary || '4000usd';
	this.tax = 0.1;
}

var michael = new Employee('Michael', 'Carson', 10);
michael.salary = '4000usd';

var moses = new Employee('Moses', 'Adenugba', 7);
moses.salary = '2500usd';

var akinjide = new Employee('Akinjide', 'Adeolu', 12, '6000usd');

var emmanuel = new Employee('Emmanuel', 'Christian', 12, '6000usd');
var fullname = emmanuel.fname +" " + emmanuel.lname;

