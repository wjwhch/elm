function footchange(){
    let footActive = document.getElementsByClassName("foot")
    console.log(footActive)
    let aI = document.querySelectorAll(".ftbg")
    for(var i in footActive){
        var j = i-1;
        console.log(footActive[j])
        footActive[j].onclick=function(){
            footActive[j].children[0].setAttribute("class","ftchange111")
        }
    }
    

    
}
export default footchange