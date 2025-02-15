function celebrate() {
    // Display heart animation
    const heart = document.getElementById('heart');
    heart.style.opacity = '1';

    // Play sound (optional, make sure you have sound file)
    var audio = new Audio('happy_anniversary.mp3'); // Provide your audio file path
    audio.play();

    // Change message after celebration
    setTimeout(function() {
        document.querySelector('.message').innerHTML = "ขอบคุณที่อยู่ด้วยกันตลอด1ปี10เดือนนะเค้าขอขอบคุณปริมที่อยู่กับเค้าตลอดนะเค้าขขอบคุณปริมนะที่ผ่านเรื่องดีหรือเรื่องไม่ดีมาด้วยกันต่อจากนี้ก็ขอให้เค้กับปริมอยู่ด้วยกันไปตลอดนะ! ";
        
    }, 2000);  // Change message after 2 seconds
}
