export const typeScriptAnnotations: string = `
<div id='components'>
    <h2>TypeScript Annotations</h2>
    <p>TypeScript uses type annotations to explicitly specify types for identifiers such as variables, functions, objects, etc.<br>
    TypeScript uses the syntax ' : type' after an identifier as the type annotation, which type can be any valid type.</p>
    
    <pre>
        <code>
            let variableName: type;
            let variableName: type = value;
            const constantName: type = value;

            // Object types
            let person: { name: string, age: number };
            let employee: { id: number, name: string };
            let numbersArray: number[];
            let tuple: [string, number];
            let printer: { 
                print: () => void 
            };

            // Example usage
            person = { name: 'Alice', age: 30 };
            employee = { id: 1, name: 'Bob' };
            numbersArray = [1, 2, 3, 4];
            tuple = ['Hello', 5];
            printer = {
                print() {
                    console.log('Printing...');
                }
            };

            console.log(person);
            console.log(employee);
            console.log(numbersArray);
            console.log(tuple);
            printer.print();
        </code>
    </pre>
</div>
`;
