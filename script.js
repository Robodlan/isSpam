const text = document.getElementById("texterea")
const result = document.getElementById("result")
const btn = document.getElementById("btn")


const helpRegex = /please help/i
const isSpam = (msg) => msg.text(helpRegex)


btn.addEventListener("click", () =>{
    console.log(isSpam);
  if (text.value === "") {
    alert("Please enter a message.")
    return
  }
  result.textContent = isSpam(text.value) ?  
  "Oh no! This looks like a spam message." : 
  "This message does not seem to contain any spam."
  text.value = ""
  
})