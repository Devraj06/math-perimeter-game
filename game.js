// ==================== SHAPE QUESTION GENERATOR ====================

class ShapeQuestionGenerator {
    constructor() {
        this.colors = [
            '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
            '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B88B', '#52C4A5',
            '#FF85A1', '#5DADE2', '#F1948A', '#A9DFBF', '#D7BDE2'
        ];
        this.questions = [];
    }

    generateRandomColor() {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Square: all sides equal
    generateSquare() {
        const side = this.generateRandomNumber(3, 12);
        const color = this.generateRandomColor();
        const perimeter = side * 4;
        
        return {
            type: 'square',
            sides: [side],
            perimeter: perimeter,
            svg: this.drawSquare(side, color),
            label: `Square with side length ${side} units`
        };
    }

    drawSquare(side, color) {
        const size = Math.min(side * 20, 200);
        const svg = `
            <svg viewBox="0 0 250 250" width="250" height="250" class="svg-shape">
                <rect x="25" y="25" width="${size}" height="${size}" 
                      fill="${color}" stroke="#333" stroke-width="3" rx="5"/>
                <text x="125" y="135" font-size="16" font-weight="bold" 
                      text-anchor="middle" fill="#333">${side}</text>
            </svg>
        `;
        return svg;
    }

    // Rectangle: opposite sides equal
    generateRectangle() {
        const length = this.generateRandomNumber(5, 14);
        const width = this.generateRandomNumber(3, 10);
        const color = this.generateRandomColor();
        const perimeter = 2 * (length + width);
        
        return {
            type: 'rectangle',
            sides: [length, width],
            perimeter: perimeter,
            svg: this.drawRectangle(length, width, color),
            label: `Rectangle with length ${length} and width ${width} units`
        };
    }

    drawRectangle(length, width, color) {
        const rectWidth = Math.min(length * 15, 220);
        const rectHeight = Math.min(width * 15, 120);
        
        const svg = `
            <svg viewBox="0 0 250 200" width="280" height="200" class="svg-shape">
                <rect x="15" y="40" width="${rectWidth}" height="${rectHeight}" 
                      fill="${color}" stroke="#333" stroke-width="3" rx="5"/>
                <text x="50" y="100" font-size="14" font-weight="bold" fill="#333">${length}</text>
                <text x="200" y="75" font-size="14" font-weight="bold" fill="#333">${width}</text>
            </svg>
        `;
        return svg;
    }

    // Triangle: three sides
    generateTriangle() {
        const side1 = this.generateRandomNumber(4, 10);
        const side2 = this.generateRandomNumber(4, 10);
        const side3 = this.generateRandomNumber(4, 10);
        const color = this.generateRandomColor();
        const perimeter = side1 + side2 + side3;
        
        return {
            type: 'triangle',
            sides: [side1, side2, side3],
            perimeter: perimeter,
            svg: this.drawTriangle(side1, side2, side3, color),
            label: `Triangle with sides ${side1}, ${side2}, and ${side3} units`
        };
    }

    drawTriangle(side1, side2, side3, color) {
        const svg = `
            <svg viewBox="0 0 250 250" width="250" height="250" class="svg-shape">
                <polygon points="125,30 30,200 220,200" 
                         fill="${color}" stroke="#333" stroke-width="3"/>
                <text x="125" y="160" font-size="14" font-weight="bold" 
                      text-anchor="middle" fill="#333">${side1}</text>
                <text x="50" y="150" font-size="14" font-weight="bold" fill="#333">${side2}</text>
                <text x="200" y="150" font-size="14" font-weight="bold" fill="#333">${side3}</text>
            </svg>
        `;
        return svg;
    }

    // Pentagon: five sides
    generatePentagon() {
        const sides = [
            this.generateRandomNumber(3, 8),
            this.generateRandomNumber(3, 8),
            this.generateRandomNumber(3, 8),
            this.generateRandomNumber(3, 8),
            this.generateRandomNumber(3, 8)
        ];
        const color = this.generateRandomColor();
        const perimeter = sides.reduce((a, b) => a + b, 0);
        
        return {
            type: 'pentagon',
            sides: sides,
            perimeter: perimeter,
            svg: this.drawPentagon(sides, color),
            label: `Pentagon with sides ${sides.join(', ')} units`
        };
    }

    drawPentagon(sides, color) {
        const svg = `
            <svg viewBox="0 0 250 250" width="250" height="250" class="svg-shape">
                <polygon points="125,30 210,90 190,180 60,180 40,90" 
                         fill="${color}" stroke="#333" stroke-width="3"/>
                <text x="125" y="50" font-size="12" font-weight="bold" 
                      text-anchor="middle" fill="#333">${sides[0]}</text>
                <text x="210" y="90" font-size="12" font-weight="bold" fill="#333">${sides[1]}</text>
                <text x="180" y="175" font-size="12" font-weight="bold" fill="#333">${sides[2]}</text>
                <text x="70" y="175" font-size="12" font-weight="bold" fill="#333">${sides[3]}</text>
                <text x="40" y="90" font-size="12" font-weight="bold" fill="#333">${sides[4]}</text>
            </svg>
        `;
        return svg;
    }

    // Hexagon: six sides
    generateHexagon() {
        const sides = [
            this.generateRandomNumber(3, 8),
            this.generateRandomNumber(3, 8),
            this.generateRandomNumber(3, 8),
            this.generateRandomNumber(3, 8),
            this.generateRandomNumber(3, 8),
            this.generateRandomNumber(3, 8)
        ];
        const color = this.generateRandomColor();
        const perimeter = sides.reduce((a, b) => a + b, 0);
        
        return {
            type: 'hexagon',
            sides: sides,
            perimeter: perimeter,
            svg: this.drawHexagon(sides, color),
            label: `Hexagon with sides ${sides.join(', ')} units`
        };
    }

    drawHexagon(sides, color) {
        const svg = `
            <svg viewBox="0 0 250 250" width="250" height="250" class="svg-shape">
                <polygon points="125,30 210,70 210,150 125,190 40,150 40,70" 
                         fill="${color}" stroke="#333" stroke-width="3"/>
                <text x="125" y="50" font-size="11" font-weight="bold" 
                      text-anchor="middle" fill="#333">${sides[0]}</text>
                <text x="215" y="100" font-size="11" font-weight="bold" fill="#333">${sides[1]}</text>
                <text x="215" y="160" font-size="11" font-weight="bold" fill="#333">${sides[2]}</text>
                <text x="125" y="210" font-size="11" font-weight="bold" 
                      text-anchor="middle" fill="#333">${sides[3]}</text>
                <text x="35" y="160" font-size="11" font-weight="bold" fill="#333">${sides[4]}</text>
                <text x="35" y="100" font-size="11" font-weight="bold" fill="#333">${sides[5]}</text>
            </svg>
        `;
        return svg;
    }

    // Octagon: eight sides
    generateOctagon() {
        const sides = Array(8).fill(0).map(() => this.generateRandomNumber(2, 6));
        const color = this.generateRandomColor();
        const perimeter = sides.reduce((a, b) => a + b, 0);
        
        return {
            type: 'octagon',
            sides: sides,
            perimeter: perimeter,
            svg: this.drawOctagon(sides, color),
            label: `Octagon with sides ${sides.join(', ')} units`
        };
    }

    drawOctagon(sides, color) {
        const svg = `
            <svg viewBox="0 0 250 250" width="250" height="250" class="svg-shape">
                <polygon points="80,30 170,30 215,75 215,165 170,210 80,210 35,165 35,75" 
                         fill="${color}" stroke="#333" stroke-width="3"/>
                <text x="125" y="50" font-size="10" font-weight="bold" 
                      text-anchor="middle" fill="#333">${sides[0]}</text>
            </svg>
        `;
        return svg;
    }

    // Parallelogram: opposite sides equal
    generateParallelogram() {
        const side1 = this.generateRandomNumber(5, 12);
        const side2 = this.generateRandomNumber(3, 9);
        const color = this.generateRandomColor();
        const perimeter = 2 * (side1 + side2);
        
        return {
            type: 'parallelogram',
            sides: [side1, side2],
            perimeter: perimeter,
            svg: this.drawParallelogram(side1, side2, color),
            label: `Parallelogram with sides ${side1} and ${side2} units`
        };
    }

    drawParallelogram(side1, side2, color) {
        const svg = `
            <svg viewBox="0 0 280 200" width="280" height="200" class="svg-shape">
                <polygon points="40,150 200,150 240,50 80,50" 
                         fill="${color}" stroke="#333" stroke-width="3"/>
                <text x="100" y="165" font-size="14" font-weight="bold" fill="#333">${side1}</text>
                <text x="230" y="100" font-size="14" font-weight="bold" fill="#333">${side2}</text>
            </svg>
        `;
        return svg;
    }

    // Rhombus: all sides equal (like a diamond)
    generateRhombus() {
        const side = this.generateRandomNumber(4, 10);
        const color = this.generateRandomColor();
        const perimeter = side * 4;
        
        return {
            type: 'rhombus',
            sides: [side],
            perimeter: perimeter,
            svg: this.drawRhombus(side, color),
            label: `Rhombus with side length ${side} units`
        };
    }

    drawRhombus(side, color) {
        const svg = `
            <svg viewBox="0 0 250 250" width="250" height="250" class="svg-shape">
                <polygon points="125,40 200,125 125,210 50,125" 
                         fill="${color}" stroke="#333" stroke-width="3"/>
                <text x="125" y="130" font-size="16" font-weight="bold" 
                      text-anchor="middle" fill="#333">${side}</text>
            </svg>
        `;
        return svg;
    }

    // Composite shape: rectangle + triangle on top
    generateCompositeHouse() {
        const width = this.generateRandomNumber(4, 8);
        const rectHeight = this.generateRandomNumber(3, 7);
        const triangleHeight = this.generateRandomNumber(2, 5);
        const color = this.generateRandomColor();
        
        // Perimeter: bottom + 2 sides + 2 diagonal sides
        const diagonalSide = Math.sqrt((width/2) ** 2 + triangleHeight ** 2);
        const perimeter = width + (2 * rectHeight) + (2 * Math.ceil(diagonalSide));
        
        return {
            type: 'composite_house',
            sides: [width, rectHeight, Math.ceil(diagonalSide)],
            perimeter: perimeter,
            svg: this.drawCompositeHouse(width, rectHeight, triangleHeight, color),
            label: `House shape: base ${width}, height ${rectHeight}, roof slope ${Math.ceil(diagonalSide)} units`
        };
    }

    drawCompositeHouse(width, height, roofH, color) {
        const w = width * 20;
        const h = height * 15;
        const rh = roofH * 15;
        
        const svg = `
            <svg viewBox="0 0 280 300" width="280" height="300" class="svg-shape">
                <polygon points="40,100 40,${100+h} 220,${100+h} 220,100" 
                         fill="${color}" stroke="#333" stroke-width="3"/>
                <polygon points="40,100 130,${100-rh} 220,100" 
                         fill="${color}" stroke="#333" stroke-width="3"/>
                <text x="130" y="160" font-size="12" font-weight="bold" 
                      text-anchor="middle" fill="#333">${width}</text>
            </svg>
        `;
        return svg;
    }

    // Irregular polygon: custom sides
    generateIrregularPolygon() {
        const numSides = this.generateRandomNumber(5, 7);
        const sides = Array(numSides).fill(0).map(() => this.generateRandomNumber(3, 9));
        const color = this.generateRandomColor();
        const perimeter = sides.reduce((a, b) => a + b, 0);
        
        return {
            type: 'irregular',
            sides: sides,
            perimeter: perimeter,
            svg: this.drawIrregularPolygon(sides, color),
            label: `Irregular shape with sides ${sides.join(', ')} units`
        };
    }

    drawIrregularPolygon(sides, color) {
        const svg = `
            <svg viewBox="0 0 250 250" width="250" height="250" class="svg-shape">
                <polygon points="125,30 200,80 210,150 150,200 75,190 40,120" 
                         fill="${color}" stroke="#333" stroke-width="3"/>
                <text x="125" y="50" font-size="11" font-weight="bold" 
                      text-anchor="middle" fill="#333">${sides[0]}</text>
                <text x="200" y="100" font-size="11" font-weight="bold" fill="#333">${sides[1]}</text>
                <text x="210" y="160" font-size="11" font-weight="bold" fill="#333">${sides[2]}</text>
                <text x="140" y="200" font-size="11" font-weight="bold" fill="#333">${sides[3]}</text>
                <text x="60" y="190" font-size="11" font-weight="bold" fill="#333">${sides[4]}</text>
            </svg>
        `;
        return svg;
    }

    // Generate all 100 questions
    generateAllQuestions() {
        const shapeGenerators = [
            () => this.generateSquare(),
            () => this.generateRectangle(),
            () => this.generateTriangle(),
            () => this.generatePentagon(),
            () => this.generateHexagon(),
            () => this.generateOctagon(),
            () => this.generateParallelogram(),
            () => this.generateRhombus(),
            () => this.generateCompositeHouse(),
            () => this.generateIrregularPolygon()
        ];

        this.questions = [];
        
        // Generate 10 questions from each shape type (10 * 10 = 100)
        for (let i = 0; i < 10; i++) {
            shapeGenerators.forEach(generator => {
                this.questions.push(generator());
            });
        }

        // Shuffle questions
        this.questions = this.shuffle(this.questions);
        return this.questions;
    }

    shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}

// ==================== GAME STATE MANAGER ====================

class GameState {
    constructor() {
        this.studentName = '';
        this.studentAge = 0;
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.questions = [];
        this.startTime = null;
        this.currentAttempt = 0;
        this.isGameActive = false;
    }

    reset() {
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.currentAttempt = 0;
        this.isGameActive = true;
        this.startTime = Date.now();
    }

    getAccuracy() {
        const total = this.correctAnswers + this.incorrectAnswers;
        return total === 0 ? 0 : Math.round((this.correctAnswers / total) * 100);
    }

    getElapsedTime() {
        if (!this.startTime) return 0;
        return Math.floor((Date.now() - this.startTime) / 1000);
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    isGameComplete() {
        return this.currentQuestionIndex >= this.questions.length && this.isGameActive;
    }

    getCurrentQuestion() {
        if (this.currentQuestionIndex < this.questions.length) {
            return this.questions[this.currentQuestionIndex];
        }
        return null;
    }
}

// ==================== MAIN GAME CONTROLLER ====================

class MathPerimeterGame {
    constructor() {
        this.state = new GameState();
        this.generator = new ShapeQuestionGenerator();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.createFloatingShapes();
    }

    setupEventListeners() {
        // Landing screen
        const landingForm = document.getElementById('landingForm');
        landingForm.addEventListener('submit', (e) => this.handleStartGame(e));

        // Game screen
        const submitButton = document.getElementById('submitButton');
        submitButton.addEventListener('click', () => this.submitAnswer());

        const answerInput = document.getElementById('answerInput');
        answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.submitAnswer();
        });

        // Celebration screen
        const playAgainButton = document.getElementById('playAgainButton');
        playAgainButton.addEventListener('click', () => this.restartGame());
    }

    createFloatingShapes() {
        const floatingShapes = document.getElementById('floatingShapes');
        const shapeEmojis = ['🟠', '🟡', '🔵', '🟢', '🟣'];
        
        for (let i = 0; i < 5; i++) {
            const shape = document.createElement('div');
            shape.className = 'shape';
            shape.textContent = shapeEmojis[i];
            floatingShapes.appendChild(shape);
        }
    }

    handleStartGame(e) {
        e.preventDefault();

        const name = document.getElementById('studentName').value.trim();
        const age = parseInt(document.getElementById('studentAge').value);

        if (!name || !age) {
            alert('Please fill in both fields!');
            return;
        }

        this.state.studentName = name;
        this.state.studentAge = age;

        this.startGame();
    }

    startGame() {
        // Generate all questions
        this.state.questions = this.generator.generateAllQuestions();
        this.state.reset();

        // Hide landing screen, show game screen
        document.getElementById('landingScreen').classList.add('hidden');
        document.getElementById('gameScreen').classList.remove('hidden');
        document.getElementById('celebrationScreen').classList.add('hidden');

        // Load first question
        this.loadQuestion();
    }

    loadQuestion() {
        // Check if game is complete AFTER all questions are answered
        if (this.state.currentQuestionIndex >= 100 && this.state.isGameActive) {
            this.endGame();
            return;
        }

        const question = this.state.getCurrentQuestion();
        
        if (!question) {
            this.endGame();
            return;
        }

        this.state.currentAttempt = 0;

        // Update UI
        document.getElementById('questionLabel').textContent = 
            `Question ${this.state.currentQuestionIndex + 1} of 100`;
        document.getElementById('questionNumber').textContent = 
            `${this.state.currentQuestionIndex + 1} / 100`;
        document.getElementById('questionText').textContent = question.label;
        document.getElementById('shapeContainer').innerHTML = question.svg;
        document.getElementById('answerInput').value = '';
        document.getElementById('answerInput').classList.remove('error', 'success');
        document.getElementById('answerInput').disabled = false;
        document.getElementById('feedbackMessage').textContent = '';
        document.getElementById('feedbackMessage').classList.remove('success', 'error');

        // Update progress
        this.updateProgress();
        this.updateBamboo();

        // Focus on input
        document.getElementById('answerInput').focus();
    }

    submitAnswer() {
        // Prevent submission if game is not active
        if (!this.state.isGameActive) {
            return;
        }

        const input = document.getElementById('answerInput');
        const answer = parseInt(input.value);
        const question = this.state.getCurrentQuestion();

        if (!question) {
            return;
        }

        if (isNaN(answer)) {
            this.showFeedback('Please enter a valid number!', 'error');
            return;
        }

        this.state.currentAttempt++;

        if (answer === question.perimeter) {
            this.handleCorrectAnswer();
        } else {
            this.handleIncorrectAnswer(question);
        }
    }

    handleCorrectAnswer() {
        const input = document.getElementById('answerInput');

        this.state.correctAnswers++;
        input.classList.add('success');
        input.disabled = true;

        this.showFeedback('🎉 Correct! Great job!', 'success');
        this.createConfetti();
        this.playSuccessAnimation();

        setTimeout(() => {
            this.state.currentQuestionIndex++;
            this.loadQuestion();
        }, 2000);
    }

    handleIncorrectAnswer(question) {
        const input = document.getElementById('answerInput');

        input.classList.add('error');

        if (this.state.currentAttempt === 1) {
            this.showFeedback('❌ Not quite! Try again!', 'error');
            input.value = '';
            setTimeout(() => {
                input.classList.remove('error');
            }, 500);
        } else {
            this.state.incorrectAnswers++;
            input.disabled = true;
            this.showFeedback(
                `❌ The correct answer is ${question.perimeter}. Let's keep practicing!`,
                'error'
            );

            setTimeout(() => {
                this.state.currentQuestionIndex++;
                this.loadQuestion();
            }, 2500);
        }
    }

    showFeedback(message, type) {
        const feedbackDiv = document.getElementById('feedbackMessage');
        feedbackDiv.textContent = message;
        feedbackDiv.className = `feedback-message ${type}`;
    }

    updateProgress() {
        document.getElementById('questionsCompleted').textContent = 
            this.state.currentQuestionIndex;
        document.getElementById('correctAnswers').textContent = 
            this.state.correctAnswers;
        document.getElementById('incorrectAnswers').textContent = 
            this.state.incorrectAnswers;
        document.getElementById('accuracyPercentage').textContent = 
            `${this.state.getAccuracy()}%`;
    }

    updateBamboo() {
        const percentEaten = Math.floor(
            (this.state.currentQuestionIndex / 100) * 100
        );
        const bambooEaten = Math.floor(percentEaten / 10);
        const bambooRemaining = 10 - bambooEaten;

        let bambooDisplay = '';
        for (let i = 0; i < bambooRemaining; i++) {
            bambooDisplay += '🌿';
        }

        document.getElementById('bambooDisplay').textContent = 
            bambooDisplay || '🎉';
        document.getElementById('bambooProgress').textContent = 
            `Bamboo eaten: ${percentEaten}%`;
    }

    createConfetti() {
        const confettiPieces = 30;
        for (let i = 0; i < confettiPieces; i++) {
            const confetti = document.createElement('div');
            confetti.textContent = ['🎉', '⭐', '✨', '🌟', '💫'][Math.floor(Math.random() * 5)];
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-30px';
            confetti.style.fontSize = '24px';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '999';

            document.body.appendChild(confetti);

            const duration = Math.random() * 1.5 + 1;
            const xMove = (Math.random() - 0.5) * 200;

            confetti.animate([{
                transform: 'translateY(0) rotateZ(0deg)', opacity: 1
            },
            {
                transform: `translateY(${window.innerHeight}px) translateX(${xMove}px) rotateZ(360deg)`, opacity: 0
            }], {
                duration: duration * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => confetti.remove();
        }
    }

    playSuccessAnimation() {
        const panda = document.querySelector('.panda-display');
        panda.style.animation = 'none';
        setTimeout(() => {
            panda.animate([{
                transform: 'scale(1) rotate(0deg)'
            },
            {
                transform: 'scale(1.2) rotate(5deg)'
            },
            {
                transform: 'scale(1) rotate(0deg)'
            }], {
                duration: 500,
                easing: 'ease-in-out'
            });
        }, 10);
    }

    endGame() {
        // Mark game as inactive
        this.state.isGameActive = false;

        // Show celebration screen
        this.showCelebration();
    }

    showCelebration() {
        document.getElementById('gameScreen').classList.add('hidden');
        document.getElementById('celebrationScreen').classList.remove('hidden');

        const elapsedSeconds = this.state.getElapsedTime();
        const timeString = this.state.formatTime(elapsedSeconds);

        document.getElementById('celebrationTitle').textContent = 
            `🎉 Congratulations, ${this.state.studentName}! 🎉`;
        document.getElementById('celebrationMessage').textContent = 
            `You completed all 100 perimeter challenges! You worked so hard and should be proud of yourself. Keep practicing—you're becoming a Math Superstar! 🌟`;
        document.getElementById('finalCorrect').textContent = 
            this.state.correctAnswers;
        document.getElementById('finalWrong').textContent = 
            this.state.incorrectAnswers;
        document.getElementById('finalAccuracy').textContent = 
            `${this.state.getAccuracy()}%`;
        document.getElementById('finalTime').textContent = timeString;

        this.createCelebrationAnimation();
    }

    createCelebrationAnimation() {
        const confettiCount = 100;
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.textContent = ['🎉', '⭐', '✨', '🌟', '💫', '🎊'][Math.floor(Math.random() * 6)];
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * window.innerWidth + 'px';
                confetti.style.top = '-30px';
                confetti.style.fontSize = '32px';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '999';

                document.body.appendChild(confetti);

                const duration = Math.random() * 3 + 2;
                const xMove = (Math.random() - 0.5) * 400;

                confetti.animate([{
                    transform: 'translateY(0) rotateZ(0deg)', opacity: 1
                },
                {
                    transform: `translateY(${window.innerHeight}px) translateX(${xMove}px) rotateZ(720deg)`, opacity: 0
                }], {
                    duration: duration * 1000,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }).onfinish = () => confetti.remove();
            }, i * 50);
        }
    }

    restartGame() {
        document.getElementById('celebrationScreen').classList.add('hidden');
        document.getElementById('landingScreen').classList.remove('hidden');
        document.getElementById('gameScreen').classList.add('hidden');

        document.getElementById('studentName').value = '';
        document.getElementById('studentAge').value = '';
        document.getElementById('studentName').focus();
    }
}

// ==================== INITIALIZE GAME ====================

document.addEventListener('DOMContentLoaded', () => {
    const game = new MathPerimeterGame();
});
