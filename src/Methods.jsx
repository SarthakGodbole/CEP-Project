// ...existing code...
import React, { useState } from "react";
import './Methods.css';

const initialMethods = [
  { title: "Zero Budget Natural Farming (ZBNF)", description: "A low-cost farming model using on-farm biological inputs (Jeevamrutha, Bijamrita) to restore soil health and reduce external inputs.", tags: ["ZBNF", "Soil", "Low cost"] },
  { title: "Mulching", description: "Applying organic cover (straw, leaves) to conserve moisture, suppress weeds and add organic matter as it decomposes.", tags: ["Moisture", "Weed Control", "Organic"] },
  { title: "Compost & Vermicompost", description: "Making compost from farm residues and using earthworms to produce rich vermicompost that improves soil structure and fertility.", tags: ["Soil Health", "Fertilizer", "Organic"] },
  { title: "Green Manure / Cover Crops", description: "Growing legumes or fast-growing plants and incorporating them to add nitrogen and organic matter.", tags: ["Nitrogen Fixing", "Soil"] },
  { title: "Agroforestry", description: "Integrating trees with crops/livestock to diversify income, improve microclimate and sequester carbon.", tags: ["Trees", "Diversity"] },
  { title: "Contour Bunding & Water Harvesting", description: "Land shaping techniques to reduce erosion and increase groundwater recharge on sloping lands.", tags: ["Water", "Erosion Control"] },
  { title: "Biopesticide / Botanical Preparations", description: "Using neem-based, chili-garlic, or other botanical extracts and beneficial insects to manage pests.", tags: ["Pest Management", "Botanical"] },
];

export default function Methods() {
  const [methods, setMethods] = useState(initialMethods);

  return (
    <div>
      <h2>Organic Farming Methods Database</h2>
      <ul className="method-list">
        {methods.map((m, idx) => (
          <li key={idx}>
            <strong>{m.title}</strong> - {m.description} <em>({m.tags.join(", ")})</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
// ...existing code...