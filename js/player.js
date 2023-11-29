document.addEventListener('DOMContentLoaded', function () {
    const themeSelector = document.getElementById('themeSelector');
    const contentDiv = document.getElementById('content');

    const textData = {
        theme1: {
            text: "Your theme 1 text goes here",
            audio: "./assets/bad.mp3",
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
        }
    };

    // Add event listener to theme selector
    themeSelector.addEventListener('change', function () {
        const selectedTheme = themeSelector.value;
        if (selectedTheme) {
            displayTextAndAudio(selectedTheme);
        }
    });

    // Add event listeners to each figure
    const figures = document.querySelectorAll('.grid-item figure');
    figures.forEach((figure, index) => {
        figure.addEventListener('click', function () {
            const selectedTheme = `theme${index + 1}`;
            displayTextAndAudio(selectedTheme);
        });
    });

    function displayTextAndAudio(theme) {
        const selectedTheme = textData[theme];
        const audioElement = document.createElement('audio');
        audioElement.setAttribute('controls', true);
        audioElement.innerHTML = `
            <source src="${selectedTheme.audio}" type="audio/mp3">
            Your browser does not support the audio element.
        `;
        const pTag = document.createElement('p');
        pTag.textContent = selectedTheme.text;
        pTag.appendChild(audioElement);
        contentDiv.innerHTML = '';
        contentDiv.appendChild(pTag);
    }
});