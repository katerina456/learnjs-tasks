let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let openMessage = new WeakSet();

//все сообщения прочитали
messages.forEach(message => {
    openMessage.add(message);
})

console.log("Сообщение 0 было открыто: " + openMessage.has(messages[0]));