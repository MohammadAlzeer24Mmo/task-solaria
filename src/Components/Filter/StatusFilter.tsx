import React, { useState } from "react";
import "./css/StatusFilter.css";

interface StatusFilterProps {
  onStatusChange: (status: string) => void;
}

const StatusFilter: React.FC<StatusFilterProps> = ({ onStatusChange }) => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const handleButtonClick = (newStatus: string) => {
    setSelectedStatus(newStatus);
    onStatusChange(newStatus);
  };

  return (
    <>
      <div className="header">
        <span>Availability</span>
      </div>
      <div className="status-buttons">
        <button
          className={`status available ${selectedStatus === "available" ? "selected" : ""}`}
          onClick={() => handleButtonClick("available")}
        >
          Available
        </button>
        <button
          className={`status sold ${selectedStatus === "sold" ? "selected" : ""}`}
          onClick={() => handleButtonClick("sold")}
        >
          Sold
        </button>
        <button
          className={`status reserved ${selectedStatus === "reserved" ? "selected" : ""}`}
          onClick={() => handleButtonClick("reserved")}
        >
          Reserved
        </button>
    
      </div>
    </>
  );
};

export default StatusFilter;
