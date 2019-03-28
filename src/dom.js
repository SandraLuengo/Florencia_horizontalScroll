window.onload = () => {

  let main = document.querySelector(".App");
  let xVal = 0;
  let yVal = 0;
  let client=0;
  main.addEventListener("mousemove", function (e) {

    let width = main.clientWidth;
    let heigth = main.clientHeight;
    client=e.clientX;
    xVal = (e.clientX + document.documentElement.scrollLeft) / width;
    yVal = e.clientY / heigth;
    // console.log(width, e.clientX, xVal);
    // console.log(document.documentElement.scrollLeft)
    console.log(xVal)

    if (e.clientX >= 0 && e.clientX < width * 0.01) {
      console.log('izquerda true')
      // izquerda = true;

    } else {
      console.log('izquerda false')
      // izquerda = false;
    }

    if (e.clientX > width * 0.9 && e.clientX <= width) {
      console.log('derecha')
      // window.scrollBy(0, 10);
    }

    main.style.setProperty("--mouse-x", xVal);
    main.style.setProperty("--mouse-y", yVal);

  });

  window.addEventListener("scroll", function (e) {
    console.log('scroll')
    console.log(xVal)
    main.style.setProperty("--mouse-x",(( client + document.documentElement.scrollLeft) /  main.clientWidth));
    main.style.setProperty("--mouse-y", yVal);

  });


}