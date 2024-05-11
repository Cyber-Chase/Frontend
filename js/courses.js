function search() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('course-item');

    for (let i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "block"; 
        }
    }
}

document.getElementById('searchbar').addEventListener('input', function() {
    if (this.value === "") {
        let x = document.getElementsByClassName('course-item');
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "block";
        }
    } else {
        search();
    }
});
