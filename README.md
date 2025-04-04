# 🎙️ Voice Command Chrome Extension

This Chrome extension allows you to perform basic browser actions using voice commands. It's a lightweight productivity tool built with the Web Speech API and Chrome Extension APIs.

---

## 🚀 Features

- 🎤 Use voice to control basic browser functions  
- 🔄 Refresh pages hands-free  
- 🧭 Switch to the next tab  
- ⬆️⬇️ Scroll pages up or down  
- 📺 Open YouTube with one command  
- 🎙️ Real-time voice recognition with Web Speech API  

---

## 📸 Demo

<!-- Add screenshots or demo GIFs here -->
![Extension Popup UI](path/to/image1.png)  
![Voice Command in Action](path/to/image2.gif)  

---

## 🛠️ Tech Stack

- **JavaScript** – Logic for recognizing and handling voice commands  
- **HTML + CSS** – UI for the extension popup  
- **Web Speech API** – Browser's built-in speech recognition  
- **Chrome Extension APIs** – Tab and window management  

---

## 📁 Folder Structure

```
voice-command-extension/
├── manifest.json         # Extension metadata
├── popup.html            # Popup interface
├── popup.js              # Voice command logic
├── icons/                # Extension icon assets
└── styles.css            # Popup styling
```

---

## 🧑‍💻 Installation

1. **Clone this repository**
   ```bash
   git clone https://github.com/your-username/voice-command-extension.git
   ```

2. **Open Chrome** and go to `chrome://extensions/`

3. **Enable Developer Mode** (top-right switch)

4. **Click "Load Unpacked"** and select the extension folder

5. **Click the extension icon** in your browser

6. **Allow microphone access** when prompted

---

## 🗣️ Supported Voice Commands

| Command             | Action                        |
|---------------------|-------------------------------|
| "Scroll down"       | Scrolls the current page down |
| "Scroll up"         | Scrolls the current page up   |
| "Refresh"           | Reloads the current page      |
| "Next tab"          | Switches to the next tab      |
| "Open YouTube"      | Opens YouTube in a new tab    |

---

## 📌 Permissions Used

- `activeTab` – Interact with the current tab  
- `tabs` – Open and switch tabs  
- `microphone` – Capture your voice input  

---

## 🧱 Future Improvements

- Add more voice commands (e.g., close tab, go back)  
- Support natural language variations  
- Dark mode UI for popup  

---

## 🙌 Contributing

Want to add more commands or improve UI/UX?  
Feel free to fork the repo and open a pull request. All contributions are welcome!

---


## 👤 Author

Made with ❤️ by [Harsh Pal]  
[GitHub](https://github.com/HarshPal-Dev)
