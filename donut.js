function createDonut() {
    const donut = document.createElement('pre');
    donut.id = 'ascii-donut';
    donut.style.position = 'fixed';
    donut.style.top = '170px';  // Increased from 150px to 170px to move it 20px down
    donut.style.left = '30px';  // Increased from 20px to 30px to move it 10px to the right
    donut.style.fontSize = '6px';
    donut.style.lineHeight = '6px';
    donut.style.color = '#ffffff';  // Changed color to white
    donut.style.fontFamily = 'monospace';
    donut.style.zIndex = '1000';
    document.body.appendChild(donut);

    let A = 1, B = 1;
    const R1 = 1, R2 = 2, K1 = 150, K2 = 5;
    
    function renderFrame() {
        let b = [];
        let z = [];
        let output = '';

        A += 0.035;  // Reduced speed by half
        B += 0.015;  // Reduced speed by half
        const cA = Math.cos(A), sA = Math.sin(A),
              cB = Math.cos(B), sB = Math.sin(B);

        for(let k = 0; k < 1760; k++) {
            b[k] = k % 80 == 79 ? '\n' : ' ';
            z[k] = 0;
        }

        for(let j = 0; j < 6.28; j += 0.07) {
            const ct = Math.cos(j), st = Math.sin(j);
            for(let i = 0; i < 6.28; i += 0.02) {
                const sp = Math.sin(i), cp = Math.cos(i),
                      h = ct + 2, 
                      D = 1 / (sp * h * sA + st * cA + 5),
                      t = sp * h * cA - st * sA;

                const x = Math.floor(40 + 30 * D * (cp * h * cB - t * sB)),
                      y = Math.floor(12 + 15 * D * (cp * h * sB + t * cB)),
                      o = Math.floor(8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB)),
                      N = Math.floor(x + 80 * y);
                
                if(y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[N]) {
                    z[N] = D;
                    b[N] = '.,-~:;=!*#$@'[Math.max(o, 0)];
                }
            }
        }

        donut.textContent = b.join('');
        requestAnimationFrame(renderFrame);
    }

    renderFrame();
}

document.addEventListener('DOMContentLoaded', createDonut);