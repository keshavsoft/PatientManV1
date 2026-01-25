# Login Overlay Integration (Creative Tim Bootstrap Wizard)

This repository demonstrates how to integrate a **custom Login overlay modal** with the **Get Shit Done Bootstrap Wizard by Creative Tim**.

The goal is to provide a **wizard-aligned authentication popup** that:

* Overlays the wizard screen
* Matches Creative Tim UI styles
* Does **not auto-close** on Login click
* Closes **only on successful authentication** handled by custom JavaScript logic

---

## ✨ Features

* ✅ Native HTML `<dialog>` based modal overlay
* ✅ Visually aligned with Creative Tim Wizard (inputs, buttons, colors)
* ✅ No black focus borders (Bootstrap + browser overrides handled)
* ✅ Full control over modal close behavior
* ✅ Works with Bootstrap 3 + jQuery Wizard
* ✅ Clean, scoped CSS (does not affect wizard styles)

---

## 📂 Project Structure (Relevant Parts)

```
Public/
└── UI/
    └── Patient/
        └── V3/
            ├── assets/
            │   ├── css/
            │   ├── js/
            │   └── img/
            ├── index.html   ← Wizard + Login Overlay
            └── Js/Index/entryFile.js
```

---

## 🧩 Technologies Used

* HTML5 (`<dialog>` element)
* Bootstrap 3
* Creative Tim – Get Shit Done Wizard
* jQuery
* Vanilla JavaScript

---

## 🔐 Login Overlay Design

The login modal is implemented using a **native HTML `<dialog>`**, styled to look and behave like a Creative Tim component.

### Key Characteristics

* White card layout
* Wizard-matching input height and border radius
* Orange primary action button (same as Wizard `Next`)
* Grey cancel button
* Semi-transparent dark backdrop

---

## 🚫 Preventing Auto-Close (Important)

By default, `<dialog>` closes automatically when used with:

```html
<form method="dialog">
```

This project **intentionally avoids** that behavior.

### Correct Form Setup

```html
<form class="login-card" onsubmit="return false;">
```

### Correct Login Button

```html
<button type="button" class="btn-login" id="ModalLoginButtonId">Login</button>
```

This ensures:

* ❌ No automatic dialog close
* ✅ Full control via JavaScript

---

## 🧠 Closing the Modal Manually (On Success Only)

```js
const dlg = document.getElementById("loginDialog");

loginBtn.addEventListener("click", () => {
  // Perform validation or API call here

  const isSuccess = true; // result from your logic

  if (isSuccess) {
    dlg.close();
  }
});
```

If authentication fails, simply do nothing — the modal remains open.

---

## 🎯 Styling Considerations

The following issues are explicitly handled:

* Bootstrap default button borders
* Browser focus outlines
* Bootstrap focus box-shadows

All overrides are **scoped to `#loginDialog` only**, ensuring the wizard UI is untouched.

---

## ▶️ Auto-Open Login Modal

The login overlay is opened programmatically:

```js
const dlg = document.getElementById("loginDialog");
dlg.showModal();
```

You can trigger this:

* On page load
* Before entering a wizard step
* When session expires

---

## ✅ Final Behavior Summary

| Action       | Result                          |
| ------------ | ------------------------------- |
| Click Login  | Modal stays open                |
| Auth success | Modal closes                    |
| Auth failure | Modal remains open              |
| Cancel click | Modal closes                    |
| Wizard UI    | Remains interactive after close |

---

## 📌 Notes

* Designed for **Bootstrap 3 / Creative Tim Wizard**
* Safe for production use
* Easily reusable across V1 / V2 / V3 patient flows

---

## 🏁 Status

**Stable and production-ready** ✅

You can now extend this with:

* API authentication
* Error messages
* Loading indicators
* Session-based gating

---

Happy building 🚀

### 1.1.3

- still working on modal ui for login
