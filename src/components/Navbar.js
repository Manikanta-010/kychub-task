import React from "react";
import { Link } from "react-router-dom"; // Link import chesa

const Navbar = () => {
    const currentStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#333",
        color: "#fff",
        padding: "18px 5vw",
        textAlign: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    };

    return (
        <div style={{ ...currentStyle, flexWrap: "wrap", maxWidth: "100%" }}>
            <h3
                style={{
                    margin: 0,
                    fontSize: "22px",
                    fontWeight: "600",
                    color: "#4A90E2",
                    fontFamily: "Poppins, sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    lineHeight: "1",
                    letterSpacing: "1px",
                    textTransform: "capitalize",
                }}
            >
                <span>📦</span> Products
            </h3>
            <h1 style={{ margin: 0, fontSize: "26px", fontWeight: "bold" }}>
                My Products
            </h1>
            <ul
                style={{
                    listStyle: "none",
                    display: "flex",
                    gap: "20px",
                    margin: 0,
                    padding: 0,
                    fontSize: "18px",
                }}
            >
                {["Home", "Products", "Compare"].map((item) => (
                    <li
                        key={item}
                        style={{
                            cursor: "pointer",
                            transition: "color 0.3s ease-in-out",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#bbb")}
                        onMouseLeave={(e) => (e.target.style.color = "#fff")}
                    >
                        <Link
                            to={`/${item.toLowerCase()}`}
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;