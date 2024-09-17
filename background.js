chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Message received in background script:', request);
  
    if (request.command === 'nextTab') {
      chrome.tabs.query({ currentWindow: true }, (tabs) => {
        if (chrome.runtime.lastError) {
          console.error('Error querying tabs:', chrome.runtime.lastError.message);
          sendResponse({ success: false });
          return;
        }
  
        if (tabs.length > 0) {
          const activeTab = tabs.findIndex(tab => tab.active);
          if (activeTab === -1) {
            console.error('No active tab found');
            sendResponse({ success: false });
            return;
          }
          
          const nextTab = (activeTab + 1) % tabs.length;
          chrome.tabs.update(tabs[nextTab].id, { active: true }, () => {
            if (chrome.runtime.lastError) {
              console.error('Error updating tab:', chrome.runtime.lastError.message);
              sendResponse({ success: false });
              return;
            }
            sendResponse({ success: true });
          });
        } else {
          console.error('No tabs found');
          sendResponse({ success: false });
        }
      });
    } else if (request.command === 'previousTab') {
      chrome.tabs.query({ currentWindow: true }, (tabs) => {
        if (chrome.runtime.lastError) {
          console.error('Error querying tabs:', chrome.runtime.lastError.message);
          sendResponse({ success: false });
          return;
        }
  
        if (tabs.length > 0) {
          const activeTab = tabs.findIndex(tab => tab.active);
          if (activeTab === -1) {
            console.error('No active tab found');
            sendResponse({ success: false });
            return;
          }
  
          const previousTab = (activeTab - 1 + tabs.length) % tabs.length;
          chrome.tabs.update(tabs[previousTab].id, { active: true }, () => {
            if (chrome.runtime.lastError) {
              console.error('Error updating tab:', chrome.runtime.lastError.message);
              sendResponse({ success: false });
              return;
            }
            sendResponse({ success: true });
          });
        } else {
          console.error('No tabs found');
          sendResponse({ success: false });
        }
      });
    } else {
      console.error('Unrecognized command:', request.command);
      sendResponse({ success: false });
    }
  
    return true; // Keep the message channel open for asynchronous response
  });
  