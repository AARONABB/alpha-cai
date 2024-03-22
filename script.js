const chatForm = document.getElementById('chat-form');
const chatMessages = document.getElementById('chat-messages');

chatForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const response = getResponse(userInput);
    appendMessage(userInput, 'user');
    appendMessage(response, 'bot');
    document.getElementById('user-input').value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

function getResponse(input) {
    const command = input.split(' ')[0];
    const argument = input.split(' ').slice(1).join(' ');

    switch (command) {
        case 'hello':
            return 'Hello! How can I help you today?';
        case 'time':
            return `The current time is ${new Date().toLocaleTimeString()}.`;
        case 'date':
            return `Today is ${new Date().toDateString()}.`;
        case 'help':
            return 'Here are the available commands: \n 1. Hello \n 2. Time \n 3. Date \n 4. Help';
        case 'bye':
            return 'Goodbye! Have a great day!';
        case 'weather':
            return 'I am not able to provide weather information at the moment.';
        case 'news':
            return 'I am not able to provide news updates at the moment.';
        case 'joke':
            return 'Why don’t scientists trust atoms? Because they make up everything!';
        case 'open':
            return `Opening ${argument}... (This is a simulated response. Replace it with actual code to open the website.)`;
        case 'search':
            return `Searching for ${argument} on Google... (This is a simulated response. Replace it with actual code to perform the search.)`;
        default:
            return 'I do not understand that command. Type "help" to see the available commands.';
    }
}

}

function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.innerText = message;
    chatMessages.appendChild(messageElement);
}
