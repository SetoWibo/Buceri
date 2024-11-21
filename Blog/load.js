// Menambahkan HTML loading ke body
document.body.insertAdjacentHTML(
    'afterbegin',
    `<div id="loading-overlay" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s;
    ">
        <div class="loading-spinner" style="
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        "></div>
    </div>
    <style>
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        body {
            opacity: 0;
            transition: opacity 0.5s;
        }
        body.loaded {
            opacity: 1;
        }
    </style>`
);

// Menampilkan loading saat halaman dimuat
window.addEventListener('load', function() {
    const loadingOverlay = document.getElementById('loading-overlay');
    document.body.classList.add('loaded');
    
    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500);
    }, 1000);
});

// Menampilkan loading saat berpindah halaman
document.addEventListener('click', function(e) {
    const target = e.target.closest('a');
    if (target && target.href && !target.hasAttribute('download')) {
        e.preventDefault();
        const loadingOverlay = document.getElementById('loading-overlay');
        loadingOverlay.style.display = 'flex';
        loadingOverlay.style.opacity = '1';
        
        setTimeout(() => {
            window.location.href = target.href;
        }, 500);
    }
});