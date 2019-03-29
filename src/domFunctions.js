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
  document.querySelector('.textContent').style.width = `${window.innerWidth}px`;

  window.addEventListener("mousemove", (e) => {

    (mousePosition < actualWidth * 0.25)?moveLeft():moveRight();
    mousePosition = e.clientX;
    xVal = (e.clientX + document.documentElement.scrollLeft) / width;
    yVal = e.clientY / heigth;
    main.style.setProperty("--mouse-x", xVal);
    main.style.setProperty("--mouse-y", yVal);
  });

  window.addEventListener("scroll", (e) => {

    (mousePosition < actualWidth * 0.25)?moveLeft():moveRight();
    scrollLeft = document.documentElement.scrollLeft;
    main.style.setProperty("--mouse-x", ((mousePosition + scrollLeft) / main.clientWidth));
    main.style.setProperty("--mouse-y", yVal);
  });


  window.onresize = () => {
    document.querySelector('.arrowContent').style.width = `${window.innerWidth}px`;
    document.querySelector('.textContent').style.width = `${window.innerWidth}px`;

  }

  let moveLeft = () => {
    if ((mousePosition >= 0 && mousePosition < actualWidth * 0.2)) {
      document.querySelector('.right').style.opacity = '1';
      document.querySelector('.left').style.opacity = '0';
      return true;

    } else {

      return false;
    }
  }

  let moveRight = () => {
    if (mousePosition >= actualWidth * 0.7 && mousePosition <= actualWidth) {
      document.querySelector('.right').style.opacity = '0';
      document.querySelector('.left').style.opacity = '1';
      return true

    } else {
      return false
    }
  }


  let repeatOften = () => {

    moveLeft()? window.scrollBy(-10, 0):moveRight()&& window.scrollBy(10, 0);

    requestAnimationFrame(repeatOften);
  }

  requestAnimationFrame(repeatOften);


}