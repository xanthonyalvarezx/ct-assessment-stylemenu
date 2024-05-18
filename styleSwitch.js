const styleOne = document.getElementById('s1');
const styleTwo = document.getElementById('s2');
function switchStyle(event){
    let style = event.target.dataset.style;
    switch(style){
        case "one":
            console.log("one");
            styleOne.disabled = false;
            styleTwo.disabled = true;
            break;
        case "two":
            console.log("two");
            styleOne.disabled = true;
            styleTwo.disabled = false;
            break;
        default:
            break;
    }
}



