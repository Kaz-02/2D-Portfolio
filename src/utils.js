// Function to display dialogue text in a textbox with typing effect
export function displayDialogue(text, onDisplayEnd) {
  // Get the US elemetns for the dialogue
    const dialogueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");
  
    // Show the dialogue UI
    dialogueUI.style.display = "block";
    let index = 0;
    let currentText = "";

    // Typing effect using setInterval
    const intervalRef = setInterval(() => {
      // If there are still characters left to display
      if (index < text.length) {
        currentText += text[index];
        dialogue.innerHTML = currentText;
        index++;
        return;
      }
      // Clear interval once all characters are displayed
      clearInterval(intervalRef);
    }, 1);
  
    const closeBtn = document.getElementById("close");
  
    // Fuction to handle close button click
    function onCloseBtnClick() {
      onDisplayEnd();// Call the callback function
      dialogueUI.style.display = "none"; // Hide the dialogue UI
      dialogue.innerHTML = ""; // Clear the dialogue text
      clearInterval(intervalRef); // Clear the typing interval
      closeBtn.removeEventListener("click", onCloseBtnClick); // Remove click event listener
    }
  
    // Add event listener for the close button click
    closeBtn.addEventListener("click", onCloseBtnClick);
  
    // Add event listener for the 'Enter' key press to close dialogue
    addEventListener("keypress", (key) => {
      if (key.code === "Enter") {
        closeBtn.click(); // Trigger the close button click
      }
    });
  }
  
  // Function to set camera scale based on the resize factor
  export function setCamScale(k) {
    const resizeFactor = k.width() / k.height();
    if (resizeFactor < 1) {
      k.camScale(k.vec2(0.5));
    } else {
      k.camScale(k.vec2(1));
    }
  }