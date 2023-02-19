let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
]; 

let weakMap = new WeakMap();

messages.forEach(message => {
    weakMap.set(message, new Date());
})

console.log("Сообщение 1 было открыто в: " + weakMap.get(messages[1]));