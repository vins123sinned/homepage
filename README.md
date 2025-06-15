# homepage
A homepage that looks amazing no matter the device or display size

This project implements everything that I have learned about responsive design, which is just a fancy word for making our website look good and run good no matter the display size. This is really important as there are billions of displays ranging from the smallest phone to the widest monitor today. By making websites run smoothly no matter what it is being viewed from, we can ensure a streamlined and easy use of our websites in all situations.

This will be achieved primarily using natural responsiveness. Natural responsiveness is the idea that plain HTML is ***naturally*** responsive and we should utilize that to our advantage by adding CSS upon plain HTML rather than simply overriding it. More complex cases can be solved with media queries and HTML elements make specifically for responsive images. This project is also a great candidate to practice my new accessibility (a11y) knowledge which makes website more accessible and easier to use for all.

![Site Overview](https://github.com/user-attachments/assets/db292cc7-5d9c-4eb9-84c8-5414966b6cec)

<p align="center">
   <a href="https://vins123sinned.github.io/homepage/">
    View live site
  </a>
</p>

## Installation Instructions
- Clone the repository to your local computer:

```bash
git clone git@github.com:your-username/homepage.git
```
- Navigate into the directory

```bash
cd homepage
```

- Install all dependencies

```bash
npm install
```

- Start the development server

```bash
npm run dev
```

- Now visit [http://localhost:8080](http://localhost:8080) in your browser and you're all set!

## Lessons Learned
This project taught me a lot on accessibility and responsive design. By creating a basic homepage that looks great on any device and is accessible to everyone, I've learned:

- The importance of accessibility for our websites
- How much better your website becomes when you focus on accessibility
- How to make websites more accesible with WAI-ARIA
- Semantic HTML and websites for keyboard users
- That HTML is responsive by default
- How to add media query breakpoints
- And many other new things just as important for accessibility and responsive design!

One point from the list that I want to go more in depth is how HTML is naturally responsive by default. It isn't until you add CSS with some property like a fixed `width: 100px` that HTML stops being responsive. This [HTML-only website](https://codyloyd.github.io/responsive-html/) shows how HTML with no CSS is perfectly responsive and looks great no matter the device size. It isn't until CSS is added that our website starts to break down and become clunky and not responsive. Seeing this in action flicked on a lightbulb in my head and helped me to use CSS *on top* of HTML, enhancing it rather than replacing it. This realization made my CSS become less bloated and more maintainable compared to my previous projects. All in all, this was just one of many revelations that will help me write more maintainable and scalable code going forward.
