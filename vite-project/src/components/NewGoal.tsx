import {useRef, type FormEvent } from "react";


type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
}

const NewGoal = ({onAddGoal}: NewGoalProps) => {

  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // new FormData(event.currentTarget)

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);


    console.log('submit')
  }



  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input id='goal' type='text' ref={goal} />
      </p>
      <p>
        <label htmlFor='summary'>Short summary</label>
        <input id='summary' type='text' ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  )
}
export default NewGoal;