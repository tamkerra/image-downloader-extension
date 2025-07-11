chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: extractImages
  }, ([{ result }]) => {
    const container = document.getElementById('image-list');
    result.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.style.width = '100px';
      img.style.margin = '5px';
      img.style.cursor = 'pointer';
      img.onclick = () => downloadImage(src, index);
      container.appendChild(img);
    });
  });
});

function extractImages() {
  return Array.from(document.images)
    .map(img => img.src)
    .filter(src => /\.(jpe?g|png|gif|webp|bmp)$/i.test(src));
}

function downloadImage(url, index) {
  const filename = `image_${index}.${url.split('.').pop().split('?')[0]}`;
  chrome.downloads.download({
    url: url,
    filename: filename
  });
}
