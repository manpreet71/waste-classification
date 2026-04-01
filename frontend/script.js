const uploadArea    = document.getElementById('upload-area');
const fileInput     = document.getElementById('file-input');
const uploadContent = document.getElementById('upload-content');
const previewImg    = document.getElementById('preview-img');
const predictBtn    = document.getElementById('predict-btn');
const resultCard    = document.getElementById('result-card');
const scanLine      = document.getElementById('scan-line');

let selectedFile = null;

uploadArea.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
});

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
});

function handleFile(file) {
    selectedFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
        previewImg.src = e.target.result;
        previewImg.hidden = false;
        uploadContent.hidden = true;
    };
    reader.readAsDataURL(file);
    predictBtn.disabled = false;
    resultCard.hidden = true;
}

predictBtn.addEventListener('click', async () => {
    if (!selectedFile) return;

    predictBtn.textContent = 'Analysing...';
    predictBtn.disabled = true;
    scanLine.classList.add('active');

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
        const response = await fetch('http://localhost:8000/predict', {
            method : 'POST',
            body   : formData,
        });
        const result = await response.json();
        showResult(result);
    } catch (error) {
        alert('Error: Make sure the backend is running on localhost:8000');
    } finally {
        predictBtn.textContent = '✦ Classify Waste';
        predictBtn.disabled = false;
        scanLine.classList.remove('active');
    }
});

function showResult(result) {
    document.getElementById('waste-type').textContent       = result.waste_type.toUpperCase();
    document.getElementById('waste-type-badge').textContent = result.waste_type.toUpperCase();
    document.getElementById('confidence').textContent       = result.confidence + '%';
    document.getElementById('disposal').textContent         = result.disposal;

    const categoryEl = document.getElementById('category');
    categoryEl.textContent = result.biodegradable ? 'Biodegradable' : 'Non-Biodegradable';
    categoryEl.className   = 'value ' + (result.biodegradable ? 'biodegradable' : 'non-biodegradable');

    const reusableEl = document.getElementById('reusable');
    reusableEl.textContent = result.reusable ? 'Yes' : 'No';
    reusableEl.className   = 'value ' + (result.reusable ? 'yes' : 'no');

    const recyclableEl = document.getElementById('recyclable');
    recyclableEl.textContent = result.recyclable ? 'Yes' : 'No';
    recyclableEl.className   = 'value ' + (result.recyclable ? 'yes' : 'no');

    setTimeout(() => {
        document.getElementById('conf-bar').style.width = result.confidence + '%';
    }, 100);

    resultCard.hidden = false;
    resultCard.scrollIntoView({ behavior: 'smooth' });
}