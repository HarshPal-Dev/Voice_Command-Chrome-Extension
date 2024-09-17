let recognition;

function startRecognition() {
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
            console.log('Voice recognition started');
        };

        recognition.onresult = (event) => {
            const command = event.results[event.results.length - 1][0].transcript.trim();
            console.log('Command received:', command);
            handleVoiceCommand(command);
        };

        recognition.onerror = (event) => {
            console.error('Recognition error:', event.error);
        };

        recognition.onend = () => {
            console.log('Voice recognition ended');
        };

        recognition.start();
    } else {
        console.error('Speech recognition not supported in this browser');
    }
}

function stopRecognition() {
    if (recognition) {
        recognition.stop();
        recognition.onend = null; // Prevent auto-restart
        console.log('Voice recognition stopped');
    }
}

function handleVoiceCommand(command) {
    console.log('Handling command:', command); // Add logging for debugging
    if (command === 'scroll down') {
        window.scrollBy(0, 100);
    } else if (command === 'scroll up') {
        window.scrollBy(0, -100);
    } else if (command === 'go to top') {
        window.scrollTo(0, 0);
    } else if (command === 'go to bottom') {
        window.scrollTo(0, document.body.scrollHeight);
    } else if (command === 'refresh page') {
        location.reload();
    } else {
        chrome.runtime.sendMessage({ command: command }, (response) => {
            if (chrome.runtime.lastError) {
                console.error('Error:', chrome.runtime.lastError.message);
            }
            if (!response || !response.success) {
                alert('Command not recognized: ' + command);
            }
        });
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Message received in content script:', request);
    if (request.command === 'startListening') {
        startRecognition();
        sendResponse({ success: true });
    } else if (request.command === 'stopListening') {
        stopRecognition();
        sendResponse({ success: true });
    } else {
        sendResponse({ success: false });
    }
    return true; // Ensure asynchronous responses
});
