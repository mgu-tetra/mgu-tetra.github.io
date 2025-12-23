document.addEventListener('DOMContentLoaded', () => {
    const logoBox = document.querySelector('.logo-box');
    
    // スクロールイベントを監視
    window.addEventListener('scroll', () => {
        // 上から100px以上スクロールしたら表示クラスをつける
        if (window.scrollY > 100) {
            logoBox.classList.add('is-visible');
        } else {
            logoBox.classList.remove('is-visible');
        }
    });
});