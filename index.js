
const button = document.getElementById('sent');
const name = document.getElementById('name');
const mail = document.getElementById('mail');
const phone = document.getElementById('phone');
const thanks = document.getElementById('thanks');

button.addEventListener('click', (e) => {
    if (button.form.checkValidity()) {
        button.classList.toggle('press')
        button.disabled = true;
        e.preventDefault();
        fetch('reg', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                name: name.value,
                mail: mail.value,
                phone: phone.value,
            })
        }).then(() => {
            name.value = "";
            mail.value = "";
            mail.value = "";
            button.disabled = false;
            thanks.classList.toggle('show')
            button.classList.toggle('press')
        })
    } else {
        button.classList.toggle('wrong')
    }
});