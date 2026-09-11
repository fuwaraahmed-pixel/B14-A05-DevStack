# 🧱 DevStack Builder Website

DevStack Builder is an interactive, modern web application designed for developers to explore, compare, and assemble their ideal software development technology stack.

## 🚀 About The Project

DevStack Builder provides a streamlined visual interface where developers can browse popular frontend frameworks, backend runtimes, databases, styling libraries, and DevOps tools. Users can build their personalized stack side-by-side and manage their selections effortlessly.

---

## ⚙️ Technologies Used

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS, DaisyUI, Vanilla CSS Variables
- **Icons:** Lucide React, DevIcon SVG Icons
- **Notifications:** React-Toastify
- **Data Source:** JSON (`/data/technologies.json`)
- **Language:** JavaScript (ES6+)

---

## ✨ Key Features

1. **Interactive Tech Stack Selection:** Browse 12+ curated technologies categorized into Frontend, Backend, Database, Language, Styling, and DevOps with real-time add/remove capabilities.
2. **Duplicate Prevention & Real-time Notifications:** Prevents adding the same technology twice and provides clear visual feedback via `React-Toastify` toast notifications.
3. **Unified Brand Gradient System:** Utilizes a single CSS variable for the orange-pink-purple brand gradient across headings, buttons, and logos for easy theme customization.

---

## ❓ React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like structures directly inside JavaScript code. It is used in React because it makes building and reading UI components much simpler and intuitive compared to writing standard `React.createElement()` calls.

### 2. What is the difference between props and state?
**Answer:** 
- **Props (Properties):** Read-only data passed down from a parent component to a child component. The child component cannot modify props directly.
- **State:** Internal, mutable data managed within a component that determines its current behavior and UI. When state updates, React re-renders the component.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** `useState` is a React hook that creates and updates reactive state variables within a functional component. In this project, `useState` was used in `App.jsx` to store the array of loaded technologies (`technologies`), the list of selected stack items (`stack`), and the fetch loading state (`loading`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` allows components to perform side effects, such as fetching data or setting timers, after rendering. We needed it to asynchronously fetch the technology list from `/data/technologies.json` once when the component initially mounts (`[]` dependency array).

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses the unique `key` prop to identify which items in a list have changed, been added, or removed. It helps React efficiently update and re-render only the specific list item instead of re-rendering the entire list.

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering means displaying different UI elements based on specific logical conditions (e.g., ternary operators `? :` or `&&`). In `YourStackSidebar.jsx`, we conditionally render either the empty stack message when `stack.length === 0` or the list of selected items when `stack.length > 0`.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:** Data is passed from parent to child via **props**. To send data back from a child to a parent, the parent passes a **callback function** as a prop to the child, which the child invokes with data when an event (like a button click) occurs.
