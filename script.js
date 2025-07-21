function switchtab(tab) {
   var informationcontainer = document.getElementById("tabinformationcontainer");
   var tabinformation = document.getElementById("tabinformation");
   switch (tab) {
      case "about":
         informationcontainer.className = "";
         informationcontainer.classList.add("container", "about");
         tabinformation.innerHTML = `
<h4>I am an aviation professional with a vast experience commerical aviation and aircraft maintenance. 
.</h4>
`
         break
      case "photo":
         informationcontainer.className = "";
         informationcontainer.classList.add("container", "photo");
         tabinformation.innerHTML = `<div class="photoTab"> <img src="./photos/IMG_download.jpeg">
         </div> `
         break
      case "portfolio":
         informationcontainer.className = "";
         informationcontainer.classList.add("container", "port");
         tabinformation.innerHTML = `<h4>Portfolio info goes here</h4>`
         break
      case "resume":
         informationcontainer.className = "";
         informationcontainer.classList.add("container", "resume");
         tabinformation.innerHTML = `<h1 class "name">For the most current resume please send me an email with your request</h1>





`
         break
      case "contact":
         informationcontainer.className = "";
         informationcontainer.classList.add("container", "contact");
         tabinformation.innerHTML =`<h1>Joseph Kazem</h1>`
        tabinformation.innerHTML =`<h2> Email joseph.kazem13@gmail.com<h2>`



          break
      case "github":
         informationcontainer.className = "";
         informationcontainer.classList.add("container", "git");
         tabinformation.innerHTML = `<a href="http://www.https://github.com/joekazem?tab=repositories">Github links</a>`
         break
   }

}