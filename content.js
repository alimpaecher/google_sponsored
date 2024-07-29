function addBlinkingEffect() {
    // Create a style element for blinking effect
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
      @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
      }
      .blink {
        animation: blink 1s infinite;
        color: red;
      }
    `;
    document.getElementsByTagName('head')[0].appendChild(style);
  
    // Select elements that contain the word 'Sponsored' exactly and not their parents
    const sponsoredElements = document.querySelectorAll('span, a, div');
  
    sponsoredElements.forEach(element => {
      if (element.innerText.trim() === 'Sponsored') {
        element.classList.add('blink'); // Add the blink class to apply the animation
      }
    });
  }
  
  // Run the function initially
  addBlinkingEffect();
  
  // Run the function whenever the DOM changes
  const observer = new MutationObserver(addBlinkingEffect);
  observer.observe(document.body, { childList: true, subtree: true });
  