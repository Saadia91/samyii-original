//
//
// 	Scroll to Top Button
//
//
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//
//
//	Top Navigation
//
//
let navOne = document.getElementById('navLink');
	if (navOne) navOne.innerText = "SAMYii";
	navLink.setAttribute("href", "http://www.samyii.com/");

	navOne = document.getElementById('navLink1');
	if (navOne) navOne.innerText = "Home";
	navLink1.setAttribute("href", "index.html");

	navOne = document.getElementById('navLink2');
	if (navOne) navOne.innerText = "Photography Journal";
	navLink2.setAttribute("href", "photography-gallery.html");

	navOne = document.getElementById('navLink3');
	if (navOne) navOne.innerText = "About";
	navLink3.setAttribute("href", "about.html");



//
//
// 	Tittle
//
//
let title = document.getElementById('page-title');
	if (title) title.innerText = "SAMYii NETWORK";






//
//
// 	Disclaimer
//
//
let disclaimer = document.getElementById('disclaim1');
	disclaimer.innerText = "To download my images for free, head over to my ";

	disclaimer = document.getElementById('disclaim2');
	disclaimer.innerText = "Pixabay ";
	disclaim2.setAttribute("href", "https://pixabay.com/en/users/SaadiaAMYii-5848148/");

	disclaimer = document.getElementById('disclaim3');
	disclaimer.innerText = "and ";

	disclaimer = document.getElementById('disclaim4');
	disclaimer.innerText = "Unsplash ";
	disclaim4.setAttribute("href", "https://unsplash.com/@saadia91");

	disclaimer = document.getElementById('disclaim5');
	disclaimer.innerText = "profiles. See Unsplash collections in the external links above to download images used in some of my web development projects as well as upcoming projects.";


//
//
// 	Pre-Footer
//
//
let foot = document.getElementById('listHead1');
	foot.innerText = "Navigation";

	foot = document.getElementById('listHead2');
	foot.innerText = "External Links";

	foot = document.getElementById('footLink1');
	foot.innerText = "Home";
	footLink1.setAttribute("href", "http://www.samyii.com/");

	foot = document.getElementById('footLink3');
	foot.innerText = "Photography Journal";
	footLink3.setAttribute("href", "photography-gallery.html");

	foot = document.getElementById('footLink4');
	foot.innerText = "About";
	footLink4.setAttribute("href", "about.html");

	foot = document.getElementById('footLink5');
	foot.innerText = "Photography Collection - Its a Wonderful Life";
	footLink5.setAttribute("href", "collections/wonderful-life.html");

	foot = document.getElementById('footLink6');
	foot.innerText = "Photography Collection - Ladies in Love";
	footLink6.setAttribute("href", "collections/ladies-in-love.html");

	foot = document.getElementById('footLink7');
	foot.innerText = "Photography Collection - Random Harvest";
	footLink7.setAttribute("href", "collections/random-harvest.html");

	foot = document.getElementById('footLink8');
	foot.innerText = "Photography Collection - How Green Was My Valley";
	footLink8.setAttribute("href", "collections/green-valley.html");

	foot = document.getElementById('footLink9');
	foot.innerText = "Photography Collection - Some Like it Hot";
	footLink9.setAttribute("href", "collections/hot.html");

	foot = document.getElementById('footLink10');
	foot.innerText = "Photography Collection - Shadow of a Doubt";
	footLink10.setAttribute("href", "collections/shadow-of-doubt.html");


	
	foot = document.getElementById('footLink11');
	foot.innerText = "Twitter";
	footLink11.setAttribute("href", "https://twitter.com/Sa3dia_");

	foot = document.getElementById('footLink12');
	foot.innerText = "Pixabay";
	footLink12.setAttribute("href", "https://pixabay.com/en/users/SaadiaAMYii-5848148/");

	foot = document.getElementById('footLink13');
	foot.innerText = "Unsplash";
	footLink13.setAttribute("href", "https://unsplash.com/@saadia91");

	foot = document.getElementById('footLink14');
	foot.innerText = "Gitgub";
	footLink14.setAttribute("href", "https://github.com/Saadia91");

	foot = document.getElementById('footLink15');
	foot.innerText = "Project - Literature";
	footLink15.setAttribute("href", "https://her-written-word.herokuapp.com/");

	foot = document.getElementById('footLink16');
	foot.innerText = "Project - Recipe Website";
	footLink16.setAttribute("href", "https://great-food-big-bites.herokuapp.com/");

	foot = document.getElementById('footLink17');
	foot.innerText = "Project - Tribute Page";
	footLink17.setAttribute("href", "https://audrey-hepburn-tribute.herokuapp.com/");

	foot = document.getElementById('footLink18');

	foot = document.getElementById('footLink19');
	foot.innerText = "Unsplash - Literature Collection";
	footLink19.setAttribute("href", "https://unsplash.com/collections/2231598/literature-blog");

	foot = document.getElementById('footLink20');
	foot.innerText = "Unsplash - Food Blog Collection";
	footLink20.setAttribute("href", "https://unsplash.com/collections/2296153/recipe-blog");



//
//
// Featured Images
//
//
let img = document.getElementById('feat-img1');
	img.src = "photography/love/001.JPG";
	featLink1.setAttribute("href", "collections/ladies-in-love.html");

	img = document.getElementById('feat-img2');
	img.src = "photography/love/002.jpg";
	featLink2.setAttribute("href", "collections/ladies-in-love.html");

	img = document.getElementById('feat-img3');
	img.src = "photography/love/006.jpg";
	featLink3.setAttribute("href", "collections/ladies-in-love.html");

	img = document.getElementById('feat-img4');
	img.src = "photography/love/005.jpg";
	featLink4.setAttribute("href", "collections/ladies-in-love.html");

	img = document.getElementById('feat-img5');
	img.src = "photography/love/011.jpg";
	featLink5.setAttribute("href", "collections/ladies-in-love.html");

	img = document.getElementById('feat-img6');
	img.src = "photography/love/010.jpg";
	featLink6.setAttribute("href", "collections/ladies-in-love.html");

//
//
// 	Footer
//
//

let foots = document.getElementById('footsLine1');
	foots.innerText = "For the maximum experience, please view on a desktop";

	foots = document.getElementById('footsLine2');
	foots.innerText = "To find out more, please visit the ";
	foots = document.getElementById('footsLine2a');
	foots.innerText = "About page";
	footsLine2a.setAttribute("href", "about.html");

	foots = document.getElementById('footsLine3');
	foots.innerText = "The stunning images used on some of my web development projects are from the amazing photographers at";
	foots = document.getElementById('footsLine3a');
	foots.innerText = "Unsplash";
	footsLine3a.setAttribute("href", "https://unsplash.com/@saadia91/collections");

	foots = document.getElementById('footsLine4');
	foots.innerText = "For business enquiries, please visit ";
	foots = document.getElementById('footsLine4a');
	foots.innerText = "Yafii Enterprise";
	footsLine4a.setAttribute("href", "https://www.yafii-enterprise.com/");

	foots = document.getElementById('footsCopy');
	foots.innerText = "© SAMYii";
	foots = document.getElementById('footsCopy2');
	foots.innerText = " 2018 | All rights reserved";




