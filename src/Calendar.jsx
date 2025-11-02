// ...existing code...
import React, { useState } from "react";
import './Calendar.css';

const cropCalendar = [
  { area: "Punjab", crop: "Wheat", month: "Nov - Feb", suitability: "High" },
  { area: "Punjab", crop: "Mustard", month: "Oct - Mar", suitability: "Good" },
  { area: "Kerala", crop: "Rice (Rainfed)", month: "Jun - Nov", suitability: "High" },
  { area: "Karnataka", crop: "Millets (Ragi)", month: "Jun - Sep", suitability: "Good" },
  { area: "Tamil Nadu", crop: "Groundnut", month: "Jun - Sep", suitability: "Good" },
  { area: "Maharashtra", crop: "Cotton", month: "Jun - Nov", suitability: "Moderate" },
  { area: "West Bengal", crop: "Aman Rice", month: "Jun - Nov", suitability: "High" },
  { area: "Bihar", crop: "Sugarcane", month: "Oct - Mar", suitability: "Good" },
  { area: "Odisha", crop: "Vegetables (Mixed)", month: "Year-round", suitability: "Variable" },
  { area: "Assam", crop: "Tea (intercrop)", month: "Feb - Nov", suitability: "Good" },
];

export default function Calendar() {
  const [area, setArea] = useState("");
  const filtered = area ? cropCalendar.filter(c => c.area.toLowerCase().includes(area.toLowerCase())) : cropCalendar;

  return (
    <div className="calendar-container">
      <h2>Crop Suitability Calendar</h2>
      <label>Filter by area:</label>
      <input value={area} onChange={e => setArea(e.target.value)} placeholder="Enter area (e.g. Punjab)" />
      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>Crop</th>
            <th>Month</th>
            <th>Suitability</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((c, idx) => (
            <tr key={idx}>
              <td>{c.area}</td>
              <td>{c.crop}</td>
              <td>{c.month}</td>
              <td>{c.suitability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
// ...existing code...