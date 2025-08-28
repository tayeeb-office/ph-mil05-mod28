
// Heart Icon Funtionalities...
const icons = document.querySelectorAll(".heartAction"); 

    for (const icon of icons) {
        
        icon.addEventListener("click", function () {

            let heart_score = parseInt(document.getElementById('heartScore').innerText);
            heart_score = heart_score + 1;
            document.getElementById('heartScore').innerText = heart_score;

        });

    }

// Copy Button Funtionalities...
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

// Call Button Funtionalities...
const calls = document.querySelectorAll(".callAction"); 

    for (const call of calls) {
        
        call.addEventListener("click", function () {

            let call_score = parseInt(document.getElementById('callScore').innerText);
            if(call_score >= 20){
                call_score = call_score - 20;
                document.getElementById('callScore').innerText = call_score;
                
                const card = this.closest(".card");
                const copiedCat= card.querySelector(".copyCategory").innerText
                const copiedNum = card.querySelector(".copyNumber").innerText
                alert("📞 Calling " + copiedCat + " " + copiedNum + "...");

                const time = new Date().toLocaleTimeString();
                const history_container = document.getElementById('historyContainer');
                const div = document.createElement('div');
                div.innerHTML = `
                
                    <div class="flex justify-between items-center p-[24px] mx-[16px] mb-[16px] bg-[#fafafa] rounded-[8px]">
                            <div>
                                <h5 class=" font-bold"> ${copiedCat} </h5>
                                <p class=" text-[#5C5C5C]"> ${copiedNum} </p>
                            </div>
                            <p>${time}</p>
                    </div>

                `

                history_container.appendChild(div);

            }
            else{
                alert("Insufficient coins. Minimum 20 coins are required.");
            }

        });

    }

// Clear Button Funtionalities...
const call = document.querySelector(".clearAction"); 
        
        call.addEventListener("click", function () {

                document.getElementById('historyContainer').innerHTML= " ";

        });

    