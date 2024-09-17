const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const statusDiv = document.getElementById('status');
const errorMessageDiv = document.getElementById('error-message');

function updateStatus(isListening) {
    statusDiv.textContent = isListening ? 'Status: Listening' : 'Status: Not Listening';
    startButton.disabled = isListening;
    stopButton.disabled = !isListening;
}

function handleResponse(response, action) {
    if (chrome.runtime.lastError) {
        console.error('Error:', chrome.runtime.lastError.message);
        errorMessageDiv.textContent = `Failed to ${action}`;
        return;
    }
    if (response && response.success) {
        updateStatus(action === 'startListening');
        errorMessageDiv.textContent = '';
    } else {
        errorMessageDiv.textContent = `Failed to ${action}`;
    }
}

startButton.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
            chrome.tabs.sendMessage(tabs[0].id, { command: 'startListening' }, (response) => {
                handleResponse(response, 'startListening');
            });
        } else {
            console.error('No active tab found');
            errorMessageDiv.textContent = 'No active tab found';
        }
    });
});

stopButton.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
            chrome.tabs.sendMessage(tabs[0].id, { command: 'stopListening' }, (response) => {
                handleResponse(response, 'stopListening');
            });
        } else {
            console.error('No active tab found');
            errorMessageDiv.textContent = 'No active tab found';
        }
    });
});

updateStatus(false);
