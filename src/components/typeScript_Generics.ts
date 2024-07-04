export const typeScriptGenerics: string = `
<div id='components'>
    <h2>TypeScript Generics</h2>

    <h3>Generics</h3>
    <p>Generics provide a way to create reusable components that work with a variety of types rather than a single type:</p>
    <pre>
        <code>
            function identity<T>(arg: T): T {
                return arg;
            }

            let output1 = identity<string>('Hello'); // Output: Hello
            let output2 = identity<number>(123);     // Output: 123

            console.log(output1);
            console.log(output2);
        </code>
    </pre>

    <h3>Generic Constraints</h3>
    <p>Generic constraints restrict the types that can be used in a generic function or class:</p>
    <pre>
        <code>
            interface Lengthwise {
                length: number;
            }

            function logLength<T extends Lengthwise>(arg: T): T {
                console.log(arg.length);
                return arg;
            }

            logLength({ length: 10, value: 'Hello' }); // Output: 10
            // logLength(3); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
        </code>
    </pre>

    <h3>Generic Interfaces</h3>
    <p>Generic interfaces allow you to create interfaces that can work with various types:</p>
    <pre>
        <code>
            interface KeyValuePair<K, V> {
                key: K;
                value: V;
            }

            let kvp: KeyValuePair<string, number> = { key: 'Age', value: 30 };

            console.log(kvp); // Output: { key: 'Age', value: 30 }
        </code>
    </pre>

    <h3>Generic Classes</h3>
    <p>Generic classes enable you to create classes that can work with different types:</p>
    <pre>
        <code>
            class GenericNumber<T> {
                zeroValue: T;
                add: (x: T, y: T) => T;

                constructor(zeroValue: T, add: (x: T, y: T) => T) {
                    this.zeroValue = zeroValue;
                    this.add = add;
                }
            }

            let myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);

            console.log(myGenericNumber.add(5, 10)); // Output: 15
        </code>
    </pre>
</div>
`;
