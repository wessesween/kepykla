let calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function(){
    // console.log('clicked')
    let employeesCount = document.getElementById('employee-count').valueAsNumber;
    let employeeMakesPerDay = document.getElementById('loaves-per-employee').valueAsNumber;
    let orderCount = document.getElementById('order-count').valueAsNumber;

    let total = employeesCount * employeeMakesPerDay;
    let arspes = total >= orderCount;

    let results = document.getElementById('results');
    results.innerHTML = `<p><strong>Kepykla per diena spes pagaminti: </strong>${total} kepalu</p>`;
    results.innerHTML += `<p><strong>Jai reikia speti pagaminti:</strong> ${orderCount} </p>`;
    results.innerHTML += `<p><strong>Ar spes pagaminti?</strong> ${arspes ? 'taip' : 'ne'}</p>`

});

// document.getElementById('employee-count').addEventListener('keyup', function(event){
    
//     let inputValue = event.target.valueAsNumber;
    
//     if (inputValue < 0){
//         event.target.classList.add('error');
//         event.target.nextElementSibling.classList.add('show')
//     }else {
//         event.target.classList.remove('error');
//         event.target.nextElementSibling.classList.remove('show')
//     }
// });

// document.getElementById('loaves-per-employee').addEventListener('keyup', function(klaida){

//     let inPut = klaida.target.valueAsNumber;

//     if(inPut < 0){
//         klaida.target.classList.add('error');
//         klaida.target.nextElementSibling.classList.add('show')
//     }else {
//         klaida.target.classList.remove('error');
//         klaida.target.nextElementSibling.classList.remove('show');
//     }
// });

// document.getElementById('order-count').addEventListener('keyup', function(bug){

//     let text = bug.target.valueAsNumber;

//     if( text < 0){
//         bug.target.classList.add('error');
//         bug.target.nextElementSibling.classList.add('show')
//     }else {
//         bug.target.classList.remove('error');
//         bug.target.nextElementSibling.classList.remove('show');
//     }
// });

function viskasviename(input){
    document.getElementById(input).addEventListener('keyup', function(event){

        let inputVal = event.target.valueAsNumber;

        if (inputVal < 0) {
            event.target.classList.add('error');
            event.target.nextElementSibling.classList.add('show');
        } else {
            event.target.classList.remove('error');
            event.target.nextElementSibling.classList.remove('show');
        }
    });
}

viskasviename('employee-count');
viskasviename('loaves-per-employee');
viskasviename('order-count');


document.getElementById('reset').addEventListener('click', function(){
    document.getElementById('employee-count').value = 0;
    document.getElementById('loaves-per-employee').value = 0;
    document.getElementById('order-count').value = 0;
});














/* INSTRUKCIJOS:
Papildykite projektą:
- Šiame projekte atliktas tik pradinis stiliavimas, tačiau galima padaryti ir daugiau dalykų. Pagalvokite ar galima kaip nors atnaujinti dizainą, jo nesudarkant. Pavyzdžiui, gal gali įvesties laukeliai reaguoti į pelės užvedimą, ar patvarkyti gal kokius tarpus, gal įnešti kokių spalvų įvairiose vietose, dar gal ką nors padaryti su įvesties laukeliais, mygtukų stiliai, ir pan.
- Iki galo padaryti validacijas su įvesties laukeliais (dabar yra atlikta tik su vienu).
- Pridėti daugiau įvesties laukelių ir/ar skaičiavimų iš duotos informacijos.
- Pridėti informacinių tekstų, kurie paaiškintų ką kuris laukelis ar skaičiavimas reiškia ir pan.
*/