document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.querySelectorAll('#nav a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const calculatorType = event.target.dataset.calculator;
            loadCalculator(calculatorType);
            highlightSelectedButton(event.target);
        });
    });
});

function highlightSelectedButton(selectedButton) {
    const navbarLinks = document.querySelectorAll('#nav a');
    navbarLinks.forEach(link => {
        link.classList.remove('selected');
    });
    selectedButton.classList.add('selected');
}

function loadCalculator(type) {
    const inputFields = document.getElementById('calc');
    inputFields.innerHTML = '';

    let inputHTML = '';
    switch (type) {
        case 'crime':
            inputHTML = `
                <div id="input-fields">

            <span>Num. of packs</span>
            <input class="input box" type="number" id="pack" placeholder="">
            <div class="mbrr"><br></div>
            <span>Rate</span>
            <input class="input box" type="number" id="rate" placeholder="">
            <img src="images/crime/wave.png" class="lil-img crime-img wave">
            <input class="input box" type="number" id="wave" placeholder="">
            <br>

            <img src="images/crime/heatvision.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c1" placeholder="">
            <img src="images/crime/incinerate.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c2" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/crime/flameon.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c3" placeholder="">
            <img src="images/crime/liquify.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c4" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/crime/overheat.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c5" placeholder="">
            <div class="mbr"><br></div>
            <img src="images/crime/iceshards.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c6" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/crime/frostbreath.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c7" placeholder="">
            <img src="images/crime/icebarrier.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c8" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/crime/puddle.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c9" placeholder="">
            <img src="images/crime/frozenmirror.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c10" placeholder="">
            <br>
            <img src="images/crime/superstrength.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c11" placeholder="">
            <img src="images/crime/superspeed.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c12" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/crime/enrage.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c13" placeholder="">
            <img src="images/crime/crush.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c14" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/crime/regeneration.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c15" placeholder="">
            <div class="mbr"><br></div>
            <img src="images/crime/shockingfist.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c16" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/crime/thunderstorm.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c17" placeholder="">
            <img src="images/crime/overcharge.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c18" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/crime/megawattpulse.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c19" placeholder="">
            <img src="images/crime/resuscitate.png" class="lil-img crime-img">
            <input class="input box" type="number" id="c20" placeholder="">

            <div class="info-container">
            <button id="info-button" class="box"><img class="info" src="images/info.png"></button>
            <div class="info-box box">
                <p>Info</p>
                <ul>
                    <li>- Crime wave input takes in the price of each wave</li>
                    <br>
                    <li>- Cards input takes in the number of card per WL</li>
                </ul>
            </div>
            </div>

            <button id="calculate-button" class="box" onclick="calculateCrime()">Calculate</button> 

        </div>
        <div id="result"></div>
            `;
            break;
        case 'surg':
            inputHTML = ` 
            <div id="input-fields">

            <span>Num. of packs</span>
            <input class="input box" type="number" id="pack" placeholder="">
            <div class="mbrr"><br></div>
            <span>Rate</span>
            <input class="input box" type="number" id="rate" placeholder="">
            <img src="images/surg/surge.png" class="lil-img crime-img wave surge">
            <input class="input box" type="number" id="surge" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/surg/stitches.png" class="lil-img surg-img">
            <input class="input box" type="number" id="stit" placeholder="">
            <div class="mbr"><br></div>

            <img src="images/surg/anesthetic.png" class="lil-img surg-img">
            <input class="input box surg-input" type="number" id="c1" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/surg/antibiotics.png" class="lil-img surg-img">
            <input class="input box surg-input" type="number" id="c2" placeholder="">
            <img src="images/surg/antiseptic.png" class="lil-img surg-img">
            <input class="input box surg-input" type="number" id="c3" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/surg/clamp.png" class="lil-img surg-img">
            <input class="input box surg-input" type="number" id="c4" placeholder="">
            <div class="mbr"><br></div>

            <img src="images/surg/defibrillator.png" class="lil-img surg-img">
            <input class="input box surg-input" type="number" id="c5" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/surg/labkit.png" class="lil-img surg-img">
            <input class="input box surg-input" type="number" id="c6" placeholder="">
            <img src="images/surg/pins.png" class="lil-img surg-img">
            <input class="input box surg-input" type="number" id="c7" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/surg/scalpel.png" class="lil-img surg-img">
            <input class="input box surg-input" type="number" id="c8" placeholder="">
            <div class="mbr"><br></div>

            <img src="images/surg/splint.png" class="lil-img surg-img">
            <input class="input box surg-input" type="number" id="c9" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/surg/sponge.png" class="lil-img surg-img">
            <input class="input box surg-input" type="number" id="c10" placeholder="">
            <img src="images/surg/transfusion.png" class="lil-img surg-img">
            <input class="input box surg-input" type="number" id="c11" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/surg/ultrasound.png" class="lil-img surg-img">
            <input class="input box surg-input" type="number" id="c12" placeholder="">
            <div class="mbr"><br></div>

            <div class="info-container">
            <button id="info-button" class="box"><img class="info" src="images/info.png"></button>
            <div class="info-box box">
                <p>Info</p>
                <ul>
                    <li>- Surg-E input takes in price per 200 Surg-Es</li>
                    <br>
                    <li>- Stitch input takes in price per 200 Stitches</li>
                    <br>
                    <li>- Other tool input takes in number of tool per WL</li>
                </ul>
            </div>
            </div>

            <button id="calculate-button" class="box" onclick="calculateSurg()">Calculate</button>

        </div>
        <div id="result"></div>
            `;
            break;
        case 'gala':
            inputHTML = ` <div id="input-fields">

            <span>Num. of packs</span>
            <input class="input box" type="number" id="pack" placeholder="">
            <div class="mbrr"><br></div>
            <span>Rate</span>
            <input class="input box" type="number" id="rate" placeholder="">
            <img src="images/gala/starfuel.png" class="lil-img crime-img wave">
            <input class="input box" type="number" id="fuel" placeholder="">
            <br>
            
            <div class="galaspace">
            <img src="images/gala/tacticaldrone.png" class="lil-img gala-img">
            <input class="input box" type="number" id="drone" placeholder="">
            <img src="images/gala/teleportercharge.png" class="lil-img gala-img">
            <input class="input box" type="number" id="tele" placeholder="">
            <br>
            </div>

            <div class="galaspace">
            <img src="images/gala/aibrain.png" class="lil-img gala-img">
            <input class="galainput input box" type="number" id="c1" placeholder="">
            <img src="images/gala/cyborgdiplomat.png" class="lil-img gala-img">
            <input class="galainput input box" type="number" id="c2" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/gala/galactibolt.png" class="lil-img gala-img">
            <input class="galainput input box" type="number" id="c3" placeholder="">
            <img src="images/gala/gigablaster.png" class="lil-img gala-img">
            <input class="galainput input box" type="number" id="c4" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/gala/growtontorpedo.png" class="lil-img gala-img">
            <input class="galainput input box" type="number" id="c5" placeholder="">
            <div class="mbr"><br></div>
            </div>

            <div class="galaspace">
            <img src="images/gala/hypershields.png" class="lil-img gala-img">
            <input class="galainput input box" type="number" id="c6" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/gala/quadriscanner.png" class="lil-img gala-img">
            <input class="galainput input box" type="number" id="c7" placeholder="">
            <img src="images/gala/spacemeds.png" class="lil-img gala-img">
            <input class="galainput input box" type="number" id="c8" placeholder="">
            <div class="mbrr"><br></div>
            <img src="images/gala/starsupplies.png" class="lil-img gala-img">
            <input class="galainput input box" type="number" id="c9" placeholder="">
            <img src="images/gala/stellardocuments.png" class="lil-img gala-img">
            <input class="galainput input box" type="number" id="c10" placeholder="">
            <br>
            </div>
            
            <div class="info-container">
            <button id="info-button" class="box"><img class="info" src="images/info.png"></button>
            <div class="info-box box">
                <p>Info</p>
                <ul>
                    <li>- Star fuel and normal tool input takes in number of item per WL</li>
                    <br>
                    <li>- Tactical Drone and Teleporter Charge input takes in price per 200 tool</li>
                </ul>
            </div>
            </div>

            <button id="calculate-button" class="box" onclick="calculateGala()">Calculate</button>

        </div>
        <div id="result"></div>
            `;
            break;
        default:
    }
    inputFields.innerHTML = inputHTML;
    render_result(NaN,0,0);
}

function getDL(wl) {
    return Math.floor(wl/100);
}

function calculateCrime() {

    const pack = parseFloat(document.getElementById('pack').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const wave = parseFloat(document.getElementById('wave').value);

    const total_card = pack * 25
    const card_each = total_card / 20
    const card = (card_each/parseFloat(document.getElementById('c1').value) + card_each/parseFloat(document.getElementById('c2').value) + card_each/parseFloat(document.getElementById('c3').value) + card_each/parseFloat(document.getElementById('c4').value) + card_each/parseFloat(document.getElementById('c5').value) + card_each/parseFloat(document.getElementById('c6').value) + card_each/parseFloat(document.getElementById('c7').value) + card_each/parseFloat(document.getElementById('c8').value) + card_each/parseFloat(document.getElementById('c9').value) + card_each/parseFloat(document.getElementById('c10').value) + card_each/parseFloat(document.getElementById('c11').value) + card_each/parseFloat(document.getElementById('c12').value) + card_each/parseFloat(document.getElementById('c13').value) + card_each/parseFloat(document.getElementById('c14').value) + card_each/parseFloat(document.getElementById('c15').value) + card_each/parseFloat(document.getElementById('c16').value) + card_each/parseFloat(document.getElementById('c17').value) + card_each/parseFloat(document.getElementById('c18').value) + card_each/parseFloat(document.getElementById('c19').value) + card_each/parseFloat(document.getElementById('c20').value))

    const cost = pack * rate
    const gross = Math.round((pack * wave) + card)
    const profit =  Math.round(gross - cost);
    
    render_result(cost, gross, profit);
}

function calculateSurg () {

    const pack = parseFloat(document.getElementById('pack').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const surge = pack * 5 * parseFloat(document.getElementById('surge').value) / 200;
    const stit = parseFloat(document.getElementById('stit').value);

    const total_tool = pack * 260
    const tool_each = total_tool / 13
    const tool = (tool_each / parseFloat(document.getElementById('c1').value) + tool_each / parseFloat(document.getElementById('c2').value) + tool_each / parseFloat(document.getElementById('c3').value) + tool_each/parseFloat(document.getElementById('c4').value) + tool_each/parseFloat(document.getElementById('c5').value) + tool_each/parseFloat(document.getElementById('c6').value) + tool_each/parseFloat(document.getElementById('c7').value) + tool_each/parseFloat(document.getElementById('c8').value) + tool_each/parseFloat(document.getElementById('c9').value) + tool_each/parseFloat(document.getElementById('c10').value) + tool_each/parseFloat(document.getElementById('c11').value) + tool_each/parseFloat(document.getElementById('c12').value) + (tool_each * stit / 200))

    const cost = pack * rate
    const gross = Math.round(surge + tool)
    const profit =  Math.round(gross - cost);
    
    render_result(cost, gross, profit);
}

function calculateGala () {

    const pack = parseFloat(document.getElementById('pack').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const fuel = pack * 25 /parseFloat(document.getElementById('fuel').value);
    const drone = parseFloat(document.getElementById('drone').value);
    const tele = parseFloat(document.getElementById('tele').value);

    const total_tool = pack * 60
    const tool_each = total_tool / 12
    const tool = (tool_each / parseFloat(document.getElementById('c1').value) + tool_each / parseFloat(document.getElementById('c2').value) + tool_each / parseFloat(document.getElementById('c3').value) + tool_each/parseFloat(document.getElementById('c4').value) + tool_each/parseFloat(document.getElementById('c5').value) + tool_each/parseFloat(document.getElementById('c6').value) + tool_each/parseFloat(document.getElementById('c7').value) + tool_each/parseFloat(document.getElementById('c8').value) + tool_each/parseFloat(document.getElementById('c9').value) + tool_each/parseFloat(document.getElementById('c10').value) + (tool_each * drone / 200) + (tool_each * tele / 200))

    const cost = pack * rate
    const gross = Math.round(fuel + tool)
    const profit =  Math.round(gross - cost);
    
    render_result(cost, gross, profit);
}

function render_result(cost, gross, profit) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';

    if (isNaN(cost) || isNaN(gross) || isNaN(profit)) {
        resultContainer.innerHTML = resultContainer.innerHTML + `Cost: <span class="resultnum"> 0 <img class="wl" src="./images/wl.png"></span><br><br>Gross profit: <span class="resultnum"> 0 <img class="wl" src="./images/wl.png"></span><br><br>Clean profit: <span class="resultnum"> 0 <img class="wl" src="./images/wl.png"></span><br><br>Margin: <span class="resultnum"> 0% </span>`;
    } else {
        if (cost >= 100) {
            const dl = getDL(cost);
            const wl = cost - (dl * 100)
            resultContainer.innerHTML = resultContainer.innerHTML + `Cost: <span class="resultnum">${dl} <img class="wl" src="./images/dl.png"> ${wl} <img class="wl" src="./images/wl.png"></span>`;
        } else {
            resultContainer.innerHTML = resultContainer.innerHTML + `Cost: <span class="resultnum">${cost} <img class="wl" src="./images/wl.png"></span>`;
        }

        resultContainer.innerHTML = resultContainer.innerHTML + `<br><br>`;

        if (gross >= 100) {
            const dl = getDL(gross);
            const wl = gross - (dl * 100)
            resultContainer.innerHTML = resultContainer.innerHTML + `Gross profit: <span class="resultnum">${dl} <img class="wl" src="./images/dl.png"> ${wl} <img class="wl" src="./images/wl.png"></span>`;
        } else {
            resultContainer.innerHTML = resultContainer.innerHTML + `Gross profit: <span class="resultnum">${gross} <img class="wl" src="./images/wl.png"></span>`;
        }

        resultContainer.innerHTML = resultContainer.innerHTML + `<br><br>`;

        if (profit >= 100) {
            const dl = getDL(profit);
            const wl = profit - (dl * 100)
            resultContainer.innerHTML = resultContainer.innerHTML + `Clean profit: <span class="resultnum">${dl} <img class="wl" src="./images/dl.png"> ${wl} <img class="wl" src="./images/wl.png"></span>`;
        } else if (profit < 0) {
            resultContainer.innerHTML = resultContainer.innerHTML + `Clean profit: <span class="resultnum margin-n">${profit} <img class="wl" src="./images/wl.png"></span>`;
        } else {
            resultContainer.innerHTML = resultContainer.innerHTML + `Clean profit: <span class="resultnum">${profit} <img class="wl" src="./images/wl.png"></span>`;
        }

        resultContainer.innerHTML = resultContainer.innerHTML + `<br><br>`;

        if (profit >= 0) {
            const margin = Math.round((gross/cost - 1)* 1000)/10;
            resultContainer.innerHTML = resultContainer.innerHTML + `Margin: <span class="resultnum margin-p">${margin}%</span>`;
        } else {
            const margin = Math.round((1- gross/cost)* 1000)/10;
            resultContainer.innerHTML = resultContainer.innerHTML + `Margin: <span class="resultnum margin-n">-${margin}%</span>`;
        }
    }
}