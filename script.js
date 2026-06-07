function sendMessage() { 
  const input = document.getElementById("userInput"); 
  const messages = document.getElementById("messages"); 
  const text = input.value.trim(); 
 
  if (text === "") { 
    alert("Wpisz pytanie."); 
    return; 
  } 
 
  const userMessage = document.createElement("div"); 
  userMessage.className = "user-message"; 
  userMessage.innerHTML = "<strong>Ty:</strong> " + text; 
  messages.appendChild(userMessage); 
 
  const botMessage = document.createElement("div"); 
  botMessage.className = "bot-message"; 
 
  if (text.toLowerCase().includes("kontakt")) { 
    botMessage.innerHTML = "<strong>Bot:</strong> Skontaktuj się z urzędem przez formularz kontaktowy."; 
  } else if (text.toLowerCase().includes("godziny")) { 
    botMessage.innerHTML = "<strong>Bot:</strong> Godziny pracy znajdziesz na stronie urzędu lub w sekcji FAQ."; 
  } else { 
    botMessage.innerHTML = "<strong>Bot:</strong> Nie mogę potwierdzić tej informacji. Skontaktuj się z operatorem."; 
  } 
 
  messages.appendChild(botMessage); 
  messages.scrollTop = messages.scrollHeight; 
  input.value = ""; 
} 