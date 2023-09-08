var like = 0;
// Function to handle the like action
function likeTweet(tweetId) {
    var likeElement = document.getElementById('likes_1' + tweetId);
    var tweetIcon = document.querySelector(`.icon-star[data-tweet-id="${tweetId}"]`);

    if (tweetIcon.classList.contains('liked')) {
        tweetIcon.classList.remove('liked');
        like--;  // Decrement the like count
    } else {
        tweetIcon.classList.add('liked');
        like++;  // Increment the like count
    }

    likeElement.innerHTML = like;  // Update the like count in the HTML
    alert(`Liked tweet with ID ${tweetId}`);
}

// Function to handle the share action
function shareTweet(tweetId) {
    // You can implement your own logic here to handle the share action
    alert(`Shared tweet with ID ${tweetId}`);
}
        