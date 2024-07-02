export const typeScriptFunctions: string = `
<div id='components'>
    <h2>Functions in TypeScript</h2>
    
    <h3>Functions</h3>
    <p>Functions in TypeScript allow you to define reusable blocks of code.</p>
    <pre>
        <code>
            function greet(name: string): string {
                return \`Hello, \${name}!\`;
            }

            let greeting: string = greet('Alice');
            console.log(greeting); // Output: Hello, Alice!
        </code>
    </pre>
    
    <h3>Function Types</h3>
    <p>Function types describe the types of function parameters and return values:</p>
    <pre>
        <code>
            type Greet = (name: string) => string;

            const greet: Greet = (name: string) => \`Hello, \${name}\`;
        </code>
    </pre>

    <h3>Optional Parameters</h3>
    <p>Optional parameters allow flexibility in function calls by making certain parameters optional:</p>
    <pre>
        <code>
            function printName(firstName: string, lastName?: string) {
                if (lastName) {
                    console.log(\`Full Name: \${firstName} \${lastName}\`);
                } else {
                    console.log(\`First Name: \${firstName}\`);
                }
            }

            printName('John');        // Output: First Name: John
            printName('John', 'Doe'); // Output: Full Name: John Doe
        </code>
    </pre>

    <h3>Default Parameters</h3>
    <p>Default parameters provide default values when no argument or undefined is passed:</p>
    <pre>
        <code>
            function greet(name: string = 'Guest') {
                console.log(\`Hello, \${name}!\`);
            }

            greet();      // Output: Hello, Guest!
            greet('Alice'); // Output: Hello, Alice!
        </code>
    </pre>

    <h3>Rest Parameters</h3>
    <p>Rest parameters allow functions to accept an indefinite number of arguments as an array:</p>
    <pre>
        <code>
            function sum(...numbers: number[]): number {
                return numbers.reduce((a, b) => a + b, 0);
            }

            let result: number = sum(1, 2, 3, 4, 5);
            console.log(result); // Output: 15
        </code>
    </pre>

    <h3>Function Overloading</h3>
    <p>Function overloading allows you to define multiple function signatures for the same function name:</p>
    <pre>
        <code>
            function display(name: string): void;
            function display(age: number): void;
            
            function display(value: any): void {
                console.log('Displaying:', value);
            }

            display('John');  // Output: Displaying: John
            display(30);      // Output: Displaying: 30
        </code>
    </pre>

</div>
`;
