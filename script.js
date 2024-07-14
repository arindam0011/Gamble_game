


const img1 = document.getElementById("img_1");
const img2 = document.getElementById("img_2");
const img3 = document.getElementById("img_3");
const img4 = document.getElementById("img_4");

img1.addEventListener("click", toForm);


function toForm(event) {
    if (window.localStorage.getItem("text2") === "true") {
        img1.removeEventListener("click", toForm);
    } else {
        window.location.href = "form.html";
        changeParaHead();
    }
}



img2.addEventListener("click", img2Function);

function img2Function(event) {
    event.preventDefault();
    if (window.localStorage.getItem("img_2_status") == "true") {
        img2.removeEventListener("click", img2Function);
    }
    else {
        let user = window.localStorage.getItem("user");


        let userDetails = JSON.parse(user);
        let userDetailsString = `Name: ${userDetails.name}\nEmail: ${userDetails.email}\nPhone: ${userDetails.phone}`;
        alert(userDetailsString);
        window.localStorage.removeItem("user");
        window.localStorage.setItem("img_2_status", true);

        let para2 = document.getElementById("para-2");
        para2.innerText = "Click the next image to play! 👉";
    }

}



let chance = 0;
let count = 0;
let sum = 0;
var blk = false;
img3.addEventListener("click", img3Funtion);
function img3Funtion(event) {

    if (window.localStorage.getItem("img_2_status") == "true") {
        let result = document.getElementById("game_result");
        result.id = "game_result";
        result.innerHTML = `<p>Count:${count}</p><p>Chance left:${chance}/2</p><p>Result:${sum}</p>`;
        img3.append(result);

        if (chance === 2 && blk == false) {
            img3.removeEventListener("click", img3Funtion);
            window.localStorage.removeItem("img_3_status");
            window.localStorage.removeItem("img_2_status");
            window.localStorage.removeItem("text2");

            alert("Game Over");
            window.location.href = "index.html";
            return;
        }
        else if (count <= 3 && chance <= 2) {

            if (count == 3 && sum >= 10) {
                blk = true;
                result.innerHTML = `<p>Count:${count}</p><p>Chance left:${chance}/2</p><p>Result:${sum}</p>`;
                window.localStorage.setItem("img_3_status", true);

                let paras = document.querySelectorAll(".img_header_text");

                let ct = 0;
                for (let t of paras) {
                    t.id = `para-${++ct}`
                }

                let para3 = document.getElementById("para-3");
                para3.innerText = "Click the next image to get coupon! 👉";
                alert("you won");
                window.localStorage.removeItem("text2");
                count = 0;
                sum = 0;

            }
            else if (count == 3 && sum < 10) {
                ++count;
                sum += Math.floor(Math.random() * 6) + 1;
                chance++;
                count = 0;
                sum = 0;
            }
            else if (count <= 3) {
                ++count;
                sum += Math.floor(Math.random() * 6) + 1;
                result.innerHTML = `<p>Count:${count}</p><p>Chance left:${chance}/2</p><p>Result:${sum}</p>`;
            }

        }
    }

};

let ing4 = document.getElementById("img_4");
ing4.addEventListener("click", img4Function);

function img4Function(event) {
    if (window.localStorage.getItem("img_3_status") == "true") {
        img4.innerHTML = `
                            <h1 id="couponClick">Click hare to get Coupon code!</h1>
                            `
        img4.style.display = "flex";
        img4.style.alignItems = "center";
        img4.style.justifyContent = "center";
        img4.style.textAlign = "center";
        

        let coupon = document.getElementById("couponClick");

        
        coupon.addEventListener("click", function () {
            let charstr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            
            let str = "";
            for (let i = 1; i <= 12; i++) {
                str += charstr.charAt(Math.floor(Math.random() * charstr.length));
            }

            alert("Coupon Code Generated Successfully");
            coupon.innerText = str;
            
            
            
            document.getElementById("img_1").innerHTML= `<img src="https://marketplace.canva.com/EAE9WF6Wa6M/1/0/1131w/canva-white-background-congratulations-%28flyer%29-rklOZSnLwj8.jpg">`;
            document.getElementById("img_2").innerHTML= `<img src="https://marketplace.canva.com/EAE9WF6Wa6M/1/0/1131w/canva-white-background-congratulations-%28flyer%29-rklOZSnLwj8.jpg">`;
            document.getElementById("img_3").innerHTML= `<img src="https://marketplace.canva.com/EAE9WF6Wa6M/1/0/1131w/canva-white-background-congratulations-%28flyer%29-rklOZSnLwj8.jpg">`;
            
            window.localStorage.removeItem("img_3_status");
            window.localStorage.removeItem("img_2_status");
            window.localStorage.removeItem("text2");
            
            setTimeout(function () {
                window.location.href = "index.html";
            }, 15000);
        })


    }
}

let fromStatus = window.localStorage.getItem("text");
if (fromStatus === "true") {
    window.localStorage.removeItem("text");
    changeParaHead();
    alert("Registered Successfully");
}
else if (fromStatus === "false") {

    window.localStorage.removeItem("text");
    alert("registration Failed! try again");
}

function changeParaHead() {

    let paras = document.querySelectorAll(".img_header_text");

    let ct = 0;
    for (let t of paras) {
        t.id = `para-${++ct}`
    }
    let para1 = document.getElementById("para-1");
    para1.innerText = "Click image to check registration details👉";

}

