# SpinToDecide

SpinToDecide is an interactive decision-making wheel that allows you to input a list of options and randomly select one by spinning the wheel. Whether you're deciding on where to eat, what movie to watch, or simply making a fun choice, SpinToDecide brings a playful twist to decision making.

## Features

- **Dynamic Options:** Accepts 2 to 36 (or more) user-defined options.
- **Fair Randomness:** Utilizes a random and fair algorithm to land on a single option.
- **Smooth Animation:** Visually engaging wheel spinning animation.
- **Responsive Design:** Clean and modern frontend design that works on any device.
- **GitHub Pages Ready:** Entirely built to run on GitHub Pages with no backend required.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- A GitHub account (for hosting via GitHub Pages)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/SpinToDecide.git

2.	Open the Project:
    •	You can directly open index.html in your browser.
    •	Alternatively, once completed, it will be made public using GitHub Pages.

Usage
	1.	Enter your options in the textarea (separate each option with a comma).
	2.	Click Set Options to generate the wheel.
	3.	Click Spin to spin the wheel.
	4.	Watch the wheel spin and see the result displayed once it stops.
	5.	Click Reset to clear the options and start over.

How It Works
	•	Canvas Drawing: The wheel is drawn on an HTML5 canvas with segments proportional to the number of options.
	•	Animation: The spinning animation uses requestAnimationFrame and an ease-out effect for a smooth deceleration.
	•	Result Calculation: Once the wheel stops, the segment at the top (pointing position) is calculated and displayed as the result.

Contributing

Contributions are welcome! If you have ideas or improvements, please open an issue or submit a pull request.

License

This project is licensed under the MIT License.