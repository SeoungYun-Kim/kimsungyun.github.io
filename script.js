const queueNumberElement = document.getElementById('queue-number');

function updateQueueNumber() {
    fetch('https://raw.githubusercontent.com/SeoungYun-Kim/kimsungyun.github.io/main/queue.json')
        .then(response => response.json())
        .then(data => {
            queueNumberElement.textContent = `${data.queue}명`;
        })
        .catch(error => console.error('Error fetching queue data:', error));
}

// 매 1초마다 대기 인원 업데이트
setInterval(updateQueueNumber, 1000);

// 페이지 로드 시 즉시 업데이트
updateQueueNumber();


