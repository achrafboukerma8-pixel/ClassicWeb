function searchSite(){

    var text = document.getElementById("searchInput").value.toLowerCase();

    if(text.includes("windows 7")){
        window.location.href="windows7.html";
    }

    else if(text.includes("windows xp")){
        window.location.href="windowsxp.html";
    }

    else if(text.includes("internet explorer")){
        window.location.href="internet-explorer.html";
    }

    else if(text.includes("chrome")){
        window.location.href="chrome.html";
    }

    else if(text.includes("youtube")){
        window.location.href="youtube.html";
    }

    else if(text.includes("minecraft")){
        window.location.href="minecraft.html";
    }

    else{
        alert("No results found.");
    }

}
function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");

}