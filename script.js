// 读取名单文件
function readNamesFromFile() {
    fetch('./name.txt')
      .then(response => response.text())
      .then(data => {
        const names = data.split('\n');
        startButton.addEventListener('click', () => startRolling(names));
      })
      .catch(error => console.error(error));
  }
  
  // 开始滚动动画
  function startRolling(names) {
    const nameDisplay = document.getElementById('nameDisplay');
    const rollInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * names.length);
      nameDisplay.textContent = names[randomIndex];
    }, 51.99);
  
    setTimeout(() => {
      clearInterval(rollInterval);
    }, Math.random() * 600 + 300);
  }
  
  // 页面加载完成后执行
  window.onload = function() {
    const startButton = document.getElementById('startButton');
    readNamesFromFile();
  };