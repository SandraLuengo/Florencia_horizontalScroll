window.onload = () => {

  let main = document.querySelector(".App");
  let xVal = 0;
  let yVal = 0;
  let mousePosition = 0;
  let scrollLeft = 0;
  let width = main.clientWidth;
  let heigth = main.clientHeight;
  let actualWidth = window.innerWidth;

  document.querySelector('.arrowContent').style.width = `${window.innerWidth}px`;

  window.addEventListener("mousemove", (e) => {
    move();
    mousePosition = e.clientX;
    xVal = (e.clientX + document.documentElement.scrollLeft) / width;
    yVal = e.clientY / heigth;
    main.style.setProperty("--mouse-x", xVal);
    main.style.setProperty("--mouse-y", yVal);
  });

  window.addEventListener("scroll", (e) => {
    move();
    scrollLeft = document.documentElement.scrollLeft;
    main.style.setProperty("--mouse-x", ((mousePosition + scrollLeft) / main.clientWidth));
    main.style.setProperty("--mouse-y", yVal);
  });


  window.onresize = () => {
    document.querySelector('.arrowContent').style.width = `${window.innerWidth}px`;
  }


  let move = () => {
    if (mousePosition < actualWidth * 0.25) {
      if ((mousePosition >= 0 && mousePosition < actualWidth * 0.2)) {
        document.querySelector('.right').style.visibility = 'visible';
        document.querySelector('.left').style.visibility = 'hidden';
        return {
          true: true,
          mov: 'iz'
        };

      } else {

        return {
          true: false,
          mov: 'iz'
        };;
      }

    } else {

      if (mousePosition >= actualWidth * 0.7 && mousePosition <= actualWidth) {
        document.querySelector('.right').style.visibility = 'hidden';
        document.querySelector('.left').style.visibility = 'visible';
        return {
          true: true,
          mov: 'de'
        }

      } else {
        return {
          true: false,
          mov: 'iz'
        };
      }
    }


  }

  let repeatOften = () => {
    var obj = move();
    if (obj.true) {
      if (obj.mov === 'iz') {
        window.scrollBy(-10, 0);
      } else if (obj.mov === 'de') {

        window.scrollBy(10, 0)
      }
    }
    requestAnimationFrame(repeatOften);
  }

  requestAnimationFrame(repeatOften);


}