# Dev Stack Builder

Dev Stack Builder is a responsive React website where users can explore
different development technologies and create their own preferred technology
stack. Users can add technologies, remove individual items, or clear the
entire stack.

## Technologies Used

- React.js
- JavaScript ES6+
- Tailwind CSS
- Vite
- React-Toastify
- JSON

## Features

1. Explore technologies with category, difficulty, rating, and badge.
2. Add technologies to a personal stack and remove selected items.
3. Get toast notifications for add, remove, duplicate, and clear actions.

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX allows us to write HTML-like code inside JavaScript.
It makes React components easier to write and understand.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.

### 3. What does the useState hook do, and where did you use it?

The useState hook stores and updates component data.
I used it in App.jsx to store technologies, loading status, and selected
technologies.

### 4. What does the useEffect hook do, and why did you need it?

The useEffect hook runs side effects in a React component.
I used it to fetch technology data from the local JSON file when the app loads.

### 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each list item correctly.
It allows React to update the list efficiently when items change.

### 6. What is conditional rendering?

Conditional rendering means showing different UI based on a condition.
I used it to show a loading spinner while data is loading and technology
cards after loading is complete.

### 7. How do you pass data from a parent component to a child component?

A parent passes data to a child through props.
A child can send information back by calling a callback function received
through props.