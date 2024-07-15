const story = {
  start: {
    text: "You wake up in a dark forest. What do you do?",
    choices: ["Look around", "Stay still"],
    consequence: ["lookAround", "stayStill"],
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  lookAround: {
    text: "You see a path leading out of the forest. Do you take it?",
    choices: ["Yes", "No"],
    consequence: ["takePath", "stayInForest"],
    image:
      "https://plus.unsplash.com/premium_photo-1668618511940-924a74bd1283?q=80&w=2921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  stayStill: {
    text: "You hear rustling nearby. Do you investigate?",
    choices: ["Yes", "No"],
    consequence: ["investigate", "wait"],
    image:
      "https://images.unsplash.com/photo-1641429404426-09090b2187cd?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  takePath: {
    text: "You follow the path and find a small village. Do you enter?",
    choices: ["Enter the village", "Turn back"],
    consequence: ["enterVillage", "turnBack"],
    image:
      "https://plus.unsplash.com/premium_photo-1661962862470-a03bcc2fb415?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  stayInForest: {
    text: "You stay in the forest and soon realize you are lost. The end.",
    choices: ["Restart"],
    consequence: ["start"],
    image:
      "https://images.unsplash.com/photo-1469199667817-594accd1bdc1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  investigate: {
    text: "You find a friendly fox. It leads you to a hidden path. Do you follow?",
    choices: ["Follow the fox", "Ignore the fox"],
    consequence: ["followFox", "ignoreFox"],
    image:
      "https://plus.unsplash.com/premium_photo-1664298390980-db072565cf61?q=80&w=3005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  wait: {
    text: "You wait patiently and nothing happens. The end.",
    choices: ["Restart"],
    consequence: ["start"],
    image:
      "https://plus.unsplash.com/premium_photo-1661765961176-95e74df91e3c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  enterVillage: {
    text: "The villagers welcome you and offer you shelter. Do you explore the village?",
    choices: ["Explore", "Stay in Shelter"],
    consequence: ["exploreVillage", "stayVillage"],
    image:
      "https://images.unsplash.com/photo-1533745848184-3db07256e163?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  turnBack: {
    text: "You turn back and get lost in the forest. The end.",
    choices: ["Restart"],
    consequence: ["start"],
    image:
      "https://plus.unsplash.com/premium_photo-1669741909511-9146678d990f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  followFox: {
    text: "The fox leads you to a hidden treasure. The end.",
    choices: ["Restart"],
    consequence: ["start"],
    image:
      "https://images.unsplash.com/photo-1691404819847-dab7d769aca7?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  ignoreFox: {
    text: "You ignore the fox and wander aimlessly. The end.",
    choices: ["Restart"],
    consequence: ["start"],
    image:
      "https://images.unsplash.com/photo-1591457217849-d6ec46eceb76?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  exploreVillage: {
    text: "In the village, you discover a map to a hidden cave. Do you follow it?",
    choices: ["Yes", "No"],
    consequence: ["findCave", "stayVillage"],
    image:
      "https://images.unsplash.com/photo-1488628176578-4ffd5fdbc900?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  findCave: {
    text: "You find the hidden cave and discover ancient artifacts. The end.",
    choices: ["Restart"],
    consequence: ["start"],
    image:
      "https://plus.unsplash.com/premium_photo-1670619666485-c13a485eea65?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  stayVillage: {
    text: "You decide to stay in the village and live a peaceful life. The end.",
    choices: ["Restart"],
    consequence: ["start"],
    image:
      "https://plus.unsplash.com/premium_photo-1667126444822-94fb21279436?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  escapeForest: {
    text: "You find a way out of the forest and return home safely. The end.",
    choices: ["Restart"],
    consequence: ["start"],
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  climbTree: {
    text: "You climb a tree to get a better view and spot a rescue team. The end.",
    choices: ["Restart"],
    consequence: ["start"],
    image:
      "https://plus.unsplash.com/premium_photo-1664302712094-90f79c34d6a5?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  buildShelter: {
    text: "You build a shelter and survive until help arrives. The end.",
    choices: ["Restart"],
    consequence: ["start"],
    image:
      "https://plus.unsplash.com/premium_photo-1688069974470-0ed2f4c061ec?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  findRiver: {
    text: "You find a river and follow it to civilization. The end.",
    choices: ["Restart"],
    consequence: ["start"],
    image:
      "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  stayInShelter: {
    text: "You stay in the shelter and eventually the villagers help you return home. The end.",
    choices: ["Restart"],
    consequence: ["start"],
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

let currentStage = story.start;

function startGame() {
  currentStage = story.start;
  updatePage();
}

function updatePage() {
  document.getElementById("story").innerHTML = currentStage.text;
  document.getElementById(
    "image"
  ).innerHTML = `<img src="${currentStage.image}" alt="Story Image" height="500px" width="500px">`;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  currentStage.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => {
      currentStage = story[currentStage.consequence[index]];
      if (
        currentStage.choices.length === 1 &&
        currentStage.choices[0] === "Restart"
      ) {
        endGame();
      } else {
        updatePage();
      }
    });
    choicesDiv.appendChild(button);
  });
}

function endGame() {
  document.getElementById("story").innerHTML = currentStage.text;
  document.getElementById(
    "image"
  ).innerHTML = `<img src="${currentStage.image}" alt="Ending Image" height="500px" width="500px">`;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart";
  restartButton.addEventListener("click", () => {
    startGame();
  });
  choicesDiv.appendChild(restartButton);
}

startGame();
