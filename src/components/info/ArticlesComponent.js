// ArticlesComponent.js
import React from 'react';
import './ArticlesComponent.css';

const articles = [
  {
    title: 'Meal Planning for Diabetics',
    image: 'MealPlanning.jpg',
    content: `Meal planning is a cornerstone of effective diabetes management. With a structured plan, individuals can avoid sudden blood sugar spikes and maintain steady energy levels throughout the day.
      
      One practical method is the plate method. Divide your plate into sections: fill half with non-starchy vegetables such as broccoli, spinach, zucchini, or cauliflower. These vegetables are low in carbohydrates and high in nutrients. One-quarter of the plate should contain lean protein sources, like grilled chicken, fish, tofu, or eggs. The remaining quarter is reserved for complex carbohydrates, such as quinoa, brown rice, or sweet potatoes, which release sugar slowly into the bloodstream.
      
      Healthy fats, such as a drizzle of olive oil, a handful of nuts, or slices of avocado, can be added in moderation. These fats enhance the flavor of meals while supporting heart health. Incorporating spices and herbs instead of salt can make dishes flavorful without raising blood pressure.
      
      Another critical aspect is meal timing. Eating smaller, balanced meals at regular intervals helps maintain blood sugar levels and prevents extreme highs and lows. Skipping meals or overeating can destabilize glucose levels and should be avoided.
      
      Meal prep is an excellent strategy for busy individuals. Preparing meals in advance allows better portion control and reduces the temptation to choose less healthy options when time is limited. Consider creating a weekly menu, shopping for fresh ingredients, and preparing meals in batches to simplify your routine and ensure consistency in your diabetes care.`
  },
  // Add 8 more articles here with title, image, and content
  {
    title: 'Diabetes-Friendly Workouts',
    image: 'Workout.jpg',
    content: `Regular physical activity is one of the most effective ways to manage diabetes. Exercise helps lower blood sugar levels by improving insulin sensitivity and increasing glucose uptake by muscles. Choosing the right types of workouts ensures both safety and effectiveness.
  
      Low-impact aerobic exercises, such as walking, swimming, and cycling, are excellent options for beginners. These activities are gentle on the joints and provide steady cardiovascular benefits. Aim for at least 30 minutes of moderate activity most days of the week.
  
      Strength training, which includes resistance exercises like weightlifting or bodyweight exercises (push-ups, squats), helps build muscle mass. Increased muscle improves glucose utilization and supports metabolic health. Engage in strength training sessions 2-3 times a week.
  
      Yoga and tai chi offer additional benefits by combining physical movement with stress reduction. These practices improve flexibility, balance, and mental well-being while aiding blood sugar control. High-intensity interval training (HIIT) can be an effective choice for those who prefer shorter, more vigorous workouts, but it’s crucial to consult a healthcare provider before starting.
  
      Before exercising, monitor your blood sugar levels to ensure they’re within a safe range. Carry a snack in case of hypoglycemia and stay hydrated. Consistency is key—regular, enjoyable exercise is a cornerstone of effective diabetes management.`
  },
  {
    title: 'Recognizing Early Signs of Diabetic Complications',
    image: 'EarlyRecongnization.jpg',
    content: `Recognizing the early signs of diabetic complications allows for timely intervention and better outcomes. Prolonged high blood sugar levels can lead to nerve damage, kidney issues, and vision problems, among other complications.
  
      One common complication is neuropathy, or nerve damage, which often begins in the feet. Symptoms include tingling, numbness, burning sensations, or pain. If left untreated, neuropathy can lead to serious infections and even amputation.
  
      Diabetic retinopathy affects the eyes and may initially present as blurred vision, difficulty seeing at night, or floating spots. Regular eye exams are crucial to catch and treat this condition early, preventing severe vision loss.
  
      Kidney damage, or nephropathy, can manifest as swelling in the legs, fatigue, or changes in urination. Early detection through urine tests can help manage this complication and prevent progression to kidney failure.
  
      Slow-healing wounds, especially on the feet, can indicate poor circulation and increased risk of infection. Regularly inspecting your feet for cuts, sores, or swelling and keeping them clean and moisturized can help prevent infections.
  
      Monitoring and reporting any unusual symptoms to your healthcare provider promptly ensures early diagnosis and effective treatment of complications, safeguarding your health.`
  },
  {
    title: 'Foods to Avoid: What Spikes Blood Sugar?',
    image: 'AvoidFood.jpg',
    content: `For individuals with diabetes, certain foods can cause rapid blood sugar spikes, making them detrimental to effective glucose management. Understanding these foods and minimizing their consumption is key to maintaining stable blood sugar levels.
  
      Refined carbohydrates, such as white bread, white rice, pastries, and sugary cereals, are quickly broken down into glucose, leading to sudden spikes in blood sugar. These foods lack fiber, which slows sugar absorption. Instead, choose whole-grain alternatives like brown rice, quinoa, or whole-wheat bread.
  
      Sugary beverages like soda, energy drinks, and sweetened coffee or tea are particularly harmful. They deliver concentrated doses of sugar with minimal nutritional value. Replacing these with water, unsweetened tea, or black coffee can significantly improve blood sugar control.
  
      Packaged snacks such as chips, crackers, and cookies often contain refined flour, trans fats, and high levels of sodium. These can contribute to insulin resistance and heart disease—common complications in diabetics. Look for snacks like raw vegetables, hummus, or unsalted nuts for healthier options.
  
      Fried foods and fast foods, laden with unhealthy fats and excessive calories, impair insulin sensitivity and contribute to weight gain. Alcohol, especially when consumed in excess, can destabilize blood sugar levels, leading to hypoglycemia or hyperglycemia depending on the situation.
  
      Avoiding these high-risk foods and choosing nutrient-dense alternatives can make a significant difference in long-term diabetes management and overall health.`
  },
  {
    title: 'The Importance of Sleep for Blood Sugar Control',
    image: 'Sleep.jpg',
    content: `Sleep plays a pivotal role in overall health, and its impact on diabetes management is often underestimated. Poor sleep quality or insufficient sleep can disrupt the body’s hormonal balance, leading to higher blood sugar levels and decreased insulin sensitivity.
  
      When you don’t get enough sleep, the stress hormone cortisol increases. Elevated cortisol levels can interfere with glucose metabolism and make it harder for the body to process sugar efficiently. Additionally, sleep deprivation can increase cravings for high-sugar and high-carbohydrate foods, exacerbating blood sugar control issues.
  
      To improve sleep quality, it’s essential to establish a consistent sleep schedule. Aim for 7-8 hours of sleep each night and try to go to bed and wake up at the same time daily. Create a bedtime routine that signals to your body that it’s time to wind down, such as reading, meditating, or taking a warm bath.
  
      Limiting caffeine and heavy meals in the evening can also promote better sleep. Ensure your bedroom environment is conducive to rest—keep it dark, quiet, and at a comfortable temperature. Avoiding screens an hour before bedtime can reduce exposure to blue light, which interferes with the production of melatonin, the sleep hormone.
  
      By prioritizing good sleep hygiene, diabetics can enhance their overall health and improve blood sugar regulation, reducing the risk of complications.`
  },
  {
    title: 'The Latest Advances in Diabetes Treatment',
    image: 'advanceTecnology.jpg',
    content: `The field of diabetes treatment is rapidly evolving, offering new hope and improved management options for individuals living with this condition. Innovations in technology and medicine are making diabetes care more effective and less invasive.
  
      Continuous glucose monitors (CGMs) are revolutionizing blood sugar tracking by providing real-time data without the need for frequent finger pricks. These devices sync with smartphones, allowing users to monitor trends and make informed decisions about their care. Insulin pumps, often integrated with CGMs, deliver precise doses of insulin automatically, mimicking the body’s natural processes.
  
      New medications, such as GLP-1 receptor agonists and SGLT2 inhibitors, offer enhanced blood sugar control along with additional benefits like weight loss and reduced cardiovascular risk. These drugs target different pathways in the body to improve overall health outcomes.
  
      Research into artificial pancreas systems, which combine CGMs and insulin pumps with advanced algorithms, is showing promise. These systems can automatically adjust insulin delivery based on blood sugar levels, reducing the burden of manual management.
  
      Gene therapy and stem cell research are paving the way for potential cures. Trials exploring beta cell regeneration and immune system modulation hold the promise of addressing the root causes of diabetes.
  
      Staying informed about these advancements empowers individuals to make the best choices for their diabetes care and improves overall quality of life.`
  }
  
  
  
  
  
];

const ArticlesComponent = () => {
  return (
    <div className="articles-container">
      <h1 className="articles-title">Health Articles</h1>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <img 
              src={article.image} 
              alt={article.title} 
              className="article-image" 
            />
            <h2 className="article-title">{article.title}</h2>
            <p className="article-content">{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesComponent;