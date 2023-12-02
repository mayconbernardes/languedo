const themeSelect = document.getElementById('themeSelect');
const textDisplay = document.getElementById('textDisplay');
const audioPlayer = document.getElementById('audioPlayer');

themeSelect.addEventListener('change', (e) => {
  const selectedTheme = e.target.value;
  textDisplay.innerHTML = textData[selectedTheme].text;
  audioPlayer.src = textData[selectedTheme].audio;
});

const textData = {
        theme1: {
            text: `
              <pre>
              <p>
              Milton: Hi, Mum. I'm sorry I haven't written for a while, but your baby boy is still alive so you can stop worrying.
              It's all OK here.
              Benedita and Paulo are away, so I'm alone in the flat. The problem is now I have to remember my keys when I go out.
              I got home yesterday, no keys, so I'm standing there in the hall like an idiot when ... 
              Mei: Hello. 
              Milton: Hello. 
              Mei: Who are you? Do you live here? 
              Milton: Um, yes, I am, I do, I mean, yes, I live in this flat here, with Benedita and Paulo. Are you our new neighbour? 
              Mei: I live in this flat here – number 4A. 
              Milton: My name is Milton. And you're ...? 
              Mei: Mei. 
              Milton: Mei. OK, nice to meet you, Mei. 
              Mei: Nice to meet you. 
              Mei: Goodbye then. 
              Milton: Bye. 
              Mei: Are you not going into your flat? 
              Milton: Ah, well, that's a bit of a problem. I haven't got the key. 
              Mei: You haven't got the key? Are you sure you live there? 
              Milton: Of course I live here – I told you – but I left my keys in the kitchen this morning. 
              Mei: So what are you going to do? 
              Milton: I don't know. I used to leave a key with my old friend Carolina on the ground floor, but she's gone away. 
              Mei: Hmm. 
              Milton: Um, you know you've got a small balcony outside your kitchen? 
              Mei: Yes ... 
              Milton: Well, so have we. 
              Mei: Yes ... 
              Milton: Well, I could climb from your balcony over to our balcony and get in through the kitchen window. 
              Mei: I am not ... I don't ... 
              Milton: I'll be careful. Don't worry. 
              Mei: But I don't know you! How do I know you're not a criminal? 
              Milton: You mean a burglar? No! I told you – my name is Milton da Silva. I studied here in the UK. I can show you some ...
              Ha! My old student card. Here. 
              Mei: OK, so you are Milton da Silva. Newcastle University, School of Theatre Studies. You could be a burglar now. 
              Milton: Really? Look, you can hold my bag with all my money and everything. 
              Mei: OK, come in. Go straight to the kitchen. That way. 
              Milton: There you are! Job done! 
              Mei: OK. 
              Milton: So, thanks for your help – really. 
              Mei: That's OK. 
              Milton: Hey, Mei. 
              Mei: Yes? 
              Milton: Well – if we're neighbours now ... I'm Milton, I'm from Brazil, I'm an actor. What about you? 
              Mei: My name is Mei and I'm from China. 
              Milton: And are you studying here? 
              Mei: No, I'm working. I have a job here. In IT. 
              Milton: Do you like it? 
              Mei: I don't know. I haven't started yet. I only left China last week. 
              Milton: Well – good luck. I'm sure it'll all go well. 
              Mei: I hope so. 
              Milton: OK. Bye. Thanks again. 
              Mei: Bye. 
              Milton: So, we've got a new neighbour from China who thinks I might be a burglar, but she seems nice and I think she quite liked me.
              And now I want to hear all your news. How's life in Florida? Give my love to Henry. 
              And tell Alfredo to text me sometime. Lots of love, Milton.
              </p>
              </pre>`,
            audio: "./assets/home.mp3"
          },
        theme2: {
          text: "Your theme 2 text goes here",
          audio: "audio/theme2.mp3"
        },
        theme3: {
          text: "Your theme 3 text goes here",
          audio: "audio/theme3.mp3"
        },
        theme4: {
          text: "Your theme 4 text goes here",
          audio: "audio/theme4.mp3"
        },
        theme5: {
          text: "Your theme 5 text goes here",
          audio: "audio/theme5.mp3"
        },
        theme6: {
          text: "Your theme 6 text goes here",
          audio: "audio/theme6.mp3"
        }
      };
      
     