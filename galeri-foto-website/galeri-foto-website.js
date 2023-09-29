/*-------------GENERAL VARIABLE------------*/
// AMBIL PARENT IMAGES KECIL
const divImages = document.querySelector("div.images");
// AMBIL PARENT IMAGE BESAR
const divRealPicture = document.querySelector("div.real-picture");
divRealPicture.style.visibility = "hidden";
/*---------------IMAGE-1 ASLI---------------*/
// 1. BUAT FUNGSI SAAT IMAGE-1 KECIL DIKLIK
const image1Kecil = divImages.querySelector("div.image-1");
// 2. IMAGE TAMPILAN BESAR
const image1Besar = divRealPicture.querySelector("div.image-1");
image1Kecil.addEventListener("click", function() {
    divRealPicture.style.visibility = "visible";
    image1Besar.style.visibility = "visible"
});
// 3. AMBIL TANDA CLOSE ICON-1
const closeIcon1 = divRealPicture.querySelector("div.image-1 > img.icon");
closeIcon1.addEventListener("click", function() {
    divRealPicture.style.visibility = "hidden";
    image1Besar.style.visibility ="hidden";
});
closeIcon1.addEventListener("mouseover", function() {
    closeIcon1.style.cursor = "pointer";
});

/*---------------IMAGE-2 ASLI---------------*/
// 1. AMBIL IMAGE-2 KECIL
const image2Kecil = divImages.querySelector("div.image-2");
// 2. AMBIL IMAGE-2 BESAR
const image2Besar = divRealPicture.querySelector("div.image-2");
image2Kecil.addEventListener("click", function() {
    divRealPicture.style.visibility = "visible";
    image2Besar.style.visibility = "visible";
}); 
// 3. AMBIL TANDA CLOSE ICON-2
const closeIcon2 = divRealPicture.querySelector("div.image-2 > img.icon");
closeIcon2.addEventListener("click", function() {
    divRealPicture.style.visibility = "hidden";
    image2Besar.style.visibility ="hidden";
});
closeIcon2.addEventListener("mouseover", function() {
    closeIcon2.style.cursor = "pointer";
});

/*---------------IMAGE-3 ASLI---------------*/
// 1. AMBIL IMAGE-3 KECIL
const image3Kecil = divImages.querySelector("div.image-3");
// 2. AMBIL IMAGE-3 BESAR
const image3Besar = divRealPicture.querySelector("div.image-3");
image3Kecil.addEventListener("click", function() {
    divRealPicture.style.visibility = "visible";
    image3Besar.style.visibility = "visible";
}); 
// 3. AMBIL TANDA CLOSE ICON-3
const closeIcon3 = divRealPicture.querySelector("div.image-3 > img.icon");
closeIcon3.addEventListener("click", function() {
    divRealPicture.style.visibility = "hidden";
    image3Besar.style.visibility ="hidden";
});
closeIcon3.addEventListener("mouseover", function() {
    closeIcon3.style.cursor = "pointer";
});

/*---------------IMAGE-4 ASLI---------------*/
// 1. AMBIL IMAGE-4 KECIL
const image4Kecil = divImages.querySelector("div.image-4");
// 2. AMBIL IMAGE-4 BESAR
const image4Besar = divRealPicture.querySelector("div.image-4");
image4Kecil.addEventListener("click", function() {
    divRealPicture.style.visibility = "visible";
    image4Besar.style.visibility = "visible";
}); 
// 3. AMBIL TANDA CLOSE ICON-4
const closeIcon4 = divRealPicture.querySelector("div.image-4 > img.icon");
closeIcon4.addEventListener("click", function() {
    divRealPicture.style.visibility = "hidden";
    image4Besar.style.visibility ="hidden";
});
closeIcon4.addEventListener("mouseover", function() {
    closeIcon4.style.cursor = "pointer";
});

/*---------------IMAGE-5 ASLI---------------*/
// 1. AMBIL IMAGE-5 KECIL
const image5Kecil = divImages.querySelector("div.image-5");
// 2. AMBIL IMAGE-5 BESAR
const image5Besar = divRealPicture.querySelector("div.image-5");
image5Kecil.addEventListener("click", function() {
    divRealPicture.style.visibility = "visible";
    image5Besar.style.visibility = "visible";
}); 
// 3. AMBIL TANDA CLOSE ICON-5
const closeIcon5 = divRealPicture.querySelector("div.image-5 > img.icon");
closeIcon5.addEventListener("click", function() {
    divRealPicture.style.visibility = "hidden";
    image5Besar.style.visibility ="hidden";
});
closeIcon5.addEventListener("mouseover", function() {
    closeIcon5.style.cursor = "pointer";
});



