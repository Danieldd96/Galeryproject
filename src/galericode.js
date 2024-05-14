const fullImgBox = document.getElementById("fullImgBox"),
fullImg = document.getElementById("fullImg");



function openFullImg(reference) {
    fullImgBox.style.display = "flex"
    fullImg.src = reference
    
}
function closeImg() {
    fullImgBox.style.display = "none";
    
}


function userPage() {
    window.location.href = '/src/user.html'
}
function logout() {
    window.location.href = "/src/Login.html"
    
}
function shop() {
    window.location.href = "https://arteacr.com/"
    
}