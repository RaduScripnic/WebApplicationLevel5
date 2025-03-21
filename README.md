# WebApplicationLevel5
# 🏗️ TravauxPro Construction Website

## 📖 Project Overview
This is a simple **construction company website** for **TravauxPro Construction**, featuring three pages:

1. **Home (`index.html`)** – Introduction to the company, services, and a preview of projects.  
2. **Projects (`projects.html`)** – Displays a gallery of completed projects with images and a video.  
3. **Contact (`contact.html`)** – Includes company contact details, a Google Map, and social media links.  

The website is styled using **CSS (`styles.css`)**, ensuring a professional and user-friendly experience.

---

## 📂 Project Structure
/travauxpro-construction │── index.html # Homepage │── projects.html # Projects Page │── contact.html # Contact Page │── styles.css # Main CSS file │── images/ # Folder for project images │── videos/ # Folder for project videos │── README.md # Project documentation

css
Copy
Edit

---

## 🌟 Features
- **Responsive Navigation Bar**  
- **Image Gallery for Projects**  
- **Embedded Google Map**  
- **Clickable Contact Information**  
- **Social Media Links**  

---

## 🎨 Styling (`styles.css`)
The project uses a clean and modern CSS design. Here are the key styles:

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
}

header {
    background: #222;
    color: white;
    padding: 15px 0;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
}

nav ul li {
    display: inline;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 10px;
    transition: 0.3s;
}

nav ul li a:hover {
    background: #555;
    border-radius: 5px;
}

section {
    padding: 40px;
    text-align: center;
}

#home {
    background: url('band-bg.jpg') no-repeat center center/cover;
    color: white;
    padding: 80px 20px;
}

footer {
    background: #222;
    color: white;
    text-align: center;
    padding: 20px;
    position: relative;
    bottom: 0;
    width: 100%;
}
🚀 How to Use
Download or Clone the Repository

sh
Copy
Edit
git clone https://github.com/yourusername/travauxpro-construction.git
Open index.html in a Browser
Simply double-click index.html to view the website.

Navigate Between Pages

Click on Projects to open projects.html
Click on Contact to open contact.html
🗺 Contact Information
📍 Office Address: 123 Avenue des Champs-Élysées, 75008 Paris, France
📞 Phone: +33 1 23 45 67 89
✉️ Email: info@travauxpro.com

🔗 Follow Us on Social Media:

Facebook
Twitter
Instagram
LinkedIn
📌 Future Improvements
✅ Add a Testimonials Page
✅ Improve Animations & Effects
✅ Enhance Mobile Responsiveness

👷 Developed by [Your Name]
© 2025 TravauxPro Construction | All rights reserved.

yaml
Copy
Edit

---

### 📌 **How to Push to GitHub**
If you haven't already pushed this project to GitHub, follow these steps:

```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/travauxpro-construction.git
git push -u origin main