# 🧹 Clear the Clutter - Folder Organizer

A simple Node.js script that helps you clean up messy folders by automatically organizing files into subfolders based on their file extensions.

---

## 📂 What It Does

This script scans a directory and:
- Identifies all files (excluding `.js` and `.json`).
- Creates folders based on file extensions (e.g., `.txt`, `.png`, etc.).
- Moves each file into its respective folder.

---

## 🛠️ Technologies Used

- Node.js
- `fs/promises` and `fs` modules
- `path` module

---

## 🚀 How to Use

1. Make sure you have **Node.js** installed.
2. Set the `basepath` in the script to the folder you want to organize.
3. Run the script using:

```bash
node yourscriptfilename.js


It will sort files like this:

📁 Your Folder
├── js/
│   └── script.js
├── txt/
│   └── notes.txt
├── png/
│   └── image.png


