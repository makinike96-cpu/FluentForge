'use client';
import { useState } from 'react';
import Questionnaire from '@/components/Questionnaire';
import ContactForm from '@/components/ContactForm';
import ThankYou from '@/components/ThankYou';

export default function Home() {
  const [step, setStep] = useState<'hero' | 'quiz' | 'contact' | 'thankyou'>('hero');
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const startQuiz = () => setStep('quiz');

  const handleQuizComplete = (ans: Record<string, string>) => {
    setAnswers(ans);
    setStep('contact');
  };

  const handleSubmitSuccess = () => setStep('thankyou');

  return (
    <div className="max-w-5xl mx-auto px-6">
      {step === 'hero' && (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
          <h1 className="text-7xl font-bold leading-tight mb-6">Изучай английский.<br />Эффективно.</h1>
          <p className="text-3xl text-gray-600 mb-12 max-w-2xl">Пройди короткий опрос — получи персональную программу и бесплатный пробный урок</p>
          <button onClick={startQuiz} className="btn-primary text-2xl px-16 py-6">Начать опрос</button>
        </div>
      )}

      {step === 'quiz' && <Questionnaire onComplete={handleQuizComplete} />}
      {step === 'contact' && <ContactForm answers={answers} onSuccess={handleSubmitSuccess} />}
      {step === 'thankyou' && <ThankYou />}
    </div>
  );
}