# Qwitter 🐦

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A fully-featured, cross-platform Twitter clone built with modern web technologies. Qwitter demonstrates real-time data synchronization, responsive design, and multi-platform deployment capabilities.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Platform-Specific Setup](#platform-specific-setup)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## 🎯 Overview

Qwitter is a cross-platform social media application that replicates core Twitter functionality. Built with Quasar Framework, it runs seamlessly on:
- **Web browsers** (responsive design)
- **Desktop applications** (Windows, macOS, Linux via Electron)
- **Mobile devices** (iOS and Android via Cordova)

The application uses Firebase for backend services, providing real-time data synchronization across all connected clients.

## ✨ Features

- 📝 **Post Qweets** - Share your thoughts with a 280-character limit
- ❤️ **Like/Unlike** - Express appreciation for qweets
- 🗑️ **Delete Qweets** - Remove your posts
- 🔄 **Real-time Updates** - See new qweets instantly across all devices
- ⏰ **Relative Timestamps** - Human-readable time display (e.g., "5 minutes ago")
- 📱 **Responsive Design** - Optimized for mobile, tablet, and desktop
- 🌐 **Cross-Platform** - Deploy to web, desktop, and mobile from a single codebase
- 🎨 **Material Design** - Modern, clean UI powered by Quasar components

## 🛠 Tech Stack

### Frontend
- **[Quasar Framework](https://quasar.dev/)** - Vue.js based framework for cross-platform development
- **[Vue.js](https://vuejs.org/)** - Progressive JavaScript framework
- **[Sass](https://sass-lang.com/)** - CSS preprocessor for styling

### Backend & Services
- **[Firebase](https://firebase.google.com/)** - Backend-as-a-Service
  - Cloud Firestore - NoSQL database for real-time data
  - Firebase SDK v8.2.4

### Build Tools & Dependencies
- **[Electron](https://www.electronjs.org/)** - Desktop application framework
- **[Cordova](https://cordova.apache.org/)** - Mobile application platform
- **[date-fns](https://date-fns.org/)** - Modern JavaScript date utility library

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 10.18.1
- **npm** >= 6.13.4 or **yarn** >= 1.21.1
- **Quasar CLI** (install globally)
  ```bash
  npm install -g @quasar/cli
  ```

### Platform-Specific Requirements

#### Desktop (Electron)
- No additional requirements

#### iOS (Cordova)
- macOS computer
- [Xcode](https://developer.apple.com/xcode/) (download from Mac App Store)
- Cordova CLI (global installation)

#### Android (Cordova)
- Android Studio
- Android SDK
- Java Development Kit (JDK)
- Cordova CLI (global installation)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/weterstacy/qwitter.git
cd qwitter
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Firebase

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Create a new Firebase project named **Qwitter**
3. Add a **Web App** to your project (also name it Qwitter)
4. Copy the Firebase configuration object from the code sample
5. Paste it into `src/boot/firebase.js`
6. In Firebase Console, create a **Cloud Firestore database**
   - Choose **"Start in test mode"** for development
   - Set location closest to your users

Example `src/boot/firebase.js` structure:
```javascript
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default db
```

### 4. Start Development Server

```bash
quasar dev
```

The application will open in your browser at `http://localhost:8080`

## 🖥 Platform-Specific Setup

### 🌐 Web Version

#### Development Mode
```bash
quasar dev
```

#### Production Build
```bash
quasar build
```

The production build will be in the `dist/spa` directory.

---

### 💻 Desktop Version (Electron)

#### Development Mode
```bash
quasar dev -m electron
```

#### Production Build

1. **Configure target platform** in `quasar.conf.js`:
   ```javascript
   electron: {
     packager: {
       platform: 'darwin' // Options: 'win32', 'darwin', 'mas', 'linux'
     }
   }
   ```

2. **Build the application**:
   ```bash
   quasar build -m electron
   ```

The packaged application will be in the `dist/electron` directory.

**Platform Options:**
- `win32` - Windows
- `darwin` - macOS
- `mas` - Mac App Store
- `linux` - Linux

---

### 📱 iOS Version (Cordova)

#### Setup

1. **Install Cordova globally**:
   ```bash
   npm install -g cordova
   # or with sudo if needed
   sudo npm install -g cordova
   ```

2. **Install Xcode** from the [Apple Developer site](https://developer.apple.com/download/more/) or Mac App Store

3. **Add iOS platform** (if not already added):
   ```bash
   cd src-cordova
   cordova platform add ios
   cd ..
   ```

#### Development Mode

**Launch on default simulator**:
```bash
quasar dev -m cordova -T ios
```

**Launch on specific simulator**:
```bash
# List available simulators
cd src-cordova
cordova run ios --list
cd ..

# Launch on specific device (example)
quasar dev -m cordova -T ios -e "iPhone-12, 14.3"
```

#### Production Build
```bash
quasar build -m cordova -T ios
```

---

### 🤖 Android Version (Cordova)

#### Setup

1. **Install Cordova globally**:
   ```bash
   npm install -g cordova
   # or with sudo if needed
   sudo npm install -g cordova
   ```

2. **Install Android Studio and SDK**:
   - Follow the detailed setup guide on the [Quasar documentation](https://quasar.dev/quasar-cli/developing-cordova-apps/preparation#Android-setup)
   - Install Android SDK
   - Configure environment variables (ANDROID_HOME, PATH)
   - Install Java Development Kit (JDK)

3. **Launch Android Virtual Device (AVD)**:
   - Open Android Studio
   - Navigate to: **Configure → AVD Manager**
   - Create and launch an AVD

#### Development Mode
```bash
quasar dev -m cordova -T android
```

#### Production Build
```bash
quasar build -m cordova -T android
```

The APK will be in the `src-cordova/platforms/android/app/build/outputs/apk` directory.

## 📁 Project Structure

```
qwitter/
├── public/                  # Static assets
│   ├── favicon.ico
│   └── icons/              # App icons
├── src/
│   ├── assets/             # Images, fonts, etc.
│   ├── boot/               # Boot files (Firebase config)
│   │   └── firebase.js     # Firebase initialization
│   ├── css/                # Global styles
│   │   ├── app.sass
│   │   └── quasar.variables.sass
│   ├── layouts/            # Page layouts
│   │   └── MainLayout.vue
│   ├── pages/              # Application pages
│   │   ├── PageHome.vue    # Main qweet feed
│   │   ├── PageAbout.vue   # About page
│   │   └── Error404.vue
│   ├── router/             # Vue Router configuration
│   │   ├── index.js
│   │   └── routes.js
│   ├── App.vue             # Root component
│   └── index.template.html # HTML template
├── src-cordova/            # Cordova mobile app files
├── src-electron/           # Electron desktop app files
├── quasar.conf.js          # Quasar configuration
├── package.json            # Dependencies
└── README.md              # This file
```

## 🧪 Testing

Currently, no automated tests are configured. To run the test script:

```bash
npm test
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2021 Danny Connell

## 👨‍💻 Author

**Danny Connell**

- GitHub: [@weterstacy](https://github.com/weterstacy)

## 🙏 Acknowledgments

- Built with [Quasar Framework](https://quasar.dev/)
- Powered by [Firebase](https://firebase.google.com/)
- Icons from [Font Awesome](https://fontawesome.com/)

---

**Note**: This is an educational project demonstrating cross-platform development with Vue.js and Quasar Framework. For production use, ensure you:
- Update Firebase security rules
- Implement user authentication
- Add proper error handling
- Configure environment variables for sensitive data
- Optimize builds for production
