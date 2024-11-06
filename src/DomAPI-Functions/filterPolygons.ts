import data from "../assets/data.json";

interface PolygonData {
  code: number;
  status: string;
  price: number;
}

const polygonData: PolygonData[] = data;

export default function filterPolygons(
  status: string,
  minPrice: number,
  maxPrice: number
): void {
  const polygons = document.querySelectorAll<SVGPolygonElement>("polygon");

  polygons.forEach((polygon) => {
    const code = parseInt(polygon.getAttribute("data-code") || "0");
    const polygonInfo = polygonData.find((item) => item.code === code);

      
    if (
      polygonInfo &&
      (status === '' || polygonInfo.status === status) &&
      polygonInfo.price >= minPrice &&
      polygonInfo.price <= maxPrice
    ) {
      // polygon.style.display = "none"; 
      polygon.style.opacity = "0"; 
    } else {
      polygon.style.opacity = "1"; 
      // polygon.style.display = "block"; 
    }
  });
}

