export const typeAliasAndStringLiteral: string = `
<div id='components'>

    <h2>Type Alias</h2>
    <p>Type aliases allow you to create a new name for an existing type. They are useful for simplifying complex type definitions and improving code readability.</p>
    
    <h4>Defining a Type Alias</h4>
    <p>You can define a type alias using the <code>type</code> keyword:</p>
    <pre>
        <code>
            type Point = {
                x: number;
                y: number;
            };

            let point: Point = { x: 10, y: 20 };
        </code>
    </pre>
    
    <h4>Using Type Alias with Union Types</h4>
    <p>Type aliases can be used with union types:</p>
    <pre>
        <code>
            type ID = number | string;

            let userId: ID;
            userId = 101;
            userId = '101';
        </code>
    </pre>
    
    <h4>Type Alias for Function Types</h4>
    <p>You can also use type aliases to define function types:</p>
    <pre>
        <code>
            type Greet = (name: string) => string;

            const greet: Greet = (name: string) => \`Hello, \${name}\`;
        </code>
    </pre>

    <h2>String Literal Types</h2>
    <p>String literal types allow you to specify exact string values a variable can have. They are useful for creating types that can only have specific string values.</p>
    
    <h4>Defining String Literal Types</h4>
    <p>You can define a string literal type by specifying the exact strings:</p>
    <pre>
        <code>
            type Direction = 'up' | 'down' | 'left' | 'right';

            let move: Direction;
            move = 'up';    // OK
            move = 'down';  // OK
            move = 'left';  // OK
            move = 'right'; // OK
            move = 'forward'; // Error: Type '"forward"' is not assignable to type 'Direction'.
        </code>
    </pre>
    
    <h4>Using String Literal Types with Functions</h4>
    <p>String literal types can be used in function parameters to restrict the allowed values:</p>
    <pre>
        <code>
            function moveDirection(direction: Direction) {
                console.log(\`Moving \${direction}\`);
            }

            moveDirection('up');   // OK
            moveDirection('down'); // OK
            moveDirection('forward'); // Error: Argument of type '"forward"' is not assignable to parameter of type 'Direction'.
        </code>
    </pre>
    
    <h4>Combining String Literal Types with Type Aliases</h4>
    <p>You can combine string literal types with type aliases for more complex types:</p>
    <pre>
        <code>
            type VerticalDirection = 'up' | 'down';
            type HorizontalDirection = 'left' | 'right';
            type Direction = VerticalDirection | HorizontalDirection;

            let direction: Direction;
            direction = 'up';    // OK
            direction = 'right'; // OK
            direction = 'forward'; // Error: Type '"forward"' is not assignable to type 'Direction'.
        </code>
    </pre>

</div>
`;
