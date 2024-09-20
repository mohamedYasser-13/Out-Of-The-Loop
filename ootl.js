const main = document.querySelector('.main');
main.innerHTML = `
  <div class="players-number">
    <p>Enter players number &MediumSpace;</p>
    <div>
      <input type="number" placeholder="3-10 players" class="players-number-input">
      <button class="check-button" onclick="checkForAutoSave();">&check;</button>
    </div>
    <button class = "autoSaveButton auto-save-off" onclick = "getAutoSaved();">Auto Saved List</button>
  </div>
`;

const animalsList = [
  "أسد",
  "جمل",
  "كلب",
  "قط",
  "حصان",
  "صقر",
  "نسر",
  "ثعلب",
  "ماعز",
  "خروف",
  "بقرة",
  "دجاجة",
  "بطة",
  "إوزة",
  "أرنب",
  "غزال",
  "فيل",
  "نمر",
  "فهد",
  "دب",
  "ذئب",
  "بومة",
  "ببغاء",
  "طاووس",
  "عصفور",
  "حمامة",
  "ديك رومي",
  "سمكة ذهبية",
  "قرش",
  "دولفين",
  "حوت",
  "بطريق",
  "تمساح",
  "سحلية",
  "ثعبان",
  "ضفدع",
  "سلحفاة",
  "فراشة",
  "نحلة",
  "نملة",
  "عنكبوت",
  "عقرب",
  "جمبري",
  "أخطبوط",
  "حبار",
  "قنديل البحر",
  "نجم البحر",
  "حصان البحر",
  "خفاش",
  "فأر",
  "سنجاب",
  "قنفذ",
  "راكون",
  "جاموس",
  "حمار وحشي",
  "زرافة",
  "كنغر",
  "كوالا",
  "باندا",
  "شمبانزي",
  "غوريلا",
  "ضبع",
  "فلامنغو",
  "نورس",
  "بجعة",
  "عقاب",
  "خنزير",
  "ظبي",
  "قرد",
  "قندس",
  "يرقة",
  "دب قطبي",
  "دب رمادي",
  "جاغوار",
  "كسلان",
  "آكل النمل",
  "هامستر",
  "خنفساء",
  "ذباب",
  "حمار",
  "غراب",
  "دودة",
  "صرصور",
  "فقمة"];
const charactersList = [
  "أحمد زويل",
  "نجيب محفوظ",
  "أم كلثوم",
  "عبد الحليم حافظ",
  "محمد صلاح",
  "جمال عبد الناصر",
  "صلاح الدين الأيوبي",
  "أينشتاين",
  "نيوتن",
  "غاليليو",
  "داروين",
  "ماري كوري",
  "نيكولا تسلا",
  "ستيف جوبز",
  "بيل غيتس",
  "مارك زوكربيرغ",
  "نيل أرمسترونغ",
  "كريستوفر كولومبوس",
  "ألكسندر الأكبر",
  "غاندي",
  "باراك أوباما",
  "فلاديمير بوتين",
  "شكسبير",
  "بروس لي",
  "جاكي شان",
  "توم كروز",
  "روبرت داوني جونيور",
  "ليوناردو دي كابريو",
  "أنجلينا جولي",
  "جنيفر لورنس",
  "ويل سميث",
  "مورغان فريمان",
  "كريستيانو رونالدو",
  "ليونيل ميسي",
  "بيليه",
  "مارادونا",
  "زيدان",
  "بيكهام",
  "نيمار",
  "رونالدينيو",
  "إبراهيموفيتش",
  "محمد علي كلاي",
  "أحمد شوقي",
  "محمود درويش",
  "فيروز",
  "عمر الشريف",
  "فاتن حمامة",
  "عادل إمام",
  "أحمد حلمي",
  "منى زكي",
  "يسرا",
  "هند صبري",
  "كريم عبد العزيز",
  "أحمد السقا",
  "أوبرا وينفري",
  "إيلون ماسك",
  "أريانا غراندي",
  "تايلور سويفت",
  "بيونسيه",
  "ريهانا",
  "إد شيران",
  "جاستن بيبر",
  "سيلينا غوميز",
  "دريك",
  "كانييه ويست",
  "ذا ويكند"];
const plants = [
  "طماطم",
  "خيار",
  "بصل",
  "ثوم",
  "فلفل",
  "بطاطس",
  "جزر",
  "كوسة",
  "باذنجان",
  "فجل",
  "خس",
  "سبانخ",
  "كرنب",
  "قرنبيط",
  "بروكلي",
  "فاصوليا",
  "بازلاء",
  "عدس",
  "حمص",
  "لوبيا",
  "فول",
  "ملوخية",
  "جرجير",
  "بقدونس",
  "كزبرة",
  "نعناع",
  "ريحان",
  "بطيخ",
  "تفاح",
  "موز",
  "برتقال",
  "يوسفي",
  "ليمون",
  "جوافة",
  "مانجو",
  "عنب",
  "تين",
  "تمر",
  "فراولة",
  "أناناس",
  "كُمثرى",
  "خوخ",
  "مشمش",
  "كرز",
  "توت",
  "رمان",
  "كيوي",
  "شمام",];
const places = [
  "شركة",
  "مصنع",
  "مطعم",
  "مقهى",
  "فندق",
  "مستشفى",
  "عيادة طبية",
  "مدرسة",
  "منزل",
  "جامعة",
  "مختبر أبحاث",
  "مكتب حكومي",
  "مركز تدريب",
  "مركز خدمة العملاء",
  "جيم",
  "صيدلية",
  "مزرعة",
  "ورشة",
  "محطة إذاعية",
  "مكتبة عامة",
  "مكتب محاماة",
  "استوديو تصوير",
  "بنك",
  "دار ايتام",
  "دار رعاية المسنين",
  "حديقة حيوانات",
  "محطة وقود",
  "متحف",
  "مسرح",
  "مركز تسوق",
  "مطار",];
const professions = [
  "طبيب",
  "معلم",
  "محاسب",
  "ممرض",
  "مصمم جرافيك",
  "مدير مشروع",
  "مهندس مدني",
  "مبرمج",
  "مهندس كهربائي",
  "أخصائي تسويق",
  "مصور",
  "محامي",
  "موظف استقبال",
  "مدرب رياضي",
  "فني صيانة",
  "عازف موسيقي",
  "طباخ",
  "كيميائي",
  "عالم",
  "موظف خدمةالعملاء",
  "أخصائي تغذية",
  "مخرج أفلام",
  "كاتب سيناريو",
  "أستاذ جامعي",
  "طبيب أسنان",
  "موظف حكومي",
  "مصمم أزياء",
  "مهندس اتصالات",
  "طبيب نفسي",
  "مهندس زراعي",
  "رئيس دولة",
  "سفير",
  "طبيب بيطري",
  "وزير",
  "مدير مدرسة",
  "رسام",
  "لاعب كرة قدم",
  "مزارع",
  "اخصائي علاج طبيعي",
  "سائق",
  "ضابط",
  "طيار"];
const cities = [
  "نيويورك - الولايات المتحدة",
  "باريس - فرنسا",
  "لندن - المملكة المتحدة",
  "طوكيو - اليابان",
  "برلين - ألمانيا",
  "مدريد - إسبانيا",
  "سيدني - أستراليا",
  "دبي - الإمارات العربية المتحدة",
  "روما - إيطاليا",
  "بكين - الصين",
  "كيب تاون - جنوب أفريقيا",
  "موسكو - روسيا",
  "إسطنبول - تركيا",
  "لوس أنجلوس - الولايات المتحدة",
  "مكسيكو سيتي - المكسيك",
  "برشلونة - إسبانيا",
  "شيكاغو - الولايات المتحدة",
  "هونغ كونغ - الصين",
  "أمستردام - هولندا",
  "فيينا - النمسا",
  "ريو دي جانيرو - البرازيل",
  "كولونيا - ألمانيا",
  "أديس أبابا - إثيوبيا",
  "ليفربول - المملكة المتحدة",
  "بورتو - البرتغال",
  "الرياض - السعودية",
  "مانشستر - المملكة المتحدة",
  "بيلباو - إسبانيا",
  "نانت - فرنسا",
  "نيس - فرنسا",
  "تكساس - الولايات المتحدة",
  "القاهرة - مصر"];




let playList = [];
let playersNum;
let playersList = [];
let wantAutoSaved = 0;
let autoSavedList = JSON.parse(localStorage.getItem('lastAutoSavedList'));
let autoSavedNum = JSON.parse(localStorage.getItem('lastAutoSavedNum'));
let roundsNum;
let mood;
let moodName;
let category;
let choicesList;
let askers;
let responders;
let announcementList;
let theWord;
let spyCount;
let detectiveCount;
let outsiderCount;
let insiderCount;
let guessList;
let guessersList;
let guessingRole = '';
let guesser;
let guessingNum;
let spyTakes = 0;
let spyGives = 0;
let spy;
let spyTakers = [];
let outsider1;
let outsider2;
let activeOutsider;
let checks = 1;
let whiteWord;
let blackWord;
let blackVotes = 0;
let whiteVotes = 0;
let detective;
let randomMood = 0;
let urmMood = 0;

function getPlayersNum(){
  const playersNumInput = document.querySelector('.players-number-input');
  playersNum = playersNumInput.value;
  if (playersNum < 3 || playersNum > 10){
    alert('3 to 10 PLayers only!');
  } else {
    let inputElements = ``
    for(i=1; i<=playersNum; i++){
    inputElements += `<input type="text" placeholder="player ${i}" class="player${i}-name-input">`
    }
    main.innerHTML = `
    <div class="players-names">
    ` + inputElements + 
    `<button class="check-button-2" onclick="getPlayersNames();">&check;</button>
    </div>
    `;
  }
}

function getAutoSaved(){
  let autoSaveButton = document.querySelector('.autoSaveButton')
  if(autoSaveButton.classList.contains('auto-save-off')){
    autoSaveButton.classList.replace('auto-save-off','auto-save-on');
    wantAutoSaved = 1;
  } else {
    autoSaveButton.classList.replace('auto-save-on','auto-save-off');
    wantAutoSaved = 0;
  }
}

function checkForAutoSave(){
  const playersNumInput = document.querySelector('.players-number-input');
  playersNum = playersNumInput.value;
  if(wantAutoSaved === 1){
    if(playersNum === autoSavedNum){
      playersList = autoSavedList;
      chooseRounds();
    } else {
      alert('Number of players does not match last auto saved game')
    }
  } else {
    getPlayersNum();
  }
}

function getPlayersNames() {
  playersList = [];
  let nameCount = {};

  for (let i = 1; i <= playersNum; i++) {
    const nameInput = document.querySelector(`.player${i}-name-input`);
    let playerName = nameInput.value.trim();

    if (playerName !== '') {
      if (nameCount[playerName]) {
        nameCount[playerName]++;
        playerName += nameCount[playerName];
      } else {
        nameCount[playerName] = 1;
      }

      let player = { name: playerName, number: i, score: 0, role: '', votes: 0 };
      playersList.push(player);
      window[`player${i}`] = player;
    } else {
      alert(`The name of player number ${i} is not accepted`);
      return;
    }
  }
  chooseRounds();
}

function chooseRounds(){
  main.innerHTML = `
  <div class="round-selection">
    <div class="rounds-number">
      <p>Number of rounds:&MediumSpace;</p>
      <input type="number" placeholder="1-30" class="roundsNumber">
    </div>
    <p class="mood">Mood:</p>
    <div class="round classic" onclick="getRoundsNumber('classic');"><p>Classic</p></div>
    <div class="round spy" onclick="getRoundsNumber('spy');"><p>Spy In The Room</p></div>
    <div class="round double" onclick="getRoundsNumber('double');"><p>Double Bluff</p></div>
    <div class="round three" onclick="getRoundsNumber('three')"><p>Three Body Problem</p></div>
    <div class="round teams" onclick="getRoundsNumber('teams');"><p>Teams</p></div>
    <div class="round random" onclick="getRoundsNumber('random');"><p>Random Rounds</p></div>
    <div class="round urm" onclick="getRoundsNumber('urm');"><p>URM</p></div>
  </div>`
  document.querySelector('.classic').classList.add('active');
  if(playersNum > 3){
    document.querySelector('.spy').classList.add('active');
    document.querySelector('.double').classList.add('active');
    document.querySelector('.random').classList.add('active')
    document.querySelector('.urm').classList.add('active')
    if(playersNum > 4){
      document.querySelector('.three').classList.add('active');
      document.querySelector('.teams').classList.add('active');
    }
  }

  const parentDiv = document.querySelector('.round-selection');
  const childDivs = parentDiv.children;
  for (let i = 0; i < childDivs.length; i++) {
    if (!childDivs[i].classList.contains('active') && childDivs[i].classList.contains('round')) {
      childDivs[i].onclick = null;
    }
  }
}

function nameMood(){
  if(mood === 'random'){
    moodName = 'Random Rounds';
  }else if(mood === 'classic'){
    moodName = 'Classic';
  }else if(mood === 'spy'){
    moodName = 'Spy in the Room';
  }else if(mood === 'double'){
    moodName = 'Double Bluff';
  }else if(mood === 'three'){
    moodName = 'Three Body Problem';
  }else if(mood === 'teams'){
    moodName = 'Teams';
  } else if(mood === 'urm'){
    moodName = 'Unknown';
  }
}

function getRoundsNumber(roundMood){
  roundsNum = document.querySelector('.roundsNumber').value;
  if(roundsNum > 30){
    alert('Rounds Maximum number is 30');
    chooseRounds();
    return 0;
  } else if(roundsNum < 1) {
    alert('Rounds Minimum Number is 1');
    chooseRounds();
    return 0;
  }
  mood = roundMood;
  nameMood();
  if(mood==='urm'){
    moodName = 'Unknown';
  }
  main.innerHTML = `
  <div class="category-selection">
    <p class="cata">Category:</p>
    <div onclick="getCategory('animals');"><p>Animals</p></div>
    <div onclick="getCategory('cities');"><p>Cities</p></div>
    <div onclick="getCategory('characters');"><p>Characters</p></div>
    <div onclick="getCategory('plants');"><p>Plants</p></div>
    <div onclick="getCategory('places');"><p>Places</p></div>
    <div onclick="getCategory('professions');"><p>Professions</p></div>
  </div>
  `
}

function getCategory(roundCategory){
  category = roundCategory;
  if(category === 'animals'){
    playList = animalsList.slice();
  } else if(category === 'characters'){
    playList = charactersList.slice();
  } else if (category === 'plants'){
    playList = plants.slice();
  }else if (category === 'places'){
    playList = places.slice();
  }else if (category === 'professions'){
    playList = professions.slice();
  }else if (category === 'cities'){
    playList = cities.slice();
  }
  choicesList = playList;

   if(mood !== 'teams'){
    startRound(); 
  } else {
    playTeams();
  }
}

function playTeams(){
  chooseWords();
  chooseTeams();
  setTimeout(() => {announcementList = playersList.slice();},500)
  announceMood();
}

function chooseWords(){
  shuffle(playList);
  whiteWord = playList[0];
  blackWord = playList[1];
}

function chooseTeams(){
  let rolesList = [];
  let teamNum = Math.floor(playersNum / 2);
  if(playersNum % 2 !== 0){
    detectiveCount = 1;
    rolesList.push('Detective');
  }
  for(i=0; i<teamNum; i++){
    rolesList.push('White Player');
    rolesList.push('Black Player');
  }
  shuffle(rolesList);
  for(j=0; j<playersNum; j++){
    playersList[j].role = rolesList.splice(0,1)[0]; 
  }
}

function startRound(){
  theWord = chooseWord();
  countRoles();
}

function countRoles(){
  if(mood === 'random'){
    pickRandomRound();
    randomMood = 1;
    return; 
  }else if(mood === 'classic'){
    spyCount = 0;
    detectiveCount = 0;
    outsiderCount = 1;
  }else if(mood === 'spy'){
    spyCount = 1;
    detectiveCount = 0;
    outsiderCount = 1;
  }else if(mood === 'double'){
    spyCount = 0;
    detectiveCount = 0;
    outsiderCount = 2;
  }else if(mood === 'three'){
    spyCount = 1;
    detectiveCount = 0;
    outsiderCount = 2;
  } else if(mood === 'urm'){
    pickRandomRound();
    urmMood = 1;
    return;
  } else if(mood === 'teams') {
    playTeams();
    return;
  }
  insiderCount = (playersNum - spyCount - detectiveCount - outsiderCount);
  if (mood !== 'random' && mood !== 'urm'){
    continueRound();
  }
}

function pickRandomRound(){
  let pastMood = mood;
  let roundsList = ['classic','spy','double','three','teams'];
  if(playersNum < 5){
    roundsList.splice(3,1);
    roundsList.splice(4,1);
  }
  if(mood==='urm'){
    roundsList.splice(4,1);
  }
  mood = shuffle(roundsList)[0];
  if(pastMood === 'random'){
    nameMood();
  }
  if(mood === 'teams'){
    playTeams();
  } else {
    countRoles();
  }
}

function continueRound(){
  giveRoles();
  announcementList = playersList.slice();
  announceMood();
}

function giveRoles(){
  let rolesList = [];
  for(i=0; i<spyCount; i++){
    rolesList.push('Spy');
  }
  for(i=0; i<detectiveCount; i++){
    rolesList.push('Detective');
  }
  for(i=0; i<outsiderCount; i++){
    rolesList.push('Outsider');
  }
  for(i=0; i<insiderCount; i++){
    rolesList.push('Insider');
  }
  let shuffledList = shuffle(rolesList);
  for(j=0; j<playersNum; j++){
    playersList[j].role = shuffledList.splice(0,1)[0]; 
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function chooseWord(){
  let wordIndex = Math.floor(Math.random() * playList.length);
  let word = playList.splice(wordIndex,1)[0];
  return word;
};

function announceMood(){
  main.innerHTML = `<p>Mood is <span class="highlight">${moodName}</span></p>`;
  setTimeout(() => {
    if(mood !== 'teams'){
      announce();
    } else {
      announceTeams();
    }  
  }, 2500)
}

function announce() {
  if (announcementList.length > 0) {
    main.innerHTML = `
      <div class="announcements">
        <p>Give phone to <span class="highlight">${announcementList[0].name}</span></p>
        <button onclick="shift();">Reveal</button>
      </div>
    `;
  } else {
    askers = shuffle(playersList).slice();
    responders = askers.slice(1).concat(askers[0]);
    ask();
  }
}

function shift() {
  let theWordCopy = '???';
  if (announcementList[0].role !== 'Outsider'){
    theWordCopy = theWord;
  }
  main.innerHTML = `
    <div class="announcements">
      <p>You are a/an <span class="highlight">${announcementList[0].role}</span></p>
      <p>The word is: <span class="highlight">${theWordCopy}</span></p>
      <p>current score is: <span class="highlight">${announcementList[0].score}</span></p>
      <button onclick="announce();">next</button>
    </div>
  `;
  announcementList.splice(0, 1);
}

function announceTeams() {
  if (announcementList.length > 0) {
    main.innerHTML = `
      <div class="announcements">
        <p>Give phone to <span class="highlight">${announcementList[0].name}</span></p>
        <button onclick="shiftTeams();">Reveal</button>
      </div>
    `;
  } else {
    askers = shuffle(playersList).slice();
    responders = askers.slice(1).concat(askers[0]);
    ask();
  }
}

function shiftTeams() {
  let whiteWordCopy = whiteWord;
  let blackWordCopy = blackWord;
  if (announcementList[0].role === 'White Player'){
    blackWordCopy = '???';
  } else if (announcementList[0].role === 'Black Player'){
    whiteWordCopy = '???';
  }
  main.innerHTML = `
    <div class="announcements">
      <p>You are a <span class="highlight">${announcementList[0].role}</span></p>
      <p>Black word is: <span class="highlight">${blackWordCopy}</span></p>
      <p>White word is: <span class="highlight">${whiteWordCopy}</span></p>
      <p>current score is: <span class="highlight">${announcementList[0].score}</span></p>
      <button onclick="announceTeams();">next</button>
    </div>
  `;
  announcementList.splice(0, 1);
}

function ask(){
  if (askers.length === 0 || responders.length === 0) {
    sortByNumber(playersList);
    guessList = playersList.slice();
    guessersList = playersList.slice();
    guess();
    return;
  }
  main.innerHTML=`<div class="asking">
  <p>${askers[0].name} Ask ${responders[0].name}</p>
  <button onclick = "ask();">Next</button>
  </div>`
  askers.splice(0,1);
  responders.splice(0,1);
}

function guess(){
  if(guessersList.length === 0){
    if(mood === 'spy' || mood === 'three'){
      scoreSpy();
    } else if ( mood === 'teams'){
      punishTeam();
    }
    sortByVotes(playersList);
    return;
  }
  let playersButtons = ``;
  guesser = guessersList.splice(0,1)[0];
  if(mood === 'teams'){
    for(i=0; i<playersNum; i++){
      if(guesser.name !== guessList[i].name){
        playersButtons += `<button onclick="guessingRole='${guessList[i].role}'; guessingNum='${guessList[i].number}'; scoreTeams();">
          ${guessList[i].name}
        </button>`;
      }
    }
  } else {
    for(i=0; i<playersNum; i++){
      if(guesser.name !== guessList[i].name){
        playersButtons += `<button onclick="guessingRole='${guessList[i].role}'; guessingNum='${guessList[i].number}'; score();">
          ${guessList[i].name}
        </button>`;
      }
    }
  }
  let part = `Guess The outsider`;
  if(mood === 'teams'){
    part = `Guess Opponent Player`;
  }
  main.innerHTML = `
    <div class="guessing">
      <p><span class="highlight">${guesser.name}</span>, ${part}...</p>
      <div class="guessings">` +
        playersButtons
      + `</div>
    </div>
  `;
}

function scoreTeams(){
  let activePLayer;
  let guessedPLayer;
  for(i=0; i<playersNum; i++){
    if(guesser.name === playersList[i].name){
      activePLayer = playersList[i];    
    }
    if(guessingNum == playersList[i].number){
      guessedPLayer = playersList[i];
    }
  }

  if(guessingRole === 'Detective'){
    activePLayer.score -= 5;
  }else if(guesser.role === guessingRole){
    activePLayer.score -= 5;
  }else if(guesser.role === 'Detective'){
    activePLayer += 0;
  }else if(guesser.role !== guessingRole) {
    activePLayer.score += 5;
  }

  if(guessingRole === 'Black Player' && guesser.role !== 'Detective'){
    blackVotes++;
  }else if(guessingRole === 'White Player' && guesser.role !== 'Detective') {
    whiteVotes++;
  }
  guess();
}

function score(){
  let activePLayer;
  let guessedPLayer;
  for(i=0; i<playersNum; i++){
    if(guesser.name === playersList[i].name){
      activePLayer = playersList[i];    
    }
    if(guessingNum == playersList[i].number){
      guessedPLayer = playersList[i];
    }
  }
  if(guesser.role === 'Insider' && guessingRole === 'Outsider'){
    activePLayer.score += 10;
  }else if(guesser.role === 'Insider' && guessingRole === 'Spy'){
    spyTakers.push(activePLayer);
  }else if(guesser.role === 'Spy' && guessingRole !== 'Outsider') {
    spyGives = 1;
  }else if(guesser.role === 'Spy' && guessingRole === 'Outsider') {
    spyGives = 0;
  }else if(guessingRole === 'spy'){
    spyTakes++;
  }else{
    activePLayer += 0;
  }
  guessedPLayer.votes++;
  guess();
}

function punishTeam(){
  let roleToPunish = '';
  let roleTogiveBounce = '';
  if(whiteVotes > blackVotes){
    roleToPunish = 'White Player';
    roleTogiveBounce = 'Black Player';
  }else if(whiteVotes < blackVotes){
    roleToPunish = 'Black Player';
    roleTogiveBounce = 'White Player';
  }
  if(whiteVotes !== blackVotes){
    for(i=0; i<playersNum; i++){
      if(playersList[i].role === roleToPunish){
        playersList[i].score -= 10;
      }
      if(playersList[i].role === roleTogiveBounce){
        playersList[i].score += 10;
      }
    }
  }
}

function scoreSpy(){
  for(i=0; i<playersNum; i++){
    if(playersList[i].role === 'Spy'){
      spy = playersList[i];
    }
  }
  if(spyGives){
    for(i=0; i<spyTakers.length; i++){
      spyTakers[i].score += 5;
    }
  spy.score -= spyTakers.length * 5;
  } else if(!spyGives){
    spy.score += spy.votes * 5;
  }
}

function betray(){
  for(i=0; i<playersNum; i++){
    if(playersList[i].role === 'Outsider' && playersList[i].name !== outsider1.name){
      outsider2 = playersList[i];
      break;
    }
  }
  main.innerHTML = `
  <p><span class="highlight">${outsider1.name}</span>, Do you want to guess the other outsider?</p>
  <div>
  <button class = "yup" onclick = "activeOutsider = outsider2; giveOutsiderChoices();">Yup</button>
  <button class = "nope" onclick = "outsider2.score += 10; activeOutsider = outsider1; giveChoices();">Nope</button>
  </div>
  `
}

function announceOutsider1(){
  for(i=0; i<playersNum; i++){
    if(playersList[i].role === 'Outsider'){
      outsider1 = playersList[i];
      break;
    }
  }
  main.innerHTML = `<p><span class="highlight">${outsider1.name}</span> Was The Outsider</p>`
  if(mood === 'double' || mood === 'three'){
    setTimeout(() =>{betray();},1500);  
  } else if (mood === 'classic' || mood === 'spy'){
    setTimeout(() =>{activeOutsider = outsider1; giveChoices();},1500);
  }
}

function announceDetective(){
  for(i=0; i<playersNum; i++){
    if(playersList[i].role === 'Detective'){
      detective = playersList[i];
      break;
    }
  }
  main.innerHTML = `<p><span class="highlight">${detective.name}</span> Was The Detective</p>
  <p>White Team got: ${whiteVotes} Votes</p>
  <p>Black Team got: ${blackVotes} Votes</p>`
  setTimeout(() =>{giveDetectiveChoices();},3000);
}

function announceVotes(){
  main.innerHTML = `
  <p>White Team got: ${whiteVotes} Votes</p>
  <p>Black Team got: ${blackVotes} Votes</p>`
  setTimeout(() =>{showScore();},3000);
}

function giveOutsiderChoices(){
  let playersButtons = ``;
  guesser = outsider1;
  sortByNumber(playersList);
  guessList = playersList.slice();
  for(i=0; i<playersNum; i++){
    if(guesser.name !== guessList[i].name){
      playersButtons += `<button onclick="guessingRole='${guessList[i].role}'; checkBetray();">
        ${guessList[i].name}
      </button>`;
    }
  }
  main.innerHTML = `
    <div class="guessing">
      <p><span class="highlight">${guesser.name}</span>, Guess The outsider...</p>
      <div class="guessings">` +
        playersButtons
      + `</div>
    </div>
  `;
}

function giveDetectiveChoices(){
  sortByNumber(playersList);
  let playersButtons = ``;
  let k = 0;
  for(i=0; i<playersNum; i++){
    if(playersList[i].role !== 'Detective'){
      playersButtons += `<button class = "p${k} white-player" onclick="shiftColor(${k});">
        ${playersList[i].name}
      </button>`;
      k++;
    }
  }
  main.innerHTML = `
    <div class="guessing">
      <p><span class="highlight">${detective.name}</span>, Guess The Teams...</p>
      <div class="guessings">` +
        playersButtons
      + `</div>
      <button class="check" onclick="checkRoles();">Check</button>
    </div>
  `;
}

function shiftColor(i){
  const activeTeamPlayer = document.querySelector(`.p${i}`);
  if(activeTeamPlayer.classList.contains('white-player')){
    activeTeamPlayer.classList.remove('white-player');
    activeTeamPlayer.classList.add('black-player');
  } else {
    activeTeamPlayer.classList.remove('black-player');
    activeTeamPlayer.classList.add('white-player');
  }
}

function checkRoles(){
  let teamsList = playersList.slice();
  let activeTeamPlayer;
  for(let k=0; k<playersNum; k++){
    if(teamsList[k].role === 'Detective'){
      teamsList.splice(k,1);
      break;
    }
  }
  for(let i=0; i<(playersNum-1); i++){
    for(let j=0; j<(playersNum-1); j++){
      if(document.querySelector(`.p${i}`).innerHTML.trim() === teamsList[j].name){
        activeTeamPlayer = teamsList[j];
        break;
      }
    }
    if(document.querySelector(`.p${i}`).classList.contains('black-player') && activeTeamPlayer.role === 'Black Player'){
      detective.score += 5;      
    } else if (document.querySelector(`.p${i}`).classList.contains('white-player') && activeTeamPlayer.role === 'White Player'){
      detective.score += 5;
    } else {
      detective.score -= 5;
    }
  }
  showScore();
}

function checkBetray(){
  if(guessingRole === 'Outsider'){
    outsider1.score += 20;
  } else {
    outsider1.score -= 10;
    outsider2.score += 5;
  }
  giveChoices();
}

function giveChoices(){
  choicesList = shuffle(choicesList).filter(element => element !== theWord);
  let miniChoicesList = choicesList.slice(0, 8);
  miniChoicesList.push(theWord);
  miniChoicesList = shuffle(miniChoicesList);
  let choices = ``;
  let wordChosen;
  for(i=0; i<9; i++){
    choices += `<button class="choice${i}" onclick="wordChosen = '${miniChoicesList[i]}'; if(checks){checkIt(wordChosen); checks--;}">${miniChoicesList[i]}</button>`
  }
  main.innerHTML = `
  <div class="choice">
    <p><span class="highlight">${activeOutsider.name}</span>, Guess The Word...</p>
    <div class="guessings">`+
      choices
    +`</div>
  </div>
  `;
  choicesList.push(theWord);
}

function checkIt(wordChosen){
  let activeChoice;
  let rightChoice;
  for(i=0; i<9; i++){
    if(document.querySelector(`.choice${i}`).innerHTML === wordChosen){
      activeChoice = document.querySelector(`.choice${i}`);
    }
    if(document.querySelector(`.choice${i}`).innerHTML === theWord){
      rightChoice = document.querySelector(`.choice${i}`);
    }
  }
  if(wordChosen === theWord){
    activeChoice.classList.add('correctChoice');
    activeOutsider.score += 10;
  } else {
    activeChoice.classList.add('wrongChoice');
    rightChoice.classList.add('correctChoice');
  }
  setTimeout(() => {showScore();}, 1500);
}

function showScore(){
  sortByNumber(playersList);
  localStorage.setItem('lastAutoSavedList',JSON.stringify(playersList));
  localStorage.setItem('lastAutoSavedNum',JSON.stringify(playersNum));
  let playersRows = ``;
  sortByScore(playersList);
  for(i=0; i<playersNum; i++){
    playersRows += `
    <div class="cell name">${playersList[i].name}</div>
    <div class="cell score">${playersList[i].score}</div>
    <div class="cell role">${playersList[i].role}</div>
    <div class="cell buttons"><button class="bounce" onclick="adjustScore(${i}, 5)">+5</button> <button class="penalty" onclick="adjustScore(${i}, -5)">-5</button></div>
  `
  }
  main.innerHTML = `
  <div class="scoreSheet">
    <div class="score-header">Player</div>
    <div class="score-header">Score</div>
    <div class="score-header">Last Role</div>
    <div class="score-header">P&B</div>` +
    playersRows
  +`</div>
  <button class="next-round" onclick="playNextRound();">Next Round</button>`
}

function playNextRound(){
  if(roundsNum > 1){
    roundsNum--;
    checks = 1;
    blackVotes = 0;
    whiteVotes = 0;
    spy = {};
    outsider1 = {};
    outsider2 = {};
    detective = {};
    spyTakers = [];
    if(urmMood === 1){
      mood = 'urm';
    } else if (randomMood === 1){
      mood = 'random';
    }
    for(i=0; i<playersNum; i++){
      playersList[i].votes = 0;
    }
    sortByNumber(playersList);
    localStorage.setItem('lastAutoSavedList',JSON.stringify(playersList));
    localStorage.setItem('lastAutoSavedNum',JSON.stringify(playersNum));
    startRound();
  } else {
    main.innerHTML = `
    <p class = "winner"><span class="highlight">${playersList[0].name}</span> is the winner!</p>
    <p>I have no time to check for more winners sooo</p>
    <p>If there is more than one winner, just celebrate together :D</p>`
  }
}

function adjustScore(playerIndex,points){
  playersList[playerIndex].score += points;
  showScore();
}

function sortByVotes(array) {
  const roleOrder = {
    'Outsider': 1,
    'Spy': 2,
    'Detective': 3,
    'Insider': 4
  };

  array.sort((a, b) => {
    if (b.votes !== a.votes) {
      return b.votes - a.votes;
    } else if (b.score !== a.score) {
      return b.score - a.score;
    } else {
      return roleOrder[a.role] - roleOrder[b.role];
    }
  });
  if(mood === 'teams'){
    if(playersNum % 2 !== 0){
      announceDetective();
    } else {
      announceVotes();
    }
  }else{
    announceOutsider1();
  }
}

function sortByScore(array){
  const roleOrder = {
    'Outsider': 1,
    'Spy': 2,
    'Detective': 3,
    'Insider': 4
  };
  array.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    } else {
      return roleOrder[a.role] - roleOrder[b.role];
    }
  });
}

function sortByNumber(array){
  array.sort((a, b) => {
      return a.number - b.number;
    }
  );
}