export const typeInference: string = `
<div id='components'>
    <h2>Type Inference</h2>
    <p>TypeScript's type inference allows the compiler to deduce the types of variables based on their initialization values. Here's how type inference works in TypeScript:</p>
    
    <pre>
        <code>
        // Variable declarations without explicit type annotations
        let name = 'Alice';        // Type inferred as 'string'
        let age = 30;              // Type inferred as 'number'
        let isActive = true;       // Type inferred as 'boolean'
        let numbers = [1, 2, 3];   // Type inferred as 'number[]'
        
        // Object type inference
        let person = {            // Type inferred as { name: string, age: number }
        name: 'Bob',
        age: 25
        };
        
        // Function with type inference
        function greet(person: string) {
            return person;
            }
            
        // Type of 'greet' is inferred as (person: string) => string
            
        </code>
            
    </pre>
</div>
`;
