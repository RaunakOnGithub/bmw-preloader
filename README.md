# BMW Landing Page Concept

A modern and minimalist landing page concept for BMW, featuring a sophisticated preloader animation built with the GSAP library.

[![Project Demo GIF](link-to-your-gif)](https://drive.google.com/file/d/1dK8UHrM66ZfGX8d07jIzA6RDqaCKsGvN/view?usp=drivesdk)

**Live Demo:** [**Click here to view the live site**](https://bmw-hero-page.netlify.app/) 🚀



---

## About The Project

This project is a creative exploration of a clean, premium web experience for a brand like BMW. The main highlight is the intricate entry animation that reveals the website content, designed to capture the user's attention and convey a sense of modern luxury and precision engineering.

---

## Key Features

* **GSAP Preloader Animation:** A multi-step animation sequence that introduces the brand through a collage of images before elegantly revealing the main page.
* **Minimalist Design:** A clean and spacious layout that puts the focus on strong typography and imagery.
* **Responsive Foundation:** The design uses viewport units and flexible properties, making it adaptable to different screen sizes.

---

## Technology Stack

This project is built using fundamental web technologies:

* **HTML5:** For the structure of the website.
* **CSS3:** For styling, layout (Flexbox), and `clip-path` animations.
* **JavaScript (ES6):** To control the animation logic.
* [**GSAP (GreenSock Animation Platform):**](https://gsap.com/) A powerful JavaScript library for creating high-performance animations.

---

## Code Breakdown

Here’s a simple explanation of how the different parts of the code work together.

### 📄 `index.html`

The HTML is very straightforward. It's structured into two main parts to make the animation possible:

1.  **`<div class="loader">`:** This is a full-screen container that sits on top of everything. It holds the images used in the preloader animation. It's the first thing a user sees.
2.  **`<div class="website-content">`:** This container holds the actual website content (navigation, hero text, footer). It's hidden underneath the loader until the animation finishes.

### 🎨 `style.css`

The CSS is designed to be clean and minimal. The most important parts for the animation are:

* `.loader`: It's set to `position: fixed` to cover the entire viewport. The `clip-path` property is used here to make the entire loader screen disappear at the end of the animation.
* `.img` and `.h1`: Many elements have properties like `clip-path` or `overflow: hidden` applied to them. This is crucial for creating the "reveal" effects, where elements appear to slide or fade in from nothing.

### ✨ `script.js`

This is where the magic happens! The entire animation is controlled by GSAP.

1.  **Setting the Stage with `gsap.set()`**
    Before the animation starts, we use `gsap.set()` to place elements in their starting, "off-screen" positions. For example, we move images down (`y: 500`), move text down (`y: 200`), and make it transparent (`opacity: 0`).

    ```javascript
    // Example: Move all images with class ".img" 500px down
    gsap.set(".img", { y: 500 });
    ```

2.  **Creating the Sequence with `gsap.timeline()`**
    A timeline is like a movie director, telling each element when to perform its animation in a specific order.

    * **Step 1:** The images in the loader slide up into view (`.to(".img", { y: 0 })`).
    * **Step 2:** The container for the loader images slides into its final position.
    * **Step 3:** The loader images (except the logo) are animated out using `clip-path` to make them "collapse" and disappear.
    * **Step 4:** The entire black loader screen animates out using `clip-path`, making it slide up and away. This is what reveals the website content underneath.
    * **Step 5:** Finally, the navigation, main text, and footer items slide up and fade in to their final positions, completing the sequence.

---

## How to Use

To run this project on your local machine, simply follow these steps:

1.  Clone the repository or download the files.
2.  Open the `index.html` file in your web browser.

And that's it! The animation will play automatically.
