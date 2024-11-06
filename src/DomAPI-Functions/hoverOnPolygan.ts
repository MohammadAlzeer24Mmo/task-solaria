import data from "../assets/data.json";

interface PolygonData {
  code: number;
  status: string;
  price: number;
}

const polygonData: PolygonData[] = data;

export default function setupHoverEffect(): void {
    const polygons = document.querySelectorAll<SVGPolygonElement>("polygon");
    const tooltip = document.getElementById("polygon-tooltip");
  
    polygons.forEach((polygon) => {
      const code = parseInt(polygon.getAttribute("data-code") || "0");
      const polygonInfo = polygonData.find((item) => item.code === code);
  
      polygon.addEventListener("mouseenter", () => {
        if (polygonInfo && tooltip && polygon.style.opacity === "0") {
          let statusClass = "";
        switch (polygonInfo.status) {
          case "available":
            statusClass = "green";
            break;
          case "sold":
            statusClass = "red";
            break;
          case "reserved":
            statusClass = "orange";
            break;
        }

          tooltip.innerHTML = `
            
              <div class="detail">
                <span class="label">Unit ${polygonInfo.code}</span>
                <span class="value ${statusClass}">${polygonInfo.status}</span>
              </div>
              <div class="detail">
                <span class="label">Price</span>
                <span class="value">${polygonInfo.price} EGP</span>
              </div>
            
          `;
          tooltip.style.display = "block";
          tooltip.style.opacity = "1"; 
        }
      });
  
      polygon.addEventListener("mousemove", (event) => {
        if (tooltip) {
          tooltip.style.left = `${event.pageX + 10}px`; 
          tooltip.style.top = `${event.pageY + 10}px`;
        }
      });
  
      polygon.addEventListener("mouseleave", () => {
        if (tooltip) {
          tooltip.style.display = "none";
          tooltip.style.opacity = "0"; 
        }
      });
    });
  }
  