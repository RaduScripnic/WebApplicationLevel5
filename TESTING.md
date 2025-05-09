# 🧪 TESTING.md – TravauxPro Construction Website

This document outlines the **manual testing procedures**, **validation results**, and **bug tracking** performed during the development of the TravauxPro Construction website.

---

## 📱 Device & Browser Compatibility

### ✅ Devices Tested
| Device                | OS         | Resolution Tested    | Status       |
|----------------------|------------|----------------------|--------------|
| Desktop (Dell XPS)   | Windows 11 | 1920×1080            | ✅ Pass      |
| MacBook Air          | macOS 14   | 1440×900             | ✅ Pass      |
| iPhone 13            | iOS 17     | 390×844              | ✅ Pass      |
| Samsung Galaxy S21   | Android 14 | 412×915              | ✅ Pass      |

### ✅ Browsers Tested
| Browser       | Version     | Status |
|---------------|-------------|--------|
| Chrome        | v123        | ✅ Pass |
| Firefox       | v115        | ✅ Pass |
| Safari        | v17         | ✅ Pass |
| Edge          | v123        | ✅ Pass |

---

## 🧩 Functional Testing

| Feature                              | Description                                                   | Status  |
|--------------------------------------|---------------------------------------------------------------|---------|
| Navigation bar                       | All menu links work and lead to correct pages                 | ✅ Pass |
| External links open in new tabs      | Social media and video open in a new tab                      | ✅ Pass |
| Responsive layout                    | Layout adapts correctly on mobile, tablet, desktop            | ✅ Pass |
| Video playback                       | User can play, pause, and control volume                      | ✅ Pass |
| Alt attributes for images            | All images contain descriptive alt text                       | ✅ Pass |
| No placeholder (Lorem Ipsum) text    | All content is customized                                     | ✅ Pass |
| Contact section                      | Clickable phone/email; Google Maps loads correctly            | ✅ Pass |
| Font and contrast                    | Meets accessibility standards for contrast/readability        | ✅ Pass |
| No broken internal links             | All links verified manually                                   | ✅ Pass |

---

## 🔍 HTML & CSS Validation

### ✅ HTML Validation
- Tool: [W3C HTML Validator](https://validator.w3.org/)
- Result: **No errors or warnings**
- Screenshot saved as: `validation/html-validation.png`

### ✅ CSS Validation
- Tool: [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- Result: **No errors**
- Screenshot saved as: `validation/css-validation.png`

---

## 🪲 Bug Tracking

| Bug ID | Description                                  | Status   | Resolution |
|--------|----------------------------------------------|----------|-------------|
| 001    | Nav menu overlapping video on small screen   | ✅ Fixed | Adjusted padding in CSS |
| 002    | Contact icons misaligned on iOS Safari       | ✅ Fixed | Used flexbox alignment |
| 003    | Alt text missing on one image                | ✅ Fixed | Added alt attribute |

---

## 📌 Additional Notes

- Manual testing was performed after each major update and commit.
- No automated testing was used for this project.
- Accessibility improvements may be extended with ARIA roles in future versions.

---

✔️ All criteria for **functionality**, **responsiveness**, and **accessibility** have been met and documented.

