const bgm = document.getElementById("bgm");

const introContainer = document.getElementById("introContainer");
const yesStart = document.getElementById("yesStart");
const noStart = document.getElementById("noStart");
const noMessage = document.getElementById("noMessage");

const messageContainer = document.getElementById("messageContainer");
const messageText = document.getElementById("messageText");

const photoContainer = document.getElementById("photoContainer");
const photoDisplay = document.getElementById("photoDisplay");

const bothContainer = document.getElementById("bothContainer");
const bothPhoto = document.getElementById("bothPhoto");
const bothMessage = document.getElementById("bothMessage");

const finalContainer = document.getElementById("finalContainer");
const yesButton = document.getElementById("yesButton");



const sequence = [
  { type: "message", text: "34살에 이종명은 새로운 별명을 얻었어" },
  { type: "message", text: "'종달' 종달은 종명이 다리 길다는 뜻이래~~" },
  { type: "message", text: "종달이라는 별명을 얻을 수 있었던 이유는" },
  { type: "message", text: "현재 사랑하는 여자를 만났기 때문이야~~" },
  { type: "message", text: "지금 부터 달이 한테 하고 싶은 말을 시작해보려고 해" },
  { type: "message", text: "처음 만난 날을 기억해?" },
  { type: "message", text: "시간이 녹아 짧게 느껴졌지만...\n 임팩트가 강했었어ㅎㅎ" },
  { type: "message", text: "그날을 계기로\n나는 매일 너를 생각했어." },
  { type: "message", text: "푸켓을 갔을 때도... \n 출근을 했을 때도..."},
  { type: "message", text: "언제 다시 볼 수 있을까~~"},
  { type: "message", text: "마치 운명처럼 달이가 청주로 오게 되었고"},
  { type: "message", text: "그 전엔 몰랐었어~~ 청주가 참 좋은 곳이란 걸.."},
  { type: "both", text: "", src: "images/photo1.jpg"},
  { type: "message", text: "방탈출을 하면서 어려운 문제도\n 함께 해결해내는 모습을 보았고" },
  { type: "both", text: "원피스가 잘 어울리는 그녀가 클라이밍을 하는 모습을 보면서" , src: "images/photo2.jpg"},
  { type: "message", text: "달이의 매력에 더욱 빠지기 시작했던 것 같아ㅎㅎㅎ"},
  { type: "message", text: "마침내, 우리의 첫 데이트가 시작되었지!!"},
  { type: "both", text: "", src: "images/photo3.jpg"},
  { type: "both", text: "", src: "images/photo4.jpg"},
  { type: "both", text: "", src: "images/photo5.jpg"},
  { type: "message", text: "결국 달이 와의 사랑을 시작하게 되었어~~"},
  { type: "message", text: "나는 이 날 큰 결심을 했어\n 내 옆에 있을 달이를 행복하게 해주고 싶다는 걸!💕"},
  { type: "message", text: "달이에게 좋은 추억을 남겨주고 싶었고\n 웃는모습을 지켜주고 싶었어"},
  { type: "both", text: "", src: "images/photo6.jpg"},
  { type: "message", text: "향기로 나와의 추억을 향기 했고"},
  { type: "both", text: "", src: "images/photo7.jpg"},
  { type: "message", text: "노래로 나의 마음을 들려 주었고"},
  { type: "both", text: "", src: "images/photo8.jpg"},
  { type: "message", text: "웃음으로 달이의 상태를 파악 하였고"},
  { type: "both", text: "", src: "images/photo9.jpg"},
  { type: "message", text: "등산을 통해 \n 짐이 되기도 하였지만 ㅜㅜ"},
  { type: "both", text: "", src: "images/photo10.jpg"},
  { type: "message", text: "그래도 달이는 나를 좋아해주었어 ㅎㅎㅎ"},
  { type: "both", text: "", src: "images/photo11.jpg"},
  { type: "message", text: "취미로 함께 시간을 보내기 위해 노력했고"},
  { type: "both", text: "", src: "images/photo12.jpg"},
  { type: "message", text: "운동으로 건강함을 유지하기 위해 노력했고"},
  { type: "both", text: "", src: "images/photo13.jpg"},
  { type: "both", text: "", src: "images/photo14.jpg"},
  { type: "message", text: "서로가 없는 여행으로 서로의 소중함을 느꼈고"},
  { type: "both", text: "", src: "images/photo15.jpg"},
  { type: "both", text: "", src: "images/photo16.jpg"},
  { type: "both", text: "", src: "images/photo17.jpg"},
  { type: "message", text: "쪽잠을 통해 잠시나마 피로를 풀어 주었고"},
  { type: "message", text: "그렇게 점점 서로가 서로에게\n달며들고 있엇던 것 같아"},
  { type: "message", text: "처음엔 그냥 데이트 하는게 좋았고"},
  { type: "message", text: "얼굴만 봐도 설레었고"},
  { type: "message", text: "카톡 답장 하나 하나에 두근두근 거렸어"},
  { type: "message", text: "이젠 이런 생각이 들어"},
  { type: "message", text: "비록 사귄 날이 많지 않겠지만"},
  { type: "message", text: "'이 사람과 평생을 같이 하고 싶다.'"},
  { type: "message", text: "지금부터 하는 말은 꼭 약속할게 🤙"},
  { type: "both", text: "앞으로..\n 웃긴 일도 슬픈 일도 있겠지만", src: "images/photo18.jpg"},
  { type: "both", text: "좋을 때나 힘들 때\n 달이를 바라 볼거고?", src: "images/photo19.jpg"},
  { type: "both", text: "달이가 원하는 건\n 갖게 할거고", src: "images/photo20.jpg"},
  { type: "both", text: "아무리 피곤해도\n 바람을 쐬러 갈거고", src: "images/photo21.jpg"},
  { type: "both", text: "술 한잔 하면서\n 속상한 얘기를 들어줄거고", src: "images/photo22.jpg"},
  { type: "both", text: "잠시라도 산책을 하면서\n 기분 전환을 할거고", src: "images/photo23.jpg"},
  { type: "both", text: "달이가 좋아하는 운동을 하면서\n 소원권 내기를 할거고 ", src: "images/photo24.jpg"},
  { type: "both", text: "달이가 핸들링 하는 길은\n 군말 없이 따라 갈거고", src: "images/photo25.jpg"},
  { type: "both", text: "꽃보다도 달이가 \n 더 이쁘다고 말해줄거고", src: "images/photo26.jpg"},
  { type: "both", text: "셀카는 항상 \n 내가 더 앞에 있을거고", src: "images/photo27.jpg"},
  { type: "both", text: "때로는 친구처럼 장난을\n때로는 친오빠처럼 편을 들거야", src: "images/photo31.jpg"},
  { type: "both", text: "그렇게 한걸음", src: "images/photo28.jpg"},
  { type: "both", text: "한걸음씩", src: "images/photo29.jpg"},
  { type: "both", text: "다가 갈거야", src: "images/photo30.jpg"},
  { type: "message", text: "생각해보면"},
  { type: "message", text: "달이 앞에서는"}, 
  { type: "message", text: "내가 더 좋은 사람이"},
  { type: "message", text: "되어 가는 것 같아" },
  { type: "message", text: "그래서 말인데..." },
];

let current = 0;

yesStart.addEventListener("click", () => {
  bgm.muted = false;
  bgm.play().catch(e => console.log("음악 재생 실패:", e));
  introContainer.classList.add("hidden");
  showNextStep();
});

noStart.addEventListener("click", () => {
  noMessage.classList.remove("hidden");
});

function showNextStep() {
  if (current >= sequence.length) {
    hideAll();
    finalContainer.classList.remove("hidden");
    return;
  }

  const item = sequence[current];
  hideAll();

  if (item.type === "message") {
    messageText.textContent = "";
    messageContainer.classList.remove("hidden");
    typeMessageInto(messageText, item.text, 0, () => {
      setTimeout(() => {
        current++;
        showNextStep();
      }, 1500);
    });

  } else if (item.type === "photo") {
    photoDisplay.src = item.src;
    photoDisplay.style.display = "block";
    photoContainer.style.display = "block";
    setTimeout(() => {
      photoDisplay.style.display = "none";
      photoDisplay.src = "";
      photoContainer.style.display = "none";
      current++;
      showNextStep();
    }, 3000);

  } else if (item.type === "both") {
    bothPhoto.src = item.src;
    bothPhoto.style.display = "block";  // ← 이 줄 꼭 추가!
    bothMessage.textContent = "";
    bothContainer.classList.remove("hidden");
    typeMessageInto(bothMessage, item.text, 0, () => {
      setTimeout(() => {
        current++;
        showNextStep();
      }, 2500);
    });
  }
}

function typeMessageInto(element, message, index, callback) {
  if (index < message.length) {
    element.textContent += message.charAt(index);
    setTimeout(() => typeMessageInto(element, message, index + 1, callback), 50);
  } else {
    callback();
  }
}

function hideAll() {
  messageContainer.classList.add("hidden");
  photoContainer.style.display = "none";
  bothContainer.classList.add("hidden");
  finalContainer.classList.add("hidden");

  messageText.textContent = "";
  bothMessage.textContent = "";
  photoDisplay.src = "";
  photoDisplay.style.display = "none";
  bothPhoto.src = "";
  bothPhoto.style.display = "none";  // ← 여기가 핵심!
}

yesButton.addEventListener("click", () => {
  yesButton.textContent = "💖 고마워 달이야, 행복하자!! 💖";
});
