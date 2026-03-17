# <img src="https://cdn.kcak11.com/MyAuthenticator/icons/icon128.png" width="32" height="32" valign="middle"> MyAuthenticator

A Chrome extension that automates login flows for specific authentication pages. It securely stores credentials and auto-fills them when visiting the configured login URLs.

## ✨ Features

- **Auto-fill credentials**: Automatically fills in username and password on login pages
- **Auto-submit**: Automatically clicks next/submit buttons after filling credentials
- **Passkey selection**: Automatically selects "Passkey" authentication when available
- **Secure storage**: Credentials are stored using Chrome's synced storage (syncs across devices if Chrome sync is enabled)
- **Obfuscated URLs**: Target URLs are obfuscated in the code for privacy

## 📦 Installation

### From Source (Developer Mode)

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in the top-right corner)
3. Click **Load unpacked**
4. Select the `MyAuthenticator` folder

## ⚙️ Configuration

1. Click the extension icon in Chrome's toolbar, or right-click and select **Options**
2. Enter your **Username** and **Password**
3. Click **Save Credentials**

Credentials are stored in Chrome's sync storage and will sync across your devices if Chrome sync is enabled.

## 🔧 How It Works

The extension uses a content script that runs on all pages. When a page loads, it:

1. Checks if the URL matches specific login pages
2. If on the username page:
   - Fills the username field
   - Clicks the "Next" button
3. If on the password page:
   - Fills the password field
   - Clicks the submit button
4. If on the factor selection page:
   - Looks for "Passkey" option and clicks it

The extension also uses a `MutationObserver` to handle single-page applications (SPAs) where content loads dynamically.

## 🔐 Permissions

| Permission | Purpose |
|------------|---------|
| `storage` | Store credentials in Chrome's sync storage |
| `activeTab` | Access the current tab for auto-fill functionality |
| `scripting` | Inject content scripts into pages |

## 📄 License

This project is open-source and available under the [MIT License](https://mit-license.kcak11.com).