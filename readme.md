# 🖼️ Image Downloader Chrome Extension

A simple Chrome extension that allows users to **browse and download all images** (`.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`) from any webpage.

---

## 🚀 Features

- ✅ Automatically detects all visible images on a page
- 🖱️ Click to download any image in one click
- 🔍 Filter only real image files (ignores icons, logos, etc.)
- 💡 Lightweight and fast – no extra permissions or tracking

---

## 📦 Installation (For Developers)

To run this extension locally in Chrome:

1. Clone or download this repository:
   ```bash
   git clone https://github.com/tamkerra/image-downloader-extension.git
   ```

2. Open chrome and go to ``chrome://extensions/``
3. enable developer mode (top-right corner)
4. click load unpacked
5. select the project folder (make sure it contains ``manifest.json``!);
6. The extension icon should now appear in the browser toolbar!

🌐 Usage
1. Visit any webpage with images (supported: pintrest, instagram, youtube, x);
2. Click the extension icon in the toolbar
3. A popup will show all detected images
4. Click any image to download it instantly

📁 Project Structure
```bash
image-downloader-extension/
├── manifest.json         # Extension metadata
├── popup.html            # Popup UI
├── popup.js              # Main logic to extract & download images
├── background.js         # Background service worker
├── content.js            # (Optional) Content script
├── icons/                # (Optional) Extension icons
└── README.md
```

❤️ Contributing
Pull requests and suggestions are welcome!
If you find a bug or have a feature request, feel free to [open an issue](https://github.com/tamkerra/image-downloader-extension/issues).


## 📷 Preview

<img src="Screenshot 2025-07-11 044030.png">


and you can select the image and it will be downloaded..

🛠️ Coming Soon
 "Download all" button
 Filter by image size
 Optional auto-download mode