export const typeScriptTypes: string = `
<div id='components'>
    <h2>TypeScript Types</h2>
    <p>There are two types in TypeScript:</p>
    <ul>
        <li><strong>Primitive types:</strong> string, number, boolean, null, undefined, symbol.</li>
        <li><strong>Object types:</strong> arrays, classes, interfaces, functions, and objects.</li>
    </ul>
    <pre>
        <code>
            // Primitive types
            let name: string = 'Alice';
            let age: number = 30;
            let isActive: boolean = true;
            let myNull: null = null;
            let myUndefined: undefined = undefined;
            let uniqueId: symbol = Symbol('id');

            // Object types
            let numbersArray: number[] = [1, 2, 3, 4, 5];
            
            class Person {
                name: string;
                age: number;

                constructor(name: string, age: number) {
                    this.name = name;
                    this.age = age;
                }

                greet() {
                    return \`Hello, my name is \${this.name} and I'm \${this.age} years old.\`;
                }
            }

            interface Printable {
                print(): void;
            }

            function printMessage(message: string): void {
                console.log(message);
            }

            let alice: Person = new Person('Alice', 30);
            let printer: Printable = {
                print() {
                    console.log('Printing...');
                }
            };

            printMessage(alice.greet());
            printer.print();
        </code>
    </pre>
</div>
`;
