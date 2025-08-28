
// Heart Icon Funtionalities...
const icons = document.querySelectorAll(".heartAction"); 

    for (const icon of icons) {
        
        icon.addEventListener("click", function () {

            let heart_score = parseInt(document.getElementById('heartScore').innerText);
            heart_score = heart_score + 1;
            document.getElementById('heartScore').innerText = heart_score;

        });

    }

// Copy Copy Funtionalities...
const copies = document.querySelectorAll(".copyAction"); 

    for (const copy of copies) {
        
        copy.addEventListener("click", function () {

            let copy_score = parseInt(document.getElementById('copyScore').innerText);
            copy_score = copy_score + 1;
            document.getElementById('copyScore').innerText = copy_score;

            const card = this.closest(".card");
            const copiedNum = card.querySelector(".copyNumber").innerText
            alert(copiedNum + " is copied");
            navigator.clipboard.writeText(copiedNum);

        });

    }