document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('wheel');
    const ctx = canvas.getContext('2d');
    const optionsInput = document.getElementById('options');
    const setOptionsBtn = document.getElementById('setOptions');
    const spinBtn = document.getElementById('spin');
    const resetBtn = document.getElementById('reset');
    const resultDiv = document.getElementById('result');

    let options = [];
    let currentAngle = 0;
    let isSpinning = false;

    // Function to draw the wheel with segments and labels.
    const drawWheel = () => {
        const numOptions = options.length;
        if (numOptions === 0) return;

        const arc = (Math.PI * 2) / numOptions;
        const radius = canvas.width / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(radius, radius);
        ctx.rotate(currentAngle);

        for (let i = 0; i < numOptions; i++) {
            const angle = i * arc;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, radius, angle, angle + arc);
            ctx.fillStyle = i % 2 === 0 ? '#FFCDD2' : '#F8BBD0';
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.stroke();

            // Draw text label
            ctx.save();
            ctx.fillStyle = '#000';
            ctx.rotate(angle + arc / 2);
            ctx.translate(radius * 0.65, 0);
            ctx.rotate(Math.PI / 2);
            ctx.textAlign = "center";
            ctx.font = "16px sans-serif";
            ctx.fillText(options[i], 0, 0);
            ctx.restore();
        }

        ctx.restore();
    }

    // Function to spin the wheel.
    const spinWheel = () => {
        if (isSpinning || options.length === 0) return;
        isSpinning = true;

        // Calculate a random target angle (multiple full rotations plus extra)
        const spins = Math.floor(Math.random() * 3) + 3; // at least 3 full spins
        const randomAngle = Math.random() * Math.PI * 2;
        const targetAngle = spins * Math.PI * 2 + randomAngle;

        const duration = 4000; // 4 seconds animation
        const start = performance.now();
        const initialAngle = currentAngle;

        function animate(time) {
            const elapsed = time - start;
            if (elapsed < duration) {
                const progress = elapsed / duration;
                // Ease-out quadratic effect for a smooth slow down
                const easedProgress = 1 - (1 - progress) * (1 - progress);
                currentAngle = initialAngle + targetAngle * easedProgress;
                drawWheel();
                requestAnimationFrame(animate);
            } else {
                currentAngle = (initialAngle + targetAngle) % (Math.PI * 2);
                drawWheel();
                isSpinning = false;
                determineResult();
            }
        }
        requestAnimationFrame(animate);
    }

    // Determine which segment the pointer (top center) is pointing to.
    const determineResult = () => {
        const numOptions = options.length;
        const arc = (Math.PI * 2) / numOptions;
        // Assuming pointer is at top (angle 0) relative to the wheel.
        let adjustedAngle = (Math.PI * 2 - currentAngle) % (Math.PI * 2);
        const index = Math.floor(adjustedAngle / arc) % numOptions;
        resultDiv.textContent = "Result: " + options[index];
    }

    // Event listener to set the options and draw the wheel.
    setOptionsBtn.addEventListener('click', () => {
        const raw = optionsInput.value.trim();
        if (raw.length === 0) return;
        options = raw.split(',').map(opt => opt.trim()).filter(opt => opt !== '');
        if (options.length < 2) {
            alert("Please enter at least 2 options separated by commas.");
            return;
        }
        currentAngle = 0;
        drawWheel();
        resultDiv.textContent = "";
    });

    spinBtn.addEventListener('click', spinWheel);

    resetBtn.addEventListener('click', () => {
        options = [];
        optionsInput.value = "";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        resultDiv.textContent = "";
    });
});
