/**
 * Builds a message based on the name provided
 * @param name The name of the person to greet
 * @returns A greeting message
 */
function greet(name: string): string {
    return `Hello ${name}`;
}

/**
 * Contains the message that will be displayed
 */
let message: string = greet('César');
console.log(message);
