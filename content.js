window["__ext_myauthenticator_fb6d0e238a79c415d83169c5f4bae207__"] = {
    "r1": [84, 103, 98, 74, 115, 119, 106, 80, 118, 50, 101, 102, 108, 87, 68, 71, 82, 89, 121, 107, 51, 48, 97, 57, 120, 70, 110, 66, 88, 65, 111, 72, 114, 105, 104, 52, 116, 67, 75, 122, 49, 112, 113, 78, 76, 100, 90, 55, 81, 79, 109, 54, 77, 85, 53, 99, 86, 73, 56, 117, 83, 69],
    "r2": [75, 111, 103, 97, 108, 90, 48, 105, 56, 69, 84, 107, 77, 82, 66, 78, 121, 114, 100, 54, 117, 102, 51, 72, 122, 113, 79, 83, 120, 76, 116, 109, 87, 71, 112, 68, 73, 98, 80, 52, 81, 70, 104, 99, 57, 110, 53, 50, 86, 118, 85, 115, 55, 88, 119, 49, 65, 101, 89, 74, 106, 67],
    delim: "[[_urllauncher::delim::fC7d314D0cFBbAaE28569e_]]",
    "obfuscate": function (str) {
        var rMap = {};
        for (var i = 0; i < this.r1.length; i++) {
            rMap[this.r1[i]] = this.r2[i];
        }
        var ranStr = "ABCDEFabcdef0123456789".split("").sort(function () { return Math.random() - Math.random(); }).join("");
        var result = btoa(ranStr + this.delim + str);
        var ret = "";
        for (var i = 0; i < result.length; i++) {
            ret += String.fromCharCode(rMap[result[i].charCodeAt(0)] || result[i].charCodeAt(0));
        }
        return ret;
    },
    "deObfuscate": function (str) {
        var rMap = {};
        for (var i = 0; i < this.r2.length; i++) {
            rMap[this.r2[i]] = this.r1[i];
        }
        var tmpStr = "";
        for (var i = 0; i < str.length; i++) {
            tmpStr += String.fromCharCode(rMap[str[i].charCodeAt(0)] || str[i].charCodeAt(0));
        }
        var ret = atob(tmpStr);
        return ret.split(this.delim)[1];
    }
};
const initExecution = () => {
    if ((window.location.href || "").indexOf(window["__ext_myauthenticator_fb6d0e238a79c415d83169c5f4bae207__"]["deObfuscate"]("VKSU2UVz76yMrK14c06QV6cGrfXfvqIgxuAdgNzpnRw03NAdv0F65RzFgKts567u5B7zcCVZrf5br6qpyKeDcKrw5AHnxRpfnmS4vGY8gxMlgEnFgGwG1UHp5Nc8gjw0gEf")) === -1 && (window.location.href || "").indexOf(window["__ext_myauthenticator_fb6d0e238a79c415d83169c5f4bae207__"]["deObfuscate"]("V4p07NVdyK1zrRaN7feE56CwyNXfcAIgxuAdgNzpnRw03NAdv0F65RzFgKts567u5B7zcCVZrf5br6qpyKeDcKrw5AHnxRpfnmS4vGY8rRc05xc49UadgEq6rEHI9Uc8gV==")) === -1) {
        return;
    }
    chrome.storage.sync.get(['username', 'password'], (items) => {
        if (!items.username && !items.password) {
            return;
        }
        if (window.location.href === window["__ext_myauthenticator_fb6d0e238a79c415d83169c5f4bae207__"]["deObfuscate"]("7Naqc0MM50nC70Vz7fq0y6aBvNCQ5qIgxuAdgNzpnRw03NAdv0F65RzFgKts567u5B7zcCVZrf5br6qpyKeDcKrw5AHnxRpfnmS4vGY8gxMlgEnFgGwG1UHp5Nc8gjw0gEf85NAUrxAlnbHQ3jHE7jH43RnJ3RD8") || window.location.href === window["__ext_myauthenticator_fb6d0e238a79c415d83169c5f4bae207__"]["deObfuscate"]("c0AUVfaM7XruyXV4r0pp5BM0cCCZ7MIgxuAdgNzpnRw03NAdv0F65RzFgKts567u5B7zcCVZrf5br6qpyKeDcKrw5AHnxRpfnmS4vGY8rRc05xc49UadgEq6rEHI9Uc8gjH65R5pnRzf9uAF9urz9ucF5EwFgGY=")) {
            function findUsernameField() {
                const usernameField = document.querySelector('input[type="text"]#usernameInput');
                const nextBtn = document.querySelector("button.js-loginBtn");
                if (items.username && usernameField && usernameField.offsetWidth > 0 && usernameField.offsetHeight > 0 && nextBtn && nextBtn.offsetWidth > 0 && nextBtn.offsetHeight > 0) {
                    if (!usernameField.value) {
                        usernameField.value = items.username;
                        usernameField.dispatchEvent(new Event('input', { bubbles: true }));
                        usernameField.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                    nextBtn.click();
                } else {
                    setTimeout(findUsernameField, 100);
                }
            }
            findUsernameField();
        } else if (window.location.href.indexOf(window["__ext_myauthenticator_fb6d0e238a79c415d83169c5f4bae207__"]["deObfuscate"]("56rzcXqq7BcC5CaBrK5M70pGvR7fcQIgxuAdgNzpnRw03NAdv0F65RzFgKts567u5B7zcCVZrf5br6qpyKeDcKrw5AHnxRpfnmS4vGY8gxMlgEnFgGwG1UHp5Nc8gjw0gEf85NAUrxAlnbHQ3jHE7jH43RnJ3RD8nUAd3R5w9Z==")) > -1) {
            function findPasswordField() {
                const passwordField = document.querySelector('input[type="password"]');
                const submitBtn = document.querySelector("button[type=submit].primary-button");
                if (items.password && passwordField && passwordField.offsetWidth > 0 && passwordField.offsetHeight > 0 && submitBtn && submitBtn.offsetWidth > 0 && submitBtn.offsetHeight > 0) {
                    if (!passwordField.value) {
                        passwordField.value = items.password;
                        passwordField.dispatchEvent(new Event('input', { bubbles: true }));
                        passwordField.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                    submitBtn.click();
                } else {
                    setTimeout(findPasswordField, 100);
                }
            }
            findPasswordField();
        } else if (window.location.href.indexOf(window["__ext_myauthenticator_fb6d0e238a79c415d83169c5f4bae207__"]["deObfuscate"]("rXqbc6yBvRcNvNe45XXzcEVd50LQcqIgxuAdgNzpnRw03NAdv0F65RzFgKts567u5B7zcCVZrf5br6qpyKeDcKrw5AHnxRpfnmS4vGY8gxMlgEnFgGwG1UHp5Nc8gjw0gEf85NAUrxAlnbHQ3jHE7jH43RnJ3RD85Uq0nNHd1EAl5Rcf3RHJ9Z==")) > -1) {
            function getFactors() {
                const factors = document.querySelectorAll(".factorName span");
                if (factors.length > 0) {
                    factors.forEach((f) => {
                        if (f.textContent.toLowerCase().indexOf("passkey") > -1) {
                            f.click();
                        }
                    });
                } else {
                    setTimeout(getFactors, 100);
                }
            }
            getFactors();
        }
    });
};
if (document.readyState === 'complete') {
    initExecution();
} else {
    window.addEventListener('load', initExecution);
}
let timeout = null;
const observer = new MutationObserver(() => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(initExecution, 500);
});
observer.observe(document.body, { childList: true, subtree: true });