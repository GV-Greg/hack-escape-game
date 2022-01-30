function includeHTML() {
    let z, i, element, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        element = z[i];
        /*search for elements with a certain atrribute:*/
        file = element.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState === 4) {
                    if (this.status === 200) {element.innerHTML = this.responseText;}
                    if (this.status === 404) {element.innerHTML = "Page not found.";}
                    /*remove the attribute, and call this function once more:*/
                    element.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}

includeHTML();

function closeModal(dialog, include) {
    const modal = document.getElementById(dialog);
    const dismissTriggers = modal.querySelectorAll('[data-dismiss]');
    const doc = document.getElementById('js-document');

    const close = function (element) {
        const link = document.getElementById(include);
        link.style.display = 'none';
        element.setAttribute('aria-hidden', true);
        doc.setAttribute('aria-hidden', false);
    };

    dismissTriggers.forEach((dismissTrigger) => {
        const dismissDialog = document.getElementById(dismissTrigger.dataset.dismiss);
        close(dismissDialog);
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            close(modal);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('[aria-haspopup="dialog"]');
    const doc = document.getElementById('js-document');

    const open = function (dialog) {
        dialog.setAttribute('aria-hidden', false);
        doc.setAttribute('aria-hidden', true);
    };

    triggers.forEach((trigger) => {
        const include = document.getElementById(trigger.className);

        // open dialog
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            include.style.display = 'block';
            const dialog = document.getElementById(trigger.getAttribute('aria-controls'));
            open(dialog);
        });
    });
});
