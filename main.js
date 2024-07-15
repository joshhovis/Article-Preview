document.addEventListener("DOMContentLoaded", () => {
    const authorShareBtn = document.querySelector('.author-share');
    const socialShareBtn = document.querySelector('.share-arrow');
    const authorDiv = document.getElementById('author');
    const shareDiv = document.getElementById('share');
    const authorShareArrowIcon = document.querySelector('.author-share-icon');

    const filterWhite = 'invert(100%) sepia(100%) saturate(0%) hue-rotate(224deg) brightness(200%) contrast(102%);'

    let shareVisible = false;
    
    if (window.innerWidth <= 768) {
        authorShareBtn.addEventListener('click', () => {
            authorDiv.style = 'display: none;'
            shareDiv.style = 'display: flex;'
        })

        socialShareBtn.addEventListener('click', () => {
            authorDiv.style = 'display: flex;'
            shareDiv.style = 'display: none;'
        })
    } else {
        authorShareBtn.addEventListener('click', () => {
            shareVisible = !shareVisible;
            if (shareVisible) {
                authorShareArrowIcon.style = `filter:${filterWhite}`
                authorShareBtn.style = 'background-color: #6E8098'
                shareDiv.style = 'display: flex;'
            } else {
                resetShareDiv();
            }
        });

        document.addEventListener('click', (e) => {
            if (!authorShareBtn.contains(e.target) && !shareDiv.contains(e.target)) {
                if (shareVisible) {
                    resetShareDiv();
                }
            }
        });

        const resetShareDiv = () => {
            shareDiv.style.display = 'none';
            authorShareArrowIcon.style.filter = '';
            authorShareBtn.style.backgroundColor = '#ECF2F8'
            shareVisible = false;
        };
    }
});
