import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz()

  return (
    <div>
      <h2>Welcome To The React Quiz!</h2>
      <p>{numQuestions} questions to test your React mastery</p>
      <button className="btn btn-ui" onClick={()=> dispatch({type: 'start'})}>Let's start</button>
    </div>
  );
}

export default StartScreen;
