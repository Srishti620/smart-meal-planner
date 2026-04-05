import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{
      minHeight: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: "url('https://images.unsplash.com/photo-1498837167922-ddd27525d352')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative"
    }}>

      {/* DARK OVERLAY FOR READABILITY */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)"
      }}></div>

      {/* CONTENT */}
      <div style={{
        position: "relative",
        color: "white",
        textAlign: "center",
        zIndex: 1
      }}>
        <h1 style={{ fontSize: "50px" }}>
          Smart Meal Planner 🍽️
        </h1>

        <p style={{ fontSize: "20px", margin: "20px 0" }}>
          Plan your meals smartly and stay healthy 💪
        </p>

        <Link to="/form">
          <button style={{
            padding: "12px 25px",
            background: "white",
            color: "#333",
            border: "none",
            borderRadius: "25px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            Get Started 🥗
          </button>
        </Link>
      </div>

    </div>
  );
}

export default Home;