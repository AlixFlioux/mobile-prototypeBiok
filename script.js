const screens = document.querySelectorAll(".state");
const hotspotContainer = document.getElementById("hotspots");

let current = 0;


const hotspots = [

    // Homepage → Menu 1
    {
        state:0,
        x:4.8,
        y:11.8,
        w:11,
        h:6,
        next:1
    },

    // Menu 1 → Menu 2
    {
        state:1,
        x:6.8,
        y:27,
        w:36,
        h:6,
        next:2
    },

    {
    state:1,
    x:91,
    y:27,
    w:7,
    h:6,
    next:2
},

    // Menu 2 → Menu 3
    {
        state:2,
        x:7.2,
        y:20,
        w:36,
        h:6,
        next:3
    },

    {
    state:2,
    x:89,
    y:19.7,
    w:8,
    h:6,
    next:3
},

    // CLOSE (Menu 1)
    {
        state:1,
        x:90,
        y:4.8,
        w:8,
        h:6,
        action:"home"
    },
    // MENU 1 - Αρχική
{
    state:1,
    x:6,
    y:8.8,
    w:24,
    h:6,
    action:"home"
},

    // CLOSE (Menu 2)
    {
        state:2,
        x:90,
        y:4.8,
        w:8,
        h:6,
        action:"home"
    },

    // CLOSE (Menu 3)
    {
        state:3,
        x:90,
        y:4.8,
        w:8,
        h:6,
        action:"home"
    },

    {
    state:3,
    x:89,
    y:19.7,
    w:8,
    h:6,
    next:2
},
// MENU 2 - Δωμάτιο (κείμενο) → Room Page
{
    state:2,
    x:7,
    y:19.7,
    w:28,
    h:6,
    next:4
},

// MENU 2 - Χαλιά (κείμενο) → Carpet Page
{
    state:2,
    x:44,
    y:9,
    w:24,
    h:6,
    next:5
},

// MENU 3 - Δωμάτιο (κείμενο) → Room Page
{
    state:3,
    x:7,
    y:19.7,
    w:28,
    h:6,
    next:4
},

// MENU 3 - Χαλιά (κείμενο) → Carpet Page
{
    state:3,
    x:44,
    y:9,
    w:24,
    h:6,
    next:5
},

// ROOM PAGE - Close
{
    state:4,
    x:90,
    y:4.8,
    w:8,
    h:6,
    action:"home"
},

// ROOM PAGE - Back
{
    state:4,
    x:4,
    y:5,
    w:8,
    h:6,
    next:1
},

// CARPET PAGE - Close
{
    state:5,
    x:90,
    y:4.8,
    w:8,
    h:6,
    action:"home"
},

// CARPET PAGE - Back
{
    state:5,
    x:4,
    y:5,
    w:8,
    h:6,
    next:1
},

    // BACK (Menu 2)
    {
    state:2,
    x:4,
    y:5,
    w:8,
    h:6,
    next:1
},

    // BACK (Menu 3)
   {
    state:3,
    x:4,
    y:5,
    w:8,
    h:6,
    next:1
}

];

function showScreen(index){

    screens.forEach(screen=>{

        screen.classList.remove("active");

    });

    screens[index].classList.add("active");

    current = index;

    renderHotspots();

}

function renderHotspots(){

    hotspotContainer.innerHTML="";

    hotspots
        .filter(h=>h.state===current)
        .forEach(h=>{

            const hotspot=document.createElement("div");

            hotspot.className="hotspot";

            hotspot.style.left=h.x+"%";

            hotspot.style.top=h.y+"%";

            hotspot.style.width=h.w+"%";

            hotspot.style.height=h.h+"%";

           hotspot.onclick = () => {

    // Close
    if (h.action === "home") {

        showScreen(0);
        return;

    }

    // Back
    
    // Normal navigation
    showScreen(h.next);

};

            hotspotContainer.appendChild(hotspot);

        });

}

showScreen(0);

// --------------------
// DEBUG
// --------------------

const phone=document.querySelector(".screen");

const debug=document.getElementById("debug");

phone.addEventListener("mousemove",(e)=>{

    const rect=phone.getBoundingClientRect();

    const x=((e.clientX-rect.left)/rect.width*100).toFixed(1);

    const y=((e.clientY-rect.top)/rect.height*100).toFixed(1);

    debug.innerHTML=`X: ${x}%<br>Y: ${y}%`;

});

// ======================
// FULLSCREEN
// ======================

document.addEventListener("keydown", (e) => {

    if (e.key.toLowerCase() === "f") {

        if (!document.fullscreenElement) {

            document.documentElement.requestFullscreen();

        } else {

            document.exitFullscreen();

        }

    }

});