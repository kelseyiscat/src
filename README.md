# Basic React App ⚛️ 🐱 🐰

A simple React application featuring an interactive counter and a personalized greeting.

## Features

- **Counter**: Increment, decrement, and reset a running count.
- **No Negative Counts**: The counter won't go below zero, and unavailable actions are disabled.
- **Counter Feedback**: A small status message updates as the count changes.
- **Name Greeting**: Enter your name and get a personalized "Hello" message.
- **Responsive UI**: Centered layout with a dark theme, focus styles, and smooth hover transitions.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/kelseyiscat/src.git
cd src

# Install dependencies
npm install
```

### Running the App

```bash
npm run dev
```

Vite will start a local development server, usually at [http://localhost:5173](http://localhost:5173).

### Building for Production

```bash
npm run build
```

## 📁 Project Structure

```
.
├── index.html    # HTML entry point
├── index.jsx     # React DOM render entry
├── App.jsx       # Main App component (counter + name input)
└── App.css       # Styles for the application
```

## Technologies Used

- **React** (with Hooks — `useState`)
- **Vite**
- **CSS3** (custom styling with transitions)

## 📜 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

*Built with ❤️ using React*
🐰
