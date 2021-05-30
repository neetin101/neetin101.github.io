setInterval(() => {
  d = new Date();
  hrs = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();

  hrot = 30*hrs+min/2;
  mrot = 6*min;
  srot = 6*sec;

  hour.style.transform = `rotate(${hrot}deg)`;
  minute.style.transform = `rotate(${mrot}deg)`;
  second.style.transform = `rotate(${srot}deg)`;

}, 1000);
