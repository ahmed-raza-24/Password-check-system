# Password-check-system
A JavaScript password system with 3 attempts, showing account opened or locked based on user input.

# 🔐 Password Attempt System (JavaScript)

A simple JavaScript program that asks the user for a password using a `prompt()` and allows **only 3 attempts**.  
If the user enters the correct password, the system prints **"Account opened"**.  
If the user fails 3 times, it shows **"Account locked"**.

---

## 🚀 Features
- Allows a maximum of **3 password attempts**
- Detects:
  - ❌ Empty input  
  - ❌ Cancel button (null)  
  - ❌ Incorrect password  
- Detects correct password ✔️
- Console-based debugging messages
- Fully written in **vanilla JavaScript** (no frameworks)

---

## 📂 Project Structure
Password-Attempt-System/
│
├── index.html # Basic HTML page
├── style.css # Styling for the UI version (optional)
├── script.js # Password logic with attempts
└── README.md # Documentation



## 💻 How to Run
1. Download or clone this repository:
   ```bash
   git clone https://github.com/ahmed-raza-24/Password-Attempt-System.git
Open the folder in VS Code

Open index.html in your browser

The script will automatically run and ask for password

🧠 How It Works
User is prompted for a password

The script:

Checks for Cancel

Checks for empty input

Checks for correct password

Counts wrong attempts

After 3 wrong tries → Account Locked

📝 Example Output
sql
Copy code
User entered: hello
Incorrect password

User entered:      
Empty input! Please enter something.

User entered: masterjs
Account opened
🧑‍💻 Technologies Used
HTML

CSS

JavaScript (ES6)

🧑‍🎨 Author
Ahmed Raza
Simple & clean JavaScript practice projects.
