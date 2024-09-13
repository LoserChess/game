body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

.game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.board-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.board-wrapper {
    display: flex;
    align-items: center;
}

.chessboard {
    width: 400px;
    height: 400px;
    border: 2px solid #333;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
}

.square {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    cursor: pointer;
}

.light {
    background-color: #f0d9b5;
}

.dark {
    background-color: #b58863;
}

.highlight {
    background-color: rgba(255, 255, 0, 0.5);
}

.castling-highlight {
    background-color: rgba(0, 0, 255, 0.3);
}

.selected {
    background-color: rgba(0, 255, 0, 0.3);
}

.capture-highlight {
    background-color: rgba(255, 0, 0, 0.5);
}

.file-labels, .rank-labels {
    display: flex;
    justify-content: space-around;
}

.file-labels {
    width: 400px;
    padding: 5px 0;
}

.rank-labels {
    flex-direction: column;
    height: 400px;
    justify-content: space-around;
    padding: 0 5px;
}

.file-labels div, .rank-labels div {
    width: 50px;
    text-align: center;
    font-size: 14px;
    color: #333;
}

#status {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
}

.promotion-modal {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border: 2px solid #333;
    z-index: 1000;
}

.promotion-piece {
    font-size: 40px;
    cursor: pointer;
    margin: 0 10px;
}

.win-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 24px;
    z-index: 2000;
}

.win-screen button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
}

.end-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 24px;
    z-index: 2000;
}
.end-screen button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
}

.game-title {
    font-size: 36px;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
}

.rules-button {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background-color: #333;
    color: white;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1000;
}

.rules-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2000;
}

.square-legend .square {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border: 1px solid #333;
}

.square-legend .square.highlight {
    background-color: rgba(255, 255, 0, 0.5);
}

.square-legend .square.selected {
    background-color: rgba(0, 255, 0, 0.3);
}

.square-legend .square.castling-highlight {
    background-color: rgba(0, 0, 255, 0.3);
}

.square-legend .square.capture-highlight {
    background-color: rgba(255, 0, 0, 0.5);
}

.capture-highlight, .square-legend .square.capture-highlight {
    background-color: rgba(255, 0, 0, 0.5) !important;
}

.rules-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    width: 60%; /* Increased width */
    max-width: 800px; /* Added max-width for very large screens */
    max-height: 80%;
    overflow-y: auto;
}

.square-legend {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 20px;
}

.legend-item {
    display: flex;
    align-items: center;
    margin: 10px;
    width: calc(50% - 20px); /* Two items per row */
}

.legend-item .square {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border: 1px solid #333;
}

/* Specific styles for each square type */
.legend-item .square.highlight {
    background-color: rgba(255, 255, 0, 0.5);
}

.legend-item .square.selected {
    background-color: rgba(0, 255, 0, 0.3);
}

.legend-item .square.castling-highlight {
    background-color: rgba(0, 0, 255, 0.3);
}

.legend-item .square.capture-highlight {
    background-color: rgba(255, 0, 0, 0.5);
}

.rules-list {
    text-align: left;
    padding-left: 20px;
}

#closeRules {
    display: block;
    margin: 20px auto 0;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

/* Add some spacing for the new "Rules:" heading */
.rules-content h3 {
    margin-top: 20px;
    margin-bottom: 10px;
}

.rules-content .square-legend .square.capture-highlight {
    background-color: rgba(255, 0, 0, 0.5) !important;
}

.capture-highlight {
    background-color: rgba(255, 0, 0, 0.5) !important;
}

/* Add a specific class for the example in the legend */
.capture-highlight-example {
    background-color: #ff0000 !important; /* Solid red color */
}

/* Ensure the squares in the legend have a visible border */
.square-legend .square {
    width: 40px;
    height: 40px;
    border: 1px solid #333;
    display: inline-block;
}

/* Additional styling for the legend items if needed */
.legend-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.legend-item span {
    margin-left: 10px;
}
