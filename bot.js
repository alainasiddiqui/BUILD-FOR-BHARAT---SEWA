var data= {
  chatinit:{
      title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","Please select your language"],
      options: ["english","हिंदी","తెలుగు","தமிழ்"]
  },
  //English part starts
  english: {
      title:["Please select category"],
      options:['shopping','report','track order','Others'],
      url : {
          
      }
  },
  //Shopping part starts(inside english)
  shopping: {
      title:["Thanks for your response","Welcome to shopping zone <span class='emoji'> &#128090;</span>","Please select one of the below options to proceed further"],
      options:['Beauty products','Watches','Men Fashion','Women fashion'],
      url : {
          
      }
  },
  men: {
    title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
    options:['Suits','Shirts','T-shirts','<a href="https://app.vectary.com/p/6OFVEx2ziyky5ZtTcgaRk9">Hoodies</a>','Jeans'],
    url : {
        more:"bot.html",
        link:["bot.html"]
    }
},
women: {
    title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
    options:['Clothing','Western Wear','Ethnic Wear','Top Brands'],
    url : {
        more:"bot.html",
        link:["#","#","#","#"]
    }
},
  beauty: {
      title:["Thanks for your response","Here are some beauty products for you","Click on it to know more"],
      options:['Make-up & Nails','Skin Care','Fragrance','Hair care'],
      url : {
          more:"bot.html",
          link:["#","#","#","#"]
      }
  },
  watches: {
      title:["Thanks for your response","These are the some of the products we have in this category"],
      options:['<img src="./chatbot.png" height="100px" width="100px">'],
      url : {
          more:"bot.html",
          link:["bot.html"]
      }
  },
 //Shopping ends

  track: {
      title:["This is the Status of Your order <span class='emoji'> &#1F4E6;</span>"],
      options: ['<img src="delivery.png" height="300px" width="150px">'],
      url : {
          link:["bot.html","bot.html","bot.html","bot.html"]
      }
  },
  //English ends
  
  
  //hindi starts
  हिंदी: {
      title: ["कृपया श्रेणी चुनें"],
      options: ['खरीदारी','आख्या','ट्रैक ऑर्डर','अन्य'],
      url: {

          
         
      }
  },
  
  खरीदारी: {
    title:["आपकी प्रतिक्रिया के लिए धन्यवाद","शॉपिंग ज़ोन में आपका स्वागत है <span class='emoji'> &#128090;</span>","कृपया आगे बढ़ने के लिए नीचे दिए गए विकल्पों में से एक का चयन करें"],
    options:['सौंदर्य उत्पाद','घड़ियाँ','पुरुष फैशन','महिला फैशन'],
     url : {
        
    }
},
पुरुष : {
    title:["आपकी प्रतिक्रिया के लिए धन्यवाद", "ये आपके इनपुट के आधार पर कुछ परिणाम हैं", "अधिक जानने के लिए इस पर क्लिक करें"],
    options:['सूट','शर्ट','टी-शर्ट','<a href="https://app.vectary.com/p/6OFVEx2ziyky5ZtTcgaRk9">हुडीज़</a>','जींस'],
     url : {
        more:"bot.html",
        link:["bot.html"]
    }
},
  others: {
      title: ["Here are some more options for you"],
      options: ["YouTube","Netflix","Amazon Prime","Hot Star"],
      url: {
          more:"https://www.youtube.com/",
          link:["#","#","#","#","#"]
      }
  },
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
  console.log(this.innerText);
  if(this.innerText=='START CHAT'){
      document.getElementById('test').style.display='block';
      document.getElementById('init').innerText='CLOSE CHAT';
      initChat();
  }
  else{
      location.reload();
  }
}

function initChat(){
  j=0;
  cbot.innerHTML='';
  for(var i=0;i<len1;i++){
      setTimeout(handleChat,(i*500));
  }
  setTimeout(function(){
      showOptions(data.chatinit.options)
  },((len1+1)*500))
}

var j=0;
function handleChat(){
  console.log(j);
  var elm= document.createElement("p");
  elm.innerHTML= data.chatinit.title[j];
  elm.setAttribute("class","msg");
  cbot.appendChild(elm);
  j++;
  handleScroll();
}

function showOptions(options){
  for(var i=0;i<options.length;i++){
      var opt= document.createElement("span");
      var inp= '<div>'+options[i]+'</div>';
      opt.innerHTML=inp;
      opt.setAttribute("class","opt");
      opt.addEventListener("click", handleOpt);
      cbot.appendChild(opt);
      handleScroll();
  }
}

function handleOpt(){
  console.log(this);
  var str= this.innerText;
  var textArr= str.split(" ");
  var findText= textArr[0];
  
  document.querySelectorAll(".opt").forEach(el=>{
      el.remove();
  })
  var elm= document.createElement("p");
  elm.setAttribute("class","test");
  var sp= '<span class="rep">'+this.innerText+'</span>';
  elm.innerHTML= sp;
  cbot.appendChild(elm);

  console.log(findText.toLowerCase());
  var tempObj= data[findText.toLowerCase()];
  handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
  var elm= document.createElement("p");
      elm.innerHTML= title;
      elm.setAttribute("class","msg");
      cbot.appendChild(elm);
}


function handleResults(title,options,url){
  for(let i=0;i<title.length;i++){
      setTimeout(function(){
          handleDelay(title[i]);
      },i*500)
      
  }

  const isObjectEmpty= (url)=>{
      return JSON.stringify(url)=== "{}";
  }

  if(isObjectEmpty(url)==true){
      console.log("having more options");
      setTimeout(function(){
          showOptions(options);
      },title.length*500)
      
  }
  else{
      console.log("end result");
      setTimeout(function(){
          handleOptions(options,url);
      },title.length*500)
      
  }
}

function handleOptions(options,url){
  for(var i=0;i<options.length;i++){
      var opt= document.createElement("span");
      var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
      opt.innerHTML=inp;
      opt.setAttribute("class","opt");
      cbot.appendChild(opt);
  }
  var opt= document.createElement("span");
  var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

  const isObjectEmpty= (url)=>{
      return JSON.stringify(url)=== "{}";
  }

  console.log(isObjectEmpty(url));
  console.log(url);
  opt.innerHTML=inp;
  opt.setAttribute("class","opt link");
  cbot.appendChild(opt);
  handleScroll();
}

function handleScroll(){
  var elem= document.getElementById('chat-box');
  elem.scrollTop= elem.scrollHeight;
}
const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Boss...")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon Master...")
    }

    else{
        speak("Good Evenining Sir...")
    }

}

window.addEventListener('load', ()=>{
    speak("Initializing JARVIS..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak("Hello Sir, How May I Help You?");
    }
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
}