/* *
 * audio visualizer with html5 audio element
 *
 * v0.1.0
 *
 * licenced under the MIT license
 *
 * see my related repos:
 * - HTML5_Audio_Visualizer https://github.com/wayou/HTML5_Audio_Visualizer
 * - 3D_Audio_Spectrum_VIsualizer https://github.com/wayou/3D_Audio_Spectrum_VIsualizer
 * - selected https://github.com/wayou/selected
 * - MeowmeowPlayer https://github.com/wayou/MeowmeowPlayer
 *
 * reference: http://www.patrick-wied.at/blog/how-to-create-audio-visualizations-with-javascript-html
 */

window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

var start = function(num) {
    var audio = document.querySelectorAll('audio');
    var ctx = new AudioContext();
    var analyser = ctx.createAnalyser();
    var audioSrc = ctx.createMediaElementSource(audio[num]);
    // we have to connect the MediaElementSource with the analyser
    audioSrc.connect(analyser);
    analyser.connect(ctx.destination);
    // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
    // analyser.fftSize = 64;
    // frequencyBinCount tells you how many values you'll receive from the analyser
    var frequencyData = new Uint8Array(analyser.frequencyBinCount);

    // we're ready to receive some data!
    var canvas = document.querySelectorAll('canvas'),
        cwidth = canvas[num].width,
        cheight = canvas[num].height - 2,
        meterWidth = 2, //width of the meters in the spectrum
        gap = 1, //gap between meters
        capHeight = 2,
        capStyle = '#fff',
        meterNum = 100 / (2), //count of the meters
        capYPositionArray = []; ////store the vertical position of hte caps for the preivous frame
    ctx = canvas[num].getContext('2d'),
    gradient = ctx.createLinearGradient(0, 0, 0, 300);

    // loop
    function renderFrame() {
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        var step = Math.round(array.length / meterNum); //sample limited data from the total array
        ctx.clearRect(0, 0, cwidth, cheight);
        for (var i = 0; i < meterNum; i++) {
            var value = array[i * step *.5];
            if (capYPositionArray.length < Math.round(meterNum)) {
                capYPositionArray.push(value);
            };
            ctx.fillStyle = capStyle;
            //draw the cap, with transition effect

     //set the filllStyle to gradient for a better look
            ctx.fillRect(i * 6 /*meterWidth+gap*/ , cheight - value*.125 + capHeight, meterWidth, cheight); //the meter
        }
        requestAnimationFrame(renderFrame);
    }
    renderFrame();
    // audio.play();
};

for (let i = 0; i < 3; i++){
    audio[i].onplay = function(){
        start(i);
    }
}
