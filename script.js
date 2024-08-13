const reviewList = document.getElementById('review-list');
const submitButton = document.getElementById('submit-review');

submitButton.addEventListener('click', () => {
    const title = document.getElementById('movie-title').value;
    const reviewText = document.getElementById('review-text').value;
    const rating = document.getElementById('rating').value;

    if (title === '' || reviewText === '') return;

    const reviewItem = document.createElement('li');

    const reviewTitle = document.createElement('h3');
    reviewTitle.textContent = `${title} - Calificación: ${rating}/5`;

    const reviewParagraph = document.createElement('p');
    reviewParagraph.textContent = reviewText;

    reviewItem.appendChild(reviewTitle);
    reviewItem.appendChild(reviewParagraph);

    reviewList.appendChild(reviewItem);

    document.getElementById('movie-title').value = '';
    document.getElementById('review-text').value = '';
});
