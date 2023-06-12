//*NAVIGATION HEADER SECTION
    document.addEventListener("DOMContentLoaded", function () {
        const button = document.querySelector("button[aria-controls='mobile-menu']");
        const menu = document.getElementById("mobile-menu");
    
        button.addEventListener("click", function () {
        const expanded = this.getAttribute("aria-expanded") === "true" || false;
    
        this.setAttribute("aria-expanded", !expanded);
        menu.classList.toggle("hidden");
        });
    });


//*TABS PRICING SECTION
    // Get the DOM elements
    const tabs = document.querySelectorAll('.tabs');
    const description = document.getElementById('description');
    const heading = document.getElementById('heading');
    const price = document.getElementById('price');

    // Function to handle tab click
    function handleTabClick(event) {
    // Remove the active class from all tabs
    tabs.forEach(tab => tab.classList.remove('active', 'bg-gray-400'));

    // Add the active class to the clicked tab
    event.target.classList.add('active', 'bg-gray-400', 'hover:bg-gray-400');
    
    // Update the description, heading, and price based on the selected tab
    if (event.target.innerText === 'Start-up') {
        description.innerText = "Our Start-up Plan is the perfect choice for beginners and small businesses.\n With this plan, you'll receive a professional 3-page landing website that showcases your brand effectively. We'll also provide basic graphic design such as a logo and business card concept to give your brand a polished look.\n Additionally, our visual media production services will include a small amount of carefully selected pictures. To kickstart your social media presence, we'll create an easy-to-follow strategy for managing your social media platforms.";
        heading.innerText = 'Start-up';
        price.innerText = '7 500';
    } else if (event.target.innerText === 'Standard') {
        description.innerText = "Ready to take your business to the next level? Our Standard Plan offers comprehensive features designed for growing businesses and professionals.\n You'll get a business website with integrations and up to 5 pages, ensuring that you have the necessary space to present your presence and services.\n Our graphic design services will provide a clean and professional look to your brand, while our visual media production services will include a moderate amount of high-quality pictures and up to a minute of engaging videos.\n To further enhance your online presence, we'll develop a content schedule and strategy for a social media platform of your choice.";
        heading.innerText = 'Standard';
        price.innerText = '15 000';
    } else if (event.target.innerText === 'Advanced') {
        description.innerText = "Are you an established business or an e-commerce venture looking for advanced solutions? Our Advanced Plan is tailored to meet your specific needs.\n With this plan, you'll receive the option to incorporate e-commerce functionality, allowing you to sell products and services directly from your website. We'll provide additional graphic design options to give your brand a unique and eye-catching identity.\n Our visual media production services will include a generous package of professionally curated pictures and a versatile range of videos. Moreover, our social media management services will encompass a comprehensive strategy across two platforms, ensuring maximum exposure and engagement.";
        heading.innerText = 'Advanced';
        price.innerText = '30 000';
    } else if (event.target.innerText === 'Complex') {
        description.innerText = "For ambitious enterprises, our Complex Plan offers a robust suite of services to propel your business forward.\n This plan opens up a world of possibilities, allowing your clients to access your web application seamlessly. Our advanced graphic design options will help you create visually stunning and memorable branding elements.\n We'll provide a good package of high-quality pictures and videos to captivate your audience. Additionally, our social media management services will cover a strategic presence on three platforms, including a detailed schedule and regular performance reviews to optimize your online reach and engagement.";
        heading.innerText = 'Complex';
        price.innerText = '50 000';
    }
    }

    // Add click event listeners to each tab
    tabs.forEach(tab => tab.addEventListener('click', handleTabClick));

//FINISH
