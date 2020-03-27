'use strict'

window.onload = () =>{
    const w = 400, h = 250;

    let app = document.querySelector("#app");    
    app.append(document.createElement("p"));
    app.append(document.createElement("canvas"));
    let c = document.querySelector("canvas");
    let ctx = c.getContext("2d");
    c.width = w;
    c.height = h;

    let img = document.createElement("img");
    img.src = "img/Colors.jpg";
    img.addEventListener("load", () => {
        ctx.drawImage(img,0,0,w,h);
    });

    c.addEventListener("mousemove",(event) =>{
        let x = event.pageX - c.offsetLeft;
        let y = event.pageY - c.offsetTop;

        let imgData = ctx.getImageData(x, y, w, h);
        let r = imgData.data[0];
        let g = imgData.data[1];
        let b = imgData.data[2];
        document.querySelector("#color").style.backgroundColor = `rgb(${r},${g},${b})`;
    });
}