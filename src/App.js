import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [trainees, setTrainees] = useState([
    { id: 1, name: "", startDate: "", currentDay: 1 },
    { id: 2, name: "", startDate: "", currentDay: 1 },
    { id: 3, name: "", startDate: "", currentDay: 1 },
    { id: 4, name: "", startDate: "", currentDay: 1 },
    { id: 5, name: "", startDate: "", currentDay: 1 },
  ]);

  const handleTraineeChange = (id, field, value) => {
    setTrainees(
      trainees.map((trainee) =>
        trainee.id === id ? { ...trainee, [field]: value } : trainee
      )
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        10-Day Training Program Tracker
      </h1>

      <div style={{ marginBottom: "30px" }}>
        <h2
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}
        >
          Trainee Information
        </h2>

        {trainees.map((trainee) => (
          <div
            key={trainee.id}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "10px",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          >
            <input
              type="text"
              style={{
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              value={trainee.name}
              onChange={(e) =>
                handleTraineeChange(trainee.id, "name", e.target.value)
              }
              placeholder="Enter name"
            />
            <input
              type="date"
              style={{
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              value={trainee.startDate}
              onChange={(e) =>
                handleTraineeChange(trainee.id, "startDate", e.target.value)
              }
            />
            <select
              style={{
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              value={trainee.currentDay}
              onChange={(e) =>
                handleTraineeChange(trainee.id, "currentDay", e.target.value)
              }
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  Day {i + 1}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Daily Progress Section */}
      {trainees.map((trainee) => (
        <div
          key={trainee.id}
          style={{
            marginBottom: "30px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            {trainee.name || `Trainee ${trainee.id}`} - Day {trainee.currentDay}
          </h3>

          <div style={{ display: "grid", gap: "15px" }}>
            {/* Focus Areas */}
            <div>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Focus Areas
              </label>
              <textarea
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  minHeight: "80px",
                }}
                placeholder="Enter focus areas for today"
              />
            </div>

            {/* Records */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <div>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Target Records
                </label>
                <input
                  type="number"
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Completed Records
                </label>
                <input
                  type="number"
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </div>
            </div>

            {/* Feedback */}
            <div>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Trainer's Feedback
              </label>
              <textarea
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  minHeight: "80px",
                }}
                placeholder="Enter feedback for today"
              />
            </div>

            {/* Performance Rating */}
            <div>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Performance Rating
              </label>
              <select
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                defaultValue="3"
              >
                <option value="1">⭐ Needs Improvement</option>
                <option value="2">⭐⭐ Fair</option>
                <option value="3">⭐⭐⭐ Good</option>
                <option value="4">⭐⭐⭐⭐ Very Good</option>
                <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              </select>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
