const facebookButton = document.getElementById('facebook-button');
const instagramButton = document.getElementById('instagram-button');

function shareOnFacebook () {
  const url = encodeURIComponent(window.location.href);
  const shareUrl = `https://www.facebook.com/shares/shares.php?u=${url}`;
  window.open(shareUrl, '_blank');
}

function shareOnInstagram () {
  const text = encodeURIComponent('check out this website:');
  const url = encodeURIComponent(window.location.href);
  const shareUrl = `https://www.instagram.com/?url=${url}&caption=${text}`;
  window.open(shareUrl, '_blank');

}

facebookButton.addEventListener('click', shareOnFacebook);
instagramButton.addEventListener('click', shareOnInstagram);