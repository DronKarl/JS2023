/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("// Funkcja do inicjalizacji mega-menu\nfunction initMegaMenu() {\n    const menuItems = document.querySelectorAll('.menu-item');\n\n    // Dodajemy obsługę zdarzeń dla każdego elementu menu\n    menuItems.forEach((menuItem) => {\n        menuItem.addEventListener('click', (event) => {\n            event.stopPropagation();\n\n            const currentMenuItem = event.currentTarget;\n            const isActive = currentMenuItem.classList.contains('active');\n\n            // Zwijamy wszystkie aktywne elementy menu\n            menuItems.forEach((item) => {\n                item.classList.remove('active');\n                item.classList.remove('active-parent');\n            });\n\n            // Jeśli aktualny element menu nie jest aktywny, oznaczamy go jako aktywny\n            if (!isActive) {\n                currentMenuItem.classList.add('active');\n\n                // Oznaczamy wszystkie rodzicowskie elementy aktualnego elementu menu jako aktywne\n                let parentMenuItem = currentMenuItem.parentElement.parentElement;\n                while (parentMenuItem.classList.contains('menu-item')) {\n                    parentMenuItem.classList.add('active-parent');\n                    parentMenuItem = parentMenuItem.parentElement.parentElement;\n                }\n            }\n        });\n    });\n}\n\n// Wywołujemy funkcję inicjalizacji mega-menu po załadowaniu strony\ndocument.addEventListener('DOMContentLoaded', initMegaMenu);\n\n\n\n\n//# sourceURL=webpack://untitled3/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;