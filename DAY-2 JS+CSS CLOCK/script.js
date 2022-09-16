
function setDate() {
    const secHand = document.getElementById('sec-hand');
    const minHand = document.getElementById('min-hand');
    const hrHand = document.getElementById('hour-hand');
    const digital = document.getElementById('Digital');
    const now = new Date();
    const secs = now.getSeconds();
    const secDegs = ((secs / 60) * 360) + 90;
    const mins = now.getMinutes();
    const minDegs = ((mins / 60) * 360) + 90;
    const hrs = now.getHours();
    const hrDegs = ((hrs / 12) * 360) + 90;
    secHand.style.transform = `rotate(${secDegs}deg)`;
    minHand.style.transform = `rotate(${minDegs}deg)`;
    hrHand.style.transform = `rotate(${hrDegs}deg)`;
    digital.innerHTML = (`${hrs} : ${mins} :  ${secs}`)
    // console.log(hrs + "+" + mins + "+" + secs);


}

setInterval(setDate, 1000);