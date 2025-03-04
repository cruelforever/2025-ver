const form = document.querySelector('form');
const submitButton = document.querySelector("form [type='submit']");
const result = document.querySelector('#result');

let count1 = 0;
let count5 = 0;
let momUnderstand = false;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedOptionEl = document.querySelector('input[name="option"]:checked');
  if (!selectedOptionEl) return;
  const selectedOption = selectedOptionEl.value;

  switch (selectedOption) {
    case '1':
      count1++;
      if (count1 < 3) {
        result.innerHTML = '小孩還是持續哭鬧';
      } else {
        result.innerHTML = '小孩終於冷靜下來，恭喜你完成安撫。';
        submitButton.style.display = 'none';
        count1 = 0;
      }
      break;

    case '2':
      result.innerHTML = '旁邊的媽媽生氣了，說你為什麼對我小孩這麼兇，就抱著小孩離開，然後在google map 上留下一顆星評價說這家的牙醫很兇。安撫失敗。';
      submitButton.style.display = 'none';
      break;

    case '3':
      if (!momUnderstand) {
        result.innerHTML = '旁邊的媽媽生氣了，說你為什麼對我小孩這麼兇，就抱著小孩離開，然後在google map 上留下一顆星評價說這家的牙醫很兇。安撫失敗。';
      } else {
        result.innerHTML = '媽媽出去外面等，小孩哭一哭後發現沒用，終於冷靜下來，恭喜你完成安撫。';
      }
      submitButton.style.display = 'none';
      break;

    case '4':
      const outcome = Math.random();
      if (outcome < 0.5) {
        result.innerHTML = "小孩終於冷靜下來，恭喜你完成安撫。";
        submitButton.style.display = "none";
      } else {
        result.innerHTML = "小孩甩開貼紙，還是繼續哭。";
      }
      break;

    case '5':
      momUnderstand = true;
      count5++;
      if (count5 < 3) {
        result.innerHTML = '媽媽表示能理解我們的作法，他可以配合我們的指令';
      } else {
        result.innerHTML = '媽媽生氣地說醫生你到底要不要治療我的小孩，然後抱著小孩離開，在Google Maps上留下了一顆星評價，說這家牙醫很沒用不會看小孩。安撫失敗。';
        submitButton.style.display = "none";
        count5 = 0;
      }
      break;

    default:
      break;
  }
});
