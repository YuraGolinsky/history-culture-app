// src/components/Quiz.tsx
import React, { useState } from 'react';
import './Quiz.css';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    question: 'Як називається основна сторінка додатка?',
    options: ['Головна', 'Епохи', 'Країни', 'Видатні постаті'],
    correctAnswer: 'Головна'
  },
  {
    question: 'Яка кнопка відкриває модальне вікно для входу?',
    options: ['Вхід', 'Реєстрація', 'Події', 'Мистецтво'],
    correctAnswer: 'Вхід'
  },
  {
    question: 'Де можна дізнатися про видатних постатей?',
    options: ['Епохи', 'Країни', 'Видатні постаті', 'Мистецтво'],
    correctAnswer: 'Видатні постаті'
  },
  {
    question: 'Що відображається на картинці привітання?',
    options: ['Логотип', 'Історична подія', 'Країна', 'Видатна постать'],
    correctAnswer: 'Історична подія'
  },
  {
    question: 'Як називається сторінка з інформацією про країни?',
    options: ['Епохи', 'Країни', 'Події', 'Мистецтво'],
    correctAnswer: 'Країни'
  }
];

const Quiz: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));
  const [showResult, setShowResult] = useState(false);
  const [comments, setComments] = useState<string>('');
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);

  const handleAnswerChange = (index: number, value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const calculateResults = () => {
    let correctAnswers = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        correctAnswers += 1;
      }
    });
    return correctAnswers;
  };

  const handleSubmitFeedback = () => {
    console.log('Feedback submitted:', comments);
    setFeedbackSent(true);
  };

  return (
    <div className="quiz-modal">
      <div className="quiz-content">
        <button className="close-quiz" onClick={onClose}>×</button>
        <h2>Тест про сайт та історію</h2>
        {questions.map((q, index) => (
          <div key={index} className="quiz-question">
            <p>{q.question}</p>
            {q.options.map((option, optionIndex) => (
              <div key={optionIndex} className="quiz-option">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  onChange={() => handleAnswerChange(index, option)}
                  checked={answers[index] === option}
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        ))}
        <button onClick={handleSubmit} className="submit-quiz">Підтвердити</button>
        {showResult && (
          <div className="quiz-result">
            <h3>Результати</h3>
            <p>Вірно відповіді: {calculateResults()} з {questions.length}</p>
            <textarea
              placeholder="Ваш відгук про тест..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="feedback-textarea"
            />
            <button onClick={handleSubmitFeedback} className="submit-feedback">
              Відправити відгук
            </button>
            {feedbackSent && <p className="feedback-thankyou">Дякуємо за ваш відгук!</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
