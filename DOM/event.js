// const one=document.getElementById("one");
// const two=document.getElementById("two");
// const three=document.getElementById("three");

// one.addEventListener("click",()=>{
//     alert("one");
// },false);

// two.addEventListener("click",()=>{
//     alert("two");
// },true) 

// three.addEventListener("click",()=>{
//     alert("three");
// },false)

// 123
// 321
// 231
// 132


let rating = 0;
const btn = document.querySelectorAll(".fa");
const rate = document.querySelector(".rating")
// console.log(btn[1]);
btn.forEach((ele, index) => {

    ele.addEventListener("mouseover", () => {
        for (let i = 0; i <= index; i++) {
            btn[i].classList.add("gold")
        }
    });

    ele.addEventListener("mouseleave", () => {
        for (let i = 0; i <= index; ++i) {
            if (i >= +rate.innerText) btn[i].classList.remove("gold")
        }
    });

    ele.addEventListener("click", () => {

        for (let i = 0; i <= index; i++) {
            btn[i].classList.add("gold")
        }

        if (+rate.innerText === (index + 1)) {
            for (let i = 0; i <= index; ++i) {
                btn[i].classList.remove("gold");
            }
            rate.innerText = 0;
        } else rate.innerText = index + 1;

    });
});


// // 
// // 
// // 
// // let counter = 0;
// // const counterValue = document.getElementById("counter");
// // const plus = document.getElementById("plus");
// // const neg = document.getElementById("neg");
// // const digit = document.querySelector(".digit");
// // const reset = document.getElementById("reset");

// // plus.addEventListener("click", () => {
// //     counter += +counterValue.value
// //     digit.innerText = counter;
// // });

// // neg.addEventListener("click", () => {
// //     counter -= +counterValue.value;
// //     if (counter < 0) counter = 0;
// //     digit.innerText = counter;
// // });

// // reset.addEventListener("click", () => {
// //     counter = 0;
// //     digit.innerText = counter;
// // });

// // 
// // 

// const addReply = document.getElementById("add");
// const form = document.querySelector("#inputBox");

// addReply.addEventListener("click", () => {
//     form.classList.replace("hiddin", "addComment");
// });

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const text = document.getElementById("text").value.trim();
//     console.log(text);

//     if (text.length > 0) {
//         addComment(text, document.getElementById("list"));
//     }
//     form.reset();
//     form.classList.replace("addComment", "hiddin");
// })

// function addComment(text, parent) {
//     const li = document.createElement("li");

//     li.innerHTML = `
//        <div class="main" id="id_1">
//         <div class="divBox">
//             <h1>${text}</h1>
//             <a class="reply_btn">Add Reply</a>
//         </div>
//         <ul class=" divUl nestedComments"></ul>
//         <form class="replyBox hiddin">
//             <input type="text" placeholder="Enter your Reply here"  class="reply_text"/>
//             <button id="submit" type="submit">reply</button>
//         </form>
//     </div>
//     `
//     parent.appendChild(li);

//     const replyBtn = li.querySelector(".reply_btn");
//     const form = li.querySelector(".replyBox");

//     replyBtn.addEventListener("click", () => {
//         form.classList.replace("hiddin", "addComment");
//     });

//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const text = li.querySelector(".reply_text").value.trim();
//         console.log(text);

//         if (text.length > 0) {
//             addComment(text, li.querySelector(".nestedComments"));
//         }
//         form.reset();
//         form.classList.replace("addComment", "hiddin");
//     });
// }


