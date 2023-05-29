function helloWorld(name?: string) {
    return `Hello ${name || 'World'}!`;
}

console.log(helloWorld());
console.log(helloWorld('César'));
