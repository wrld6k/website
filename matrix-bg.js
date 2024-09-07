document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-bg';
    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    let width, height;

    const resizeCanvas = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const dots = [];
    const dotCount = Math.floor(width * height / 10000);

    for (let i = 0; i < dotCount; i++) {
        dots.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 1,
            alpha: Math.random() * 0.5 + 0.5,
            velocity: Math.random() * 0.5 + 0.5
        });
    }

    const drawDots = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#333';

        dots.forEach(dot => {
            ctx.globalAlpha = dot.alpha;
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
            ctx.fill();

            dot.y += dot.velocity;
            if (dot.y > height) {
                dot.y = 0;
            }
        });

        requestAnimationFrame(drawDots);
    };

    drawDots();
});