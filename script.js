
  
  document.getElementById('noButton').addEventListener('mouseover', moveRandomly);
  
  function moveRandomly() {
    const button = document.getElementById('noButton');
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;
  
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  
   
  }
  
  

  function showMessage() {
    // Hide the buttons
    document.getElementById('yesButton').style.display = 'none';
    document.getElementById('noButton').style.display = 'none';
  
    // Display the message below the first main item
    const messageContainer = document.createElement('div');
    messageContainer.id = 'messageContainer';
    messageContainer.innerHTML = '<H2>Just Kidding you can leave a comment in contact page !!</p>';
    document.body.appendChild(messageContainer);
    positionMessage();
  }
  
  function positionMessage() {
    const messageContainer = document.getElementById('messageContainer');
    const firstMainItem = document.getElementById('firstMainItem'); // Adjust with the actual ID or selector of your first main item
    const topPosition = firstMainItem.offsetTop + firstMainItem.offsetHeight + 20; // Adjust the offset as needed
  
    messageContainer.style.position = 'absolute';
    messageContainer.style.left = '50%';
    messageContainer.style.transform = 'translateX(-50%)';
    messageContainer.style.top = `${topPosition}px`;
  }