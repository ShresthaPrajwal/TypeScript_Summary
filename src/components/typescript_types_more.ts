export const typeScriptTypesMore: string = `
<div id='components'>
    <h2>TypeScript Types More</h2>
    <p>TypeScript offers a variety of types to enforce strong typing and improve code reliability.</p>

    <h3>Number Type</h3>
    <p>The <code>number</code> type represents floating-point numbers:</p>
    <pre>
        <code>
            let price: number;
            let price = 9.95;
        </code>
    </pre>
    <p>It supports decimal, hexadecimal, binary, and octal literals.</p>
    <pre>
        <code>
            let decimal: number = 42;
            let hex: number = 0x2a;
            let binary: number = 0b101010;
            let octal: number = 0o52;
        </code>
    </pre>

    <h3>String Type</h3>
    <p>The <code>string</code> type represents textual data:</p>
    <pre>
        <code>
            let name: string = 'Alice';
            let greeting: string = \`Hello, \${name}!\`;
        </code>
    </pre>

    <h3>Boolean Type</h3>
    <p>The <code>boolean</code> type represents true/false values:</p>
    <pre>
        <code>
            let isActive: boolean = true;
        </code>
    </pre>

    <h3>Object Type</h3>
    <p>The <code>object</code> type represents non-primitive types:</p>
     <pre>
        <code>
            let person: { name: string, age: number } = { name: 'Alice', age: 30 };
        </code>
    </pre>
    <p>In TypeScript, there is a distinction between <code>object</code> and <code>Object</code>:</p>
    <ul>
        <li><code>object</code>: Represents any non-primitive type (i.e., not <code>number</code>, <code>string</code>, <code>boolean</code>, <code>symbol</code>, <code>null</code>, or <code>undefined</code>).</li>
        <li><code>Object</code>: Represents all JavaScript values except <code>null</code> and <code>undefined</code>. Essentially, it includes all primitives and non-primitives.</li>
    </ul>
    <pre>
        <code>

            let obj1: object;
            obj1 = { name: 'Pk' }; // Valid
            obj1 = [1, 2, 3]; // Valid
            obj1 = () => {}; // Valid
            obj1 = 42; // Error: Type 'number' is not assignable to type 'object'


            let obj2: Object;
            obj2 = { name: 'Sk' }; // Valid
            obj2 = [1, 2, 3]; // Valid
            obj2 = () => {}; // Valid
            obj2 = 42; // Valid
            obj2 = null; // Error: Type 'null' is not assignable to type 'Object'

        </code>
    </pre>

    <h3>Array Type</h3>
    <p>The <code>Array</code> type represents a collection of elements:</p>
    <pre>
        <code>
            let numbers: number[] = [1, 2, 3];
            let strings: Array<string> = ['a', 'b', 'c'];
        </code>
    </pre>

    <p>To store values of mixed types in an array, use union types:</p>
    <pre>
        <code>
            let mixedArray: (string | number | boolean)[] = ['Alice', 30, true];
        </code>
    </pre>

    <h3>Tuple Types</h3>
    <p>Tuples allow you to express an array with a fixed number of elements:</p>
    <pre>
        <code>
            let tuple: [string, number] = ['Alice', 30];
        </code>
    </pre>
    <p>Since TypeScript 3.0, a tuple can have optional elements specified using the question mark (?) postfix.</p>
    <pre>
        <code>
            let bgColor, headerColor: [number, number, number, number?];
            bgColor = [0, 255, 255, 0.5];
            headerColor = [0, 255, 255];
        </code>
    </pre>
    <h3>Enum Types</h3>
    <p>Enums allow a developer to define a set of named constants:</p>
    <pre>
        <code>
            enum Color { Red, Green, Blue }
            let c: Color = Color.Green;

            enum StatusCodes {
                NotFound = 404,
                Success = 200,
                Accepted = 202,
                BadRequest = 400
                }
            // logs 404
            console.log(StatusCodes.NotFound);
            // logs 200
            console.log(StatusCodes.Success);
            </code>
            </pre>
            
            
    <h3>Any Type</h3>
    <p>The <code>any</code> type allows any type of value to be assigned:</p>
    <pre>
        <code>
            let randomValue: any = 10;
            randomValue = 'Hello';
            randomValue = true;
        </code>
    </pre>

    <h3>Never Type</h3>
    <p>The <code>never</code> type represents values that never occur:</p>
    <pre>
        <code>
            function error(message: string): never {
                throw new Error(message);
            }
        </code>
    </pre>

    <h3>Union Types</h3>
    <p>Union types allow a variable to hold multiple types:</p>
    <pre>
        <code>
            let value: string | number;
            value = 'Hello';
            value = 10;
        </code>
    </pre>
</div>
`;
