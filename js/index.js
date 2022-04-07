// Required abilities of a calculator:
// Accept user inputs of number, operator, and another number
// Should accept decimal numbers
// Store inputs
// Recognize inputs and perform calculations
// Return a result

// Optional features:
// Should accept longer arithmetic operations
// Display all input as it is being entered
// Store previous total as start of next operation
// Clear button should clear all entries
// Should prevent invalid inputs (operators next to each other, two decimal points, )

const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if (!target.matches('button')){
            return;
        } else {
            calculator.parseInput(value)
            //console.log(value)
        }
    });

const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value) {
        // Have any of the "special buttons" been clicked
        switch (value) {
            case '=' :
                // Calculate the answer
                break;
            case 'AC' :
                // Clear screen and stored values
                break;
            case '.' :
                if (this.displayText == 0) {
                    this.addText('0.')
                } else {
                    this.addText(value)
                }
                break;
            default:
                this.addText(value)
                break;
        }

        },

        addText(value) {
            if (this.displayText === '0') {
                this.displayText = ''
            }  else if (this.prevTotal !== null) {
                this.displayText = this.prevTotal
                this.prevTotal = null
            }
            if (isNaN(+(value)) && isNaN(+(this.displayText))) {
                if(isNaN(this.displayText.slice(-1))){
                    return;
                }
            }
            this.displayText += value
            this.outputText(this.displayText)

        },

        outputText(text) {
            document.querySelector('.calculator-screen').value = text
        }
}