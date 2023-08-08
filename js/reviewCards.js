// Create a review card
function createReviewCard(reviewData) {
    const card = document.createElement("div");
    card.className = "card";

    const reviewerName = document.createElement("p");
    reviewerName.className = "reviewerName";
    reviewerName.textContent = `Name: ${reviewData.name}`;
    card.appendChild(reviewerName);

    const reviewDate = document.createElement("p");
    reviewDate.className = "reviewDate";
    reviewDate.textContent = `Date: ${reviewData.date}`;
    card.appendChild(reviewDate);

    const reviewRating = document.createElement("p");
    reviewRating.className = "reviewRating";
    reviewRating.textContent = `Rating: ${ratingStars(reviewData.rating)}`;
    card.appendChild(reviewRating);

    const reviewContent = document.createElement("p");
    reviewContent.className = "reviewContent";
    reviewContent.textContent = `Review: ${reviewData.review}`;
    card.appendChild(reviewContent);

    return card;
}

// Display review cards
function displayReviewCards() {
    const container = document.getElementById("reviews");
    container.innerHTML = "";

    reviewData.forEach((rev) => {
        const reviewCard = createReviewCard(rev);
        container.appendChild(reviewCard);
    });
}

// Display stars instead of rating number
function ratingStars(rating) {
    const stars = "★ ".repeat(rating) + "☆ ".repeat(5 - rating);
    return stars.trim();
}

// Add new review card
function addNewReview(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = new Date().toISOString().slice(0, 10);
    const rating = parseInt(form.rating.value);
    const review = form.review.value;

    const newReview = { name, date, rating, review };
    reviewData.push(newReview);

    displayReviewCards();
    
    // Clear the form
    form.reset();
}

document.addEventListener("DOMContentLoaded", function () {
    displayReviewCards();

    const form = document.getElementById("reviewForm");
    form.addEventListener("submit", addNewReview);
});