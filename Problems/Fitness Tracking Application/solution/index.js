import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {
    this.progress += exercise.caloriesBurned;

    if (this.progress >= this.goal) {
      // If the goal is reached, emit the 'goalReached' event
      this.emit("goalReached");
    }
  }
}

const Solution = () => {
  const tracker = new FitnessTracker();

  // Define a listener that sends a congratulatory message to the user upon reaching their fitness goal
  const congratulatoryMessageListener = () => {
    console.log("Congratulations! You have reached your fitness goal");
    // You can also send a message to the user using your preferred method (e.g., notifications, emails, etc.)
  };

  // Set up the listener for the 'goalReached' event
  tracker.on("goalReached", congratulatoryMessageListener);

  // Simulate adding exercise
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
};

Solution();

export { FitnessTracker, Solution };
