const followBtn = document.getElementById('followBtn');
let isFollowing = false;

followBtn.addEventListener('click', () => {
  isFollowing = !isFollowing;
  followBtn.textContent = isFollowing ? 'Following 💞' : 'Follow 💖';
  followBtn.style.backgroundColor = isFollowing ? '#9b59b6' : '#ff69b4';
  followBtn.style.transform = 'scale(1.1)';
  setTimeout(() => {
    followBtn.style.transform = 'scale(1)';
  }, 200);
});