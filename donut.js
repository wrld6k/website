function createDonut() {
    if (window.innerWidth <= 768) {
        console.log("Donut animation disabled on mobile devices");
        return;
    }

    const donut = document.createElement('pre');
    donut.id = 'ascii-donut';
    donut.style.position = 'fixed';
    donut.style.top = '170px';
    donut.style.left = '30px';
    donut.style.fontSize = '6px';
    donut.style.lineHeight = '6px';
    donut.style.color = '#ffffff';
    donut.style.fontFamily = 'monospace';
    donut.style.zIndex = '1000';
    document.body.appendChild(donut);

    let A = 1, B = 1;
    const R1 = 1, R2 = 2, K1 = 150, K2 = 5;
    
    function renderFrame() {
        // ... existing renderFrame code ...
    }

    renderFrame();
}

document.addEventListener('DOMContentLoaded', createDonut);

// Add resize event listener to handle orientation changes
window.addEventListener('resize', () => {
    const donut = document.getElementById('ascii-donut');
    if (window.innerWidth <= 768) {
        if (donut) donut.style.display = 'none';
    } else {
        if (donut) donut.style.display = 'block';
        else createDonut();
    }
});