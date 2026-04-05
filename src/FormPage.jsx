import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goal, setGoal] = useState("");
  

  const navigate = useNavigate();

  const handleSubmit = () => {

    console.log("clicked");

  const a = Number(age);
  const w = Number(weight);
  const h = Number(height);

 
 if (age === "" || weight === "" || height === "") {
    alert("All fields are required");
    return;
  }
 if (isNaN(a) || isNaN(w) || isNaN(h)) {
    alert("Please enter valid numbers only");
    return;
  }
  
  if (a < 1 || a > 1000) {
    alert("Please Enter a valid age...");
    return;
  }

  if (w < 0 || w > 2000) {
    alert("Please Enter a valid weight...");
    return;
  }

  if (h < 0 || h > 2500) {
    alert("Please Enter a valid height...");
    return;
  }

  if (!goal) {
    alert("Please select a goal...");
    return;
  }

   console.log("navigating now");


  navigate("/result", {
    state: { age: a, weight: w, height: h, goal }
  });
};
  return (
    <div style={{
      minHeight: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: "url('https://images.unsplash.com/photo-1490645935967-10de6ba17061')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative"
    }}>

     
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
        background: "rgba(255,255,255,0.9)",
        padding: "30px",
        borderRadius: "15px",
        textAlign: "center",
        zIndex: 1,
        width: "320px"
      }}>

        <h2>Enter Your Details</h2>

        <input placeholder="Age" onChange={(e) => setAge(e.target.value)} /><br />
        <input placeholder="Weight (kg)" onChange={(e) => setWeight(e.target.value)} /><br />
        <input placeholder="Height (cm)" onChange={(e) => setHeight(e.target.value)} /><br />

        <select onChange={(e) => setGoal(e.target.value)}>
          <option value="">Select Goal</option>
          <option value="loss">Weight Loss</option>
          <option value="gain">Weight Gain</option>
          <option value="maintain">Maintain</option>
        </select>

        <br /><br />

       <button type="button" onClick={handleSubmit}>
            Generate Plan 🥗
       </button>
      </div>
    </div>
  );
}

export default FormPage;