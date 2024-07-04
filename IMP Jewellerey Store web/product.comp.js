   function checkPin() {
        var enteredPin = document.getElementById("pinInput").value;
        var pinMessage = document.getElementById("pinMessage");
      
        // Assuming the correct PIN is "1234"
        var correctPin = "1234";
      
        if (enteredPin === correctPin) {
          pinMessage.textContent = "PIN correct!";
        } else {
          pinMessage.textContent = "Incorrect PIN. Please try again.";
        }
      }
