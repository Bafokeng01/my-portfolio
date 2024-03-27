function updateSkillLevel() {
    // Get the values of all skill range inputs
    const htmlValue = document.getElementById('html').value;
    const cssValue = document.getElementById('css').value;
    const javaScriptValue = document.getElementById('JavaScript').value;
    // Add logic to incorporate other skill inputs

    // Calculate the average skill level (replace with your desired calculation)
    const averageSkill = (Number(htmlValue) + Number(cssValue)) + Number(javaScriptValue)/ 2;

    // Define skill level labels based on the average skill
    let skillLevel;
    if (averageSkill < 30) {
      skillLevel = "Beginner";
    } else if (averageSkill < 70) {
      skillLevel = "Intermediate";
    } else {
      skillLevel = "Advanced";
    }

    // Update the displayed skill level
    document.getElementById('skill-level').textContent = skillLevel;
  }


// calculator javascript
