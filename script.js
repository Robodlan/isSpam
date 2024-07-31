const text = document.getElementById("texterea")
const result = document.getElementById("result")
const btn = document.getElementById("btn")

const isSpam = (msg) => false

btn.addEventListener("click", () =>{
  if (text.value === "") {
    alert("Please enter a message.")
    return
  }
})