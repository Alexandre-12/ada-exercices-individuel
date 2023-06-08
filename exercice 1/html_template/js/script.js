
//document.body.innerHTML = <h2> hello_user </h2>

function askName() {
    const name_of_user = window.prompt("What's your name?");
    const hello_user = `Bonjour ${name_of_user}`;
    document.body.innerHTML += `<h2>${hello_user}</h2>`; // important ==> `` et non '' ou ""
    console.log(name_of_user)
    console.log(hello_user)
}

askName()


function askBirthYear() {
    const year_of_birth = window.prompt("What's your year of birth ?");
    const year_actually = new Date()
    const today = year_actually.getFullYear();
    const age_of_user = `You are ${today - year_of_birth}, welcome to learn code at Ada tech school`;
    document.body.innerHTML += `<h3>${age_of_user}</h3>`;
    console.log(year_of_birth)
    console.log(age_of_user)
}

askBirthYear()