//set initial count
let count = 0;

// select value and buttins

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn"); // we are selecting all of them instead of individually selecting each one

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){ // e is the event object
        const styles = e.currentTarget.classList; // bring me the classes that the item i am currently clicking
        if (styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if (count > 0){
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count == 0){
            value.style.color = "#102A42";
        }
        value.textContent= count;
    })
})
