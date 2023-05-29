/**
 * Hello World function
 * @param name Name of the person to greet, which can be null
 * @returns A greeting message
 */
function helloWorld(name?: string) {
    return `Hello ${name || 'World'}!`;
}

console.log(helloWorld());
console.log(helloWorld('César'));
