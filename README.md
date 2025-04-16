# Gerald Balekaki – Portfolio Website

This repository contains the personal academic website of **Professor Gerald Balekaki**, built using **Jekyll** and hosted via **GitHub Pages**. It showcases his research areas, publications, and research lab assistants.

---

## 🚀 Features

- Static site powered by Jekyll
- Modular design with sections for About, Research Topics, Publications, and Assistants
- Clean, responsive UI with custom CSS (no theme dependency)

---

## 🛠️ Prerequisites

Ensure you have the following installed on your system:

- [Ruby](https://www.ruby-lang.org/en/documentation/installation/) (>= 3.0 recommended)
- [Bundler](https://bundler.io/) (manages gem dependencies)
- Git (for cloning the repo)

---

## 📥 Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/Prof_Portfolio.git
cd Prof_Portfolio
```

---

## 💎 Install Ruby Gems

Install all required gems using Bundler:

```bash
gem install bundler
bundle install
```

If you're missing Jekyll, install it with:

```bash
gem install jekyll
```

---

## ▶️ Run Jekyll Locally

To build and serve the site on a local development server:

```bash
bundle exec jekyll serve
```

Then open your browser and visit:

```
http://localhost:4000
```

Any changes made will auto-refresh in the browser.

---


---

## 🌐 Deployment

Once finalized, push your changes to GitHub. If using GitHub Pages:

- Ensure your repo is **public**
- In repo settings > Pages, choose:
  - Source: `main` branch
  - Folder: `/ (root)`

GitHub will auto-deploy from your root directory.

---
Here’s a clear and concise `README` section explaining how to add and update the **Resume** section in the site:

---

### 📄 Adding or Updating the Resume Section

The "RESUME" button in the navigation bar is configured to download a PDF file rather than scroll to a page section.

#### 🔧 Steps to Add/Update the Resume PDF:

1. **Navigate to the Resume Folder**  
   Go to the `assets/resume/` directory inside your project.

2. **Place the Resume PDF**  
   Add your updated resume PDF here. Name it as:
   ```
   Gerald_Balekaki_Resume.pdf
   ```

3. **Ensure Navigation Link is Set**  
   In your `index.html`, verify the following line exists inside the `<nav>` menu:

   ```html
   <a href="assets/resume/Gerald_Balekaki_Resume.pdf" download>RESUME</a>
   ```

   This line ensures that clicking the RESUME button will directly download the PDF.

4. **Test the Download**  
   Serve the site locally:
   ```bash
   bundle exec jekyll serve
   ```
   Then open `http://localhost:4000` and click RESUME to verify it downloads correctly.

---