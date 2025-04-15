const data = [
    { title: "Introduction to JavaScript", body: "JavaScript is a versatile programming language used for web development." },
    { title: "Understanding React", body: "React is a popular library for building user interfaces with a component-based architecture." },
    { title: "Node.js Basics", body: "Node.js allows JavaScript to run on the server, enabling backend development." },
    { title: "Express.js Framework", body: "Express is a minimal and flexible Node.js web application framework." },
    { title: "MongoDB Overview", body: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents." },
    { title: "REST API Principles", body: "REST APIs allow communication between different systems using HTTP requests." },
    { title: "Understanding Redux", body: "Redux helps manage the state of a React application in a predictable manner." },
    { title: "CSS Flexbox Guide", body: "Flexbox is a CSS layout model that arranges elements efficiently inside a container." },
    { title: "Java Fundamentals", body: "Java is an object-oriented programming language widely used for enterprise applications." },
    { title: "Authentication with JWT", body: "JWT (JSON Web Token) is a secure way to implement authentication in web applications." },
    { title: "Asynchronous JavaScript", body: "Async programming in JavaScript is handled using callbacks, promises, and async/await." },
    { title: "Understanding Closures", body: "A closure is a function that remembers variables from its outer scope even after the outer function has finished executing." },
    { title: "Event Loop in JavaScript", body: "The event loop allows JavaScript to handle asynchronous operations non-blockingly." },
    { title: "Promises vs Callbacks", body: "Promises simplify async code, making it easier to manage than callback hell." },
    { title: "CSS Grid Layout", body: "CSS Grid is a two-dimensional layout system for building responsive web designs." },
    { title: "Debouncing and Throttling", body: "Debouncing and throttling are techniques to control the frequency of function execution in response to events." },
    { title: "Hoisting in JavaScript", body: "JavaScript hoists variable and function declarations to the top of their scope during compilation." },
    { title: "Microservices Architecture", body: "Microservices split applications into small, independently deployable services for better scalability." },
    { title: "OAuth Authentication", body: "OAuth is an open standard for secure authentication and authorization using third-party services." },
    { title: "Docker Basics", body: "Docker is a containerization platform that helps developers package applications with dependencies for easy deployment." },
    { title: "WebSockets in JavaScript", body: "WebSockets provide a full-duplex communication channel over a single TCP connection." },
    { title: "GraphQL vs REST", body: "GraphQL allows clients to request specific data, reducing over-fetching compared to REST APIs." },
    { title: "SOLID Principles", body: "SOLID is a set of five design principles that improve software maintainability and scalability." },
    { title: "Binary Search Algorithm", body: "Binary search efficiently finds an element in a sorted array with O(log n) time complexity." },
    { title: "Virtual DOM in React", body: "React uses a Virtual DOM to optimize UI rendering by updating only changed components." },
    { title: "JWT vs OAuth", body: "JWT is a compact token format for authentication, while OAuth is a framework for delegated access control." },
    { title: "WebAssembly Basics", body: "WebAssembly (Wasm) is a binary format that enables high-performance execution of code in web browsers." },
    { title: "CI/CD Pipeline", body: "Continuous Integration and Continuous Deployment (CI/CD) automate software testing and deployment." },
    { title: "Time Complexity Analysis", body: "Time complexity measures the efficiency of an algorithm based on input size." },
    { title: "Load Balancing in Servers", body: "Load balancing distributes incoming network traffic across multiple servers to optimize resource use." }
];

const main = document.getElementById("main");
let currentlyOpen = null; // To track the currently open accordion

data.forEach(element => {
    const ele = document.createElement("div");
    ele.classList.add("accordion");

    ele.innerHTML = `
        <p class="heading">
            ${element.title}
            <button class="btn">+</button>
        </p>
        <p class="hidden para">${element.body}</p>
    `;

    const btn = ele.querySelector(".btn");
    const para = ele.querySelector(".para");

    btn.addEventListener("click", () => {
        if (currentlyOpen && currentlyOpen !== ele) {
            // Close the previously open accordion
            currentlyOpen.querySelector(".para").classList.add("hidden");
            currentlyOpen.querySelector(".btn").innerText = "+";
        }

        // Toggle the clicked accordion
        const isOpen = !para.classList.contains("hidden");
        if (isOpen) {
            para.classList.add("hidden");
            btn.innerText = "+";
            currentlyOpen = null;
        } else {
            para.classList.remove("hidden");
            btn.innerText = "-";
            currentlyOpen = ele;
        }
    });

    main.appendChild(ele);
});


