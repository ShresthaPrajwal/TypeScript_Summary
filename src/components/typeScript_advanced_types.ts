export const typeScriptAdvancedTypes: string = `
<div id='components'>
    <h2>Advanced Types in TypeScript</h2>

    <h3>Intersection Types</h3>
    <p>Intersection types combine multiple types into one. This allows you to merge properties from different types:</p>
    <pre>
        <code>
            interface Person {
                name: string;
                age: number;
            }

            interface Employee {
                employeeId: number;
            }

            type EmployeePerson = Person & Employee;

            let emp: EmployeePerson = {
                name: 'Alice',
                age: 30,
                employeeId: 12345
            };

            console.log(emp); // Output: { name: 'Alice', age: 30, employeeId: 12345 }
        </code>
    </pre>

    <h3>Type Guards</h3>
    <p>Type guards help in narrowing down types using specific checks within conditional blocks:</p>
    <pre>
        <code>
            function isString(value: any): value is string {
                return typeof value === 'string';
            }

            function printValue(value: string | number) {
                if (isString(value)) {
                    console.log(\`String: \${value}\`);
                } else {
                    console.log(\`Number: \${value}\`);
                }
            }

            printValue('Hello'); // Output: String: Hello
            printValue(123);     // Output: Number: 123
        </code>
    </pre>

    <h3>Type Casting</h3>
    <p>Type casting allows you to override the type determined by TypeScript and treat a variable as a different type:</p>
    <pre>
        <code>
            let someValue: any = 'this is a string';

            let strLength: number = (<string>someValue).length;
            console.log(strLength); // Output: 16

            let strLengthAs: number = (someValue as string).length;
            console.log(strLengthAs); // Output: 16
        </code>
    </pre>

    <h3>Type Assertions</h3>
    <p>Type assertions are used to tell the compiler about the type of a variable when you have more information than the compiler:</p>
    <pre>
        <code>
            let someValue: any = 'this is a string';

            let strLength: number = (someValue as string).length;
            console.log(strLength); // Output: 16

            let someElement = document.getElementById('someElement') as HTMLInputElement;
            someElement.value = 'Hello World';
        </code>
    </pre>
</div>
`;
