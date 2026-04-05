






import { useLocation } from "react-router-dom";

function ResultPage() {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return <h2>No data found</h2>;
  }

  const { age, weight, height, goal } = data;

  const h = height / 100;
  const bmi = (weight / (h * h)).toFixed(1);

 let category = "";

if (bmi < 18.5) category = "Underweight";
else if (bmi < 25) category = "Normal";
else category = "Overweight";

let extraTip = "";

if (bmi < 18.5) extraTip = "Increase calorie intake and eat more frequently.";
else if (bmi > 25) extraTip = "Focus on low-calorie foods and regular exercise.";
else extraTip = "Maintain your current healthy lifestyle.";


  const generateAIPlan = () => {
    const breakfast = ["Oats", "Poha", "Eggs", "Smoothie", "Upma"];
    const lunch = ["Rice + dal", "Roti + sabzi", "Paneer", "Khichdi"];
    const snacks = ["Fruits", "Nuts", "Yogurt", "Sprouts"];
    const dinner = ["Soup", "Salad", "Light roti", "Khichdi"];

    function random(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    
    return {
      breakfast: random(breakfast),
      lunch: random(lunch),
      snacks: random(snacks),
      dinner: random(dinner),
    };
  };

  const plan = generateAIPlan();

  return (
  <div style={{
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:"url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative"
  }}>

    {/* Overlay */}
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)"
    }}></div>
      
    <div style={{
      position: "relative",
      background: "rgba(255,255,255,0.95)",
      padding: "30px",
      borderRadius: "15px",
      width: "350px",
      textAlign: "center",
      boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      zIndex: 1
    }}>

      <h2>Your Diet Plan 🍱</h2>

      <p><b>Age:</b> {age}</p>
      <p><b>BMI:</b> {bmi}</p>
      <p><b>Category:</b> {category}</p>
      <h3 style={{ marginTop: "15px" }}>AI Generated Plan 🤖</h3>

     <p>🌅 <b>Breakfast:</b> {plan.breakfast}</p>
     <p>🍛 <b>Lunch:</b> {plan.lunch}</p>
     <p>🍎 <b>Snacks:</b> {plan.snacks}</p>
     <p>🌙 <b>Dinner:</b> {plan.dinner}</p>
      <p><b>💡 Extra Tip:</b> {extraTip}</p>

      <button 
        onClick={() => window.location.reload()} 
        style={{
          marginTop: "15px",
          padding: "8px 15px",
          borderRadius: "8px",
          border: "none",
          background: "#4CAF50",
          color: "white",
          cursor: "pointer"
        }}
      >
        Generate New Plan 🔄
      </button>

    </div>
  </div>
);

}

export default ResultPage;













// import { useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";

// function ResultPage() {
//   const location = useLocation();
//   const data = location.state;
//   const [aiText, setAiText] = useState("");

//   if (!data) {
//     return <h2>No data received. Go back and fill the form.</h2>;
//   }

//   const { age, weight, height, goal } = data;

//   const h = Number(height) / 100;
//   const bmi = (Number(weight) / (h * h)).toFixed(1);

// const generateAIPlan = (goal, bmi) => {
//   const breakfastOptions = [
//     "Oats with fruits",
//     "Poha with peanuts",
//     "Eggs with toast",
//     "Smoothie bowl",
//     "Upma with vegetables"
//   ];

//   const lunchOptions = [
//     "Rice + dal + salad",
//     "Chapati + sabzi + curd",
//     "Paneer curry with roti",
//     "Vegetable khichdi",
//     "Grilled chicken + rice"
//   ];

//   const snacksOptions = [
//     "Fruits + nuts",
//     "Sprouts salad",
//     "Yogurt with seeds",
//     "Banana shake",
//     "Roasted chana"
//   ];

//   const dinnerOptions = [
//     "Vegetable soup",
//     "Light khichdi",
//     "Salad + soup",
//     "Chapati + sabzi",
//     "Grilled paneer"
//   ];

//   function random(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
//   }

//   return {
//     title: "Your AI Diet Plan 🤖",
//     breakfast: random(breakfastOptions),
//     lunch: random(lunchOptions),
//     snacks: random(snacksOptions),
//     dinner: random(dinnerOptions),
//     tip: goal === "loss"
//       ? "Maintain calorie deficit & stay active"
//       : goal === "gain"
//       ? "Increase protein intake"
//       : "Maintain balanced diet"
//   };
// };

// useEffect(() => {
//   setAiText("Thinking... 🤖");

//   setTimeout(() => {
//     setAiText(generateAIPlan(goal, bmi));
//   }, 1500);
// }, []);

//   return (

    
// <div style={{
//   minHeight: "90vh",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   backgroundImage: "url('https://images.unsplash.com/photo-1498837167922-ddd27525d352')",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   position: "relative"
// }}>

//   {/* DARK OVERLAY */}
//   <div style={{
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0,0,0,0.5)"
//   }}></div>

//   {/* CONTENT BOX */}
//   <div style={{
//     position: "relative",
//     background: "rgba(255,255,255,0.95)",
//     padding: "30px",
//     borderRadius: "15px",
//     textAlign: "center",
//     zIndex: 1,
//     width: "350px"
//   }}>

//     <h2>Your Personalized Plan 🍱</h2>

//     <p><b>Your Age:</b> {age}</p>
//     <p><b>Your Weight:</b> {weight}</p>
//     <p><b>BMI:</b> {bmi}</p>

// <h3>{plan.title}</h3>

// <p><b>🌅 Breakfast:</b> {plan.breakfast}</p>
// <p><b>🍛 Lunch:</b> {plan.lunch}</p>
// <p><b>🍎 Snacks:</b> {plan.snacks}</p>
// <p><b>🌙 Dinner:</b> {plan.dinner}</p>

// <p><b>💡 Tip:</b> {plan.tip}</p>
  
//     <div style={{
//   marginTop: "15px",
//   background: "#f1f1f1",
//   padding: "15px",
//   borderRadius: "10px",
//   textAlign: "left"
// }}>
//   <b>AI RECOMMENDATION🤖:</b>
//   <h3>{plan.title}</h3>




// </div>

//   </div>
// </div>
//   );
// }

// export default ResultPage;
//   // return (
//   //   <div style={{
//   //     minHeight: "90vh",
//   //     display: "flex",
//   //     justifyContent: "center",
//   //     alignItems: "center",
//   //     backgroundImage: "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd')",
//   //     backgroundSize: "cover",
//   //     backgroundPosition: "center",
//   //     position: "relative"
//   //   }}>

      