
          function myFunction() {
              fileArray = ["Samples/UrbanSound_Dataset_sample_audio_103074-7-0-0.wav", "Samples/UrbanSound_Dataset_sample_audio_100032-3-0-0.wav", "Samples/UrbanSound_Dataset_sample_audio_100263-2-0-117.wav"]
              var num = Math.floor(Math.random() * fileArray.length);
              var x = document.getElementById("music");
              x.src = fileArray[num]; 
              var num2 = Math.floor(Math.random() * fileArray.length);
              var x2 = document.getElementById("music2");
              x2.src = fileArray[num2];

              var y = document.getElementById("file_name");
              y.value = fileArray[num]
              var y2 = document.getElementById("file_name2");
              y2.value = fileArray[num2]


              var audio = document.getElementById("music");
              audio.volume = 1;
              audio.autoplay = false;
              audio.load();

              var audio2 = document.getElementById("music2");
              audio2.volume = 1;
              audio2.autoplay = false;
              audio2.load();
              }
