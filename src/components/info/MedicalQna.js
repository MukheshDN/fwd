import React from 'react';
import './MedicalQna.css';

const MedicalQnA = () => {
  const questionsAndAnswers = [
    {
      question: "What is the role of insulin in the body?",
      answer: "Insulin is a hormone produced by the pancreas that helps cells absorb glucose from the bloodstream for energy. It plays a vital role in regulating blood sugar levels and preventing hyperglycemia (high blood sugar) or hypoglycemia (low blood sugar)."
    },
    {
      question: "What is prediabetes, and can it be reversed?",
      answer: "Prediabetes is a condition where blood sugar levels are higher than normal but not yet high enough to be classified as Type 2 diabetes. It can often be reversed with lifestyle changes such as healthy eating, regular exercise, and weight loss."
    },
    {
      question: "What is the difference between Type 1 and Type 2 diabetes?",
      answer: (
        <>
          <strong>Type 1 Diabetes:</strong> An autoimmune disease where the immune system destroys insulin-producing cells in the pancreas. It requires insulin therapy.
          <br />
          <strong>Type 2 Diabetes:</strong> A metabolic disorder where the body becomes resistant to insulin or doesn't produce enough insulin. It is often linked to lifestyle factors and may be managed with diet, exercise, oral medications, and insulin.
        </>
      ),
      
    },
    {
      question: "Why is blood sugar monitoring important?",
      answer: (
        <>
          Monitoring helps you:
          <ul>
            <li>Prevent complications.</li>
            <li>Adjust your diet, medications, or insulin doses.</li>
            <li>Recognize and address hypo- or hyperglycemia early.</li>
          </ul>
        </>
      )
    },
    {
        question: "Can people with diabetes eat sweets?",
        answer: "Yes, but sweets should be consumed in moderation and as part of a balanced diet. It's important to monitor carbohydrate intake and pair sweets with proteins or healthy fats to reduce blood sugar spikes."
      },
      {
        question: "How does exercise affect blood sugar levels?",
        answer: (
          <>
            Exercise helps:
            <ul>
              <li>Lower blood sugar by increasing glucose uptake by muscles.</li>
              <li>Improve insulin sensitivity.</li>
            </ul>
            However, it can also cause hypoglycemia, so it's essential to monitor blood sugar before and after activity.
          </>
        )
      },
      {
        question: "Are all diabetic patients required to take insulin?",
        answer: "No. Insulin is mandatory for Type 1 diabetes. For Type 2 diabetes, insulin is used only when oral medications and lifestyle changes are insufficient to control blood sugar."
      },
      {
        question: "How is diabetes different from hypoglycemia?",
        answer: (
          <>
            <strong>Diabetes:</strong> A chronic condition where blood sugar levels are persistently high.
            <br />
            <strong>Hypoglycemia:</strong> A temporary condition where blood sugar levels drop too low, often due to excessive insulin or missed meals.
          </>
        )
      },
      {
        question: "Can alcohol affect blood sugar levels?",
        answer: (
          <>
            Yes, alcohol can cause fluctuations in blood sugar:
            <ul>
              <li><strong>Short-term:</strong> Can lower blood sugar and lead to hypoglycemia.</li>
              <li><strong>Long-term:</strong> Excessive drinking may contribute to insulin resistance and worsen diabetes management.</li>
            </ul>
          </>
        )
      },
      {
        question: "What is an HbA1c test, and why is it important?",
        answer: "The HbA1c test measures the average blood sugar levels over the past 2–3 months. It provides a long-term view of blood sugar control and is a key indicator for diagnosing and managing diabetes."
      },
      {
        question: "What is the dawn phenomenon in diabetes?",
        answer: "The dawn phenomenon refers to early morning rises in blood sugar levels, caused by hormonal changes. It is common in diabetes and can be managed with adjustments to insulin or medication."
      },
      {
        question: "Is it safe to fast if I have diabetes?",
        answer: "Fasting can be safe for some people with diabetes, but it requires careful planning and medical supervision. Blood sugar levels need close monitoring to prevent hypo- or hyperglycemia."
      },
      {
        question: "Can diabetes cause weight loss?",
        answer: "Yes, especially in uncontrolled Type 1 diabetes or severe Type 2 diabetes. When the body can't use glucose for energy, it breaks down fat and muscle, leading to unintentional weight loss."
      },
      {
        question: "What is a diabetic foot, and how can I prevent it?",
        answer: (
          <>
            A diabetic foot results from poor circulation or nerve damage (neuropathy), leading to ulcers or infections. Prevention includes:
            <ul>
              <li>Daily foot inspection.</li>
              <li>Wearing proper footwear.</li>
              <li>Keeping feet clean and moisturized.</li>
              <li>Regular check-ups with a podiatrist.</li>
            </ul>
          </>
        )
      },
      {
        question: "Can diabetes affect sexual health?",
        answer: (
          <>
            Yes, diabetes can lead to:
            <ul>
              <li>Erectile dysfunction in men due to nerve and blood vessel damage.</li>
              <li>Decreased libido or arousal in women due to hormonal imbalances or poor circulation.</li>
            </ul>
          </>
        )
      },
    // Add more Q&A as needed...
  ];

  return (
    <div className="medical-qna-container">
      <h1 className="qna-header">Medical Q&A</h1>
      <div className="qna-list">
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="qna-item">
            <h2 className="qna-question">{item.question}</h2>
            <p className="qna-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalQnA;
