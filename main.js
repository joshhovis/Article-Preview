document.addEventListener("DOMContentLoaded", () => {
    const authorShareBtn = document.querySelector('.author-share');
    const socialShareBtn = document.querySelector('.share-arrow');
    const authorDiv = document.getElementById('author');
    const shareDiv = document.getElementById('share');
    
    if (window.innerWidth <= 768) {
        authorShareBtn.addEventListener('click', () => {
            authorDiv.style = 'display: none;'
            shareDiv.style = 'display: flex;'
        })

        socialShareBtn.addEventListener('click', () => {
            authorDiv.style = 'display: flex;'
            shareDiv.style = 'display: none;'
        })
    }

});
