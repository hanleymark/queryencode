// Function to show a toaster message
function showToaster(message) {
    const toaster = document.getElementById('toaster');
    toaster.innerText = message;
    toaster.classList.add('show');
    setTimeout(() => {
      toaster.classList.remove('show');
    }, 3000);
  }
  
  // Handle encoding
  document.getElementById('encode').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    const encoded = encodeURIComponent(input);
    document.getElementById('output').innerText = encoded;
    showToaster('String encoded successfully!');
  });
  
  // Handle decoding
  document.getElementById('decode').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    try {
      const decoded = decodeURIComponent(input);
      document.getElementById('output').innerText = decoded;
      showToaster('String decoded successfully!');
    } catch (error) {
      document.getElementById('output').innerText = 'Error: Invalid input for decoding.';
      showToaster('Error: Invalid input for decoding.');
    }
  });
  
  // Handle copy to clipboard
  document.getElementById('copy').addEventListener('click', () => {
    const output = document.getElementById('output').innerText;
    if (output) {
      navigator.clipboard.writeText(output)
        .then(() => {
          showToaster('Copied to clipboard!');
        })
        .catch(err => {
          showToaster('Failed to copy to clipboard.');
        });
    } else {
      showToaster('Nothing to copy!');
    }
  });
  