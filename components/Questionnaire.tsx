'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const questions = [
  { id: 1, q: "Какой у вас текущий уровень английского языка?", type: "radio", options: ["A0 (новичок)", "A1", "A2", "B1", "B2", "C1+", "Не знаю"] },
  { id: 2, q: "Для чего вы хотите изучать английский?", type: "radio", options: ["Для работы/карьеры", "Для путешествий", "Подготовка к экзамену", "Для общения и хобби", "Переезд за границу"] },
  { id: 3, q: "Сколько времени в неделю вы можете уделять занятиям?", type: "radio", options: ["1-2 часа", "2-4 часов", "Более 4 часов"] },
  { id: 4, q: "Был ли у вас опыт изучения английского ранее?", type: "radio", options: ["Нет", "Меньше 1 года", "1-3 года", "Более 3 лет"] },
  { id: 5, q: "В какое время вам удобно заниматься?", type: "radio", options: ["Утро (9-12)", "День (12-17)", "Вечер (17-21)", "Не важно"] },
  { id: 6, q: "Что для вас самое важное в обучении?", type: "radio", options: ["Разговорная практика", "Грамматика", "Подготовка к экзаменам", "Бизнес-английский"] },
];

interface Props {
  onComplete: (answers: Record<string, string>) => void;
}

export default function Questionnaire({ onComplete }: Props) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const current = questions[step];

  const handleSelect = (value: string) => {
    setAnswers(prev => ({ ...prev, [current.id]: value }));
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      onComplete(answers);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="mb-10">
        <div className="flex justify-between text-sm mb-3">
          <span>Шаг {step + 1} из {questions.length}</span>
          <span className="text-primary font-medium">{Math.round(((step + 1) / questions.length) * 100)}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-primary transition-all" style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-dark mb-10">{current.q}</h2>

      <div className="space-y-4">
        {current.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleSelect(opt)}
            className="w-full text-left px-8 py-6 border-2 border-gray-200 hover:border-primary rounded-3xl text-xl transition-all hover:shadow-md"
          >
            {opt}
          </button>
        ))}
      </div>

      {step > 0 && (
        <button onClick={() => setStep(step - 1)} className="mt-8 flex items-center gap-2 text-gray-500 hover:text-dark">
          <ChevronLeft size={20} /> Назад
        </button>
      )}
    </div>
  );
}