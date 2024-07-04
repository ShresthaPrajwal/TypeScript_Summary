export const typeScriptClassesInterfaces: string = `
<div id='components'>
    <h2>Classes and Interfaces in TypeScript</h2>

    <h3>Classes</h3>
    <p>Classes in TypeScript provide a way to define blueprints for creating objects with properties and methods:</p>
    <pre>
        <code>
            class Person {
                name: string;
                age: number;

                constructor(name: string, age: number) {
                    this.name = name;
                    this.age = age;
                }

                greet() {
                    console.log(\`Hello, my name is \${this.name}.\`);
                }
            }

            let person = new Person('Alice', 30);
            person.greet(); // Output: Hello, my name is Alice.
        </code>
    </pre>
    
    <h3>Access Modifiers</h3>
    <p>TypeScript provides three access modifiers to encapsulate the members of a class: <code>public</code>, <code>private</code>, and <code>protected</code>.</p>
    <pre>
        <code>
            class Employee {
                public name: string;
                private salary: number;
                protected department: string;

                constructor(name: string, salary: number, department: string) {
                    this.name = name;
                    this.salary = salary;
                    this.department = department;
                }

                public getSalary(): number {
                    return this.salary;
                }
            }

            let emp = new Employee('Bob', 50000, 'Engineering');
            console.log(emp.name); // OK
            console.log(emp.getSalary()); // OK
            // console.log(emp.salary); // Error: Property 'salary' is private
        </code>
    </pre>
    
    <h3>Readonly Properties</h3>
    <p>Readonly properties can only be assigned once during initialization:</p>
    <pre>
        <code>
            class Car {
                readonly model: string;

                constructor(model: string) {
                    this.model = model;
                }
            }

            let car = new Car('Toyota');
            console.log(car.model); // Output: Toyota
            // car.model = 'Honda'; // Error: Cannot assign to 'model' because it is a read-only property.
        </code>
    </pre>
    
    <h3>Inheritance</h3>
    <p>Classes can extend other classes to inherit their properties and methods:</p>
    <pre>
        <code>
            class Animal {
                name: string;

                constructor(name: string) {
                    this.name = name;
                }

                move(distance: number = 0) {
                    console.log(\`\${this.name} moved \${distance} meters.\`);
                }
            }

            class Dog extends Animal {
                bark() {
                    console.log('Woof! Woof!');
                }
            }

            let dog = new Dog('Rex');
            dog.bark(); // Output: Woof! Woof!
            dog.move(10); // Output: Rex moved 10 meters.
        </code>
    </pre>
    
    <h3>Static Methods and Properties</h3>
    <p>Static members belong to the class itself rather than to instances of the class:</p>
    <pre>
        <code>
            class Utility {
                static PI: number = 3.14;

                static circleArea(radius: number): number {
                    return Utility.PI * radius * radius;
                }
            }

            console.log(Utility.circleArea(5)); // Output: 78.5
        </code>
    </pre>
    
    <h3>Abstract Classes</h3>
    <p>Abstract classes provide a base class from which other classes can derive, and cannot be instantiated directly:</p>
    <pre>
        <code>
            abstract class Shape {
                abstract area(): number;

                display(): void {
                    console.log('Displaying area:', this.area());
                }
            }

            class Rectangle extends Shape {
                width: number;
                height: number;

                constructor(width: number, height: number) {
                    super();
                    this.width = width;
                    this.height = height;
                }

                area(): number {
                    return this.width * this.height;
                }
            }

            let rect = new Rectangle(10, 20);
            rect.display(); // Output: Displaying area: 200
        </code>
    </pre>
    
    <h3>Interfaces</h3>
    <p>Interfaces define the structure of an object by specifying its properties and methods:</p>
    <pre>
        <code>
            interface Person {
                name: string;
                age: number;
                greet(): void;
            }

            let person: Person = {
                name: 'Alice',
                age: 30,
                greet() {
                    console.log(\`Hello, my name is \${this.name}.\`);
                }
            };

            person.greet(); // Output: Hello, my name is Alice.
        </code>
    </pre>
    
    <h3>Extending Interfaces</h3>
    <p>Interfaces can extend other interfaces to inherit their properties and methods:</p>
    <pre>
        <code>
            interface Animal {
                name: string;
                move(distance: number): void;
            }

            interface Mammal extends Animal {
                furColor: string;
            }

            let mammal: Mammal = {
                name: 'Dog',
                furColor: 'Brown',
                move(distance: number) {
                    console.log(\`\${this.name} moved \${distance} meters.\`);
                }
            };

            mammal.move(10); // Output: Dog moved 10 meters.
        </code>
    </pre>
</div>
`;
