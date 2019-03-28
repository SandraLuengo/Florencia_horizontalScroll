window.onload = () => {
  function repeatOften() {
    var obj=mover();
    if (obj.true) {
      if(obj.mov==='iz'){
        window.scrollBy(-10, 0)
      }else if(obj.mov==='de'){
        window.scrollBy(10, 0)
      }
    }
    requestAnimationFrame(repeatOften);
  }
  requestAnimationFrame(repeatOften);

  let main = document.querySelector(".App");
  let xVal = 0;
  let yVal = 0;
  let client = 0;
  let scrollLeft = 0;
  let width = main.clientWidth;

  main.addEventListener("mousemove", (e) => {
    mover();
    let heigth = main.clientHeight;
    client = e.clientX;
    xVal = (e.clientX + document.documentElement.scrollLeft) / width;
    yVal = e.clientY / heigth;


    main.style.setProperty("--mouse-x", xVal);
    main.style.setProperty("--mouse-y", yVal);

  });

  window.addEventListener("scroll", (e) => {
    mover();
    scrollLeft = document.documentElement.scrollLeft;
    main.style.setProperty("--mouse-x", ((client + scrollLeft) / main.clientWidth));
    main.style.setProperty("--mouse-y", yVal);

  });

  let mover = () => {

    if (client < width * 0.05) {

      if ((client >= 0 && client < width * 0.04) && scrollLeft > 15) {
        
        return {true:true,mov:'iz'};
      } else {
     
        return {true:false,mov:'iz'};;
      }

    } else {
      console.log(client,width*0.3,width)
      if (client > width * 0.5 && client <= width) {
        console.log('derecha true')
        return {true:true,mov:'de'}
      }else{
        console.log('derecha false')
        return{true:false,mov:'iz'};
      }
    }


  }


}