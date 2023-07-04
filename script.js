let sidebar = document.getElementsByClassName("sidebar")[0]
    let side = document.getElementsByClassName("side")[0]
   
    

    sidebar.addEventListener("click", () => {
        console.log("clicked")
        if (side.style.right == "-500px") {
            side.style.right = "0px";
        }
        else {
            side.style.right = "-500px";
        }


    }
    );