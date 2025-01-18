import { HeartPulse, Activity, TrendingDown, DollarSign } from "lucide-react";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    facilityName: "",
    currentAnnualFalls: "",
    currentAnnualReadmissions: "",
    currentTravelNurses: "",
  });

  const [showCalculator, setShowCalculator] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    fallsSavings: 0,
    readmissionsSavings: 0,
    nursingSavings: 0,
    totalSavings: 0,
  });

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.facilityName) {
      setShowCalculator(true);
    }
  };

  const calculateSavings = (e: React.FormEvent) => {
    e.preventDefault();

    const fallsSavings =
      (parseInt(formData.currentAnnualFalls) || 0) * 64000 * 0.52;
    const readmissionsSavings =
      (parseInt(formData.currentAnnualReadmissions) || 0) * 15200 * 0.58;
    const nursingSavings =
      (parseInt(formData.currentTravelNurses) || 0) * 150 * 36 * 52 * 0.78;

    setResults({
      fallsSavings,
      readmissionsSavings,
      nursingSavings,
      totalSavings: fallsSavings + readmissionsSavings + nursingSavings,
    });
    setShowResults(true);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#4A5D4B",
          padding: "32px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <HeartPulse size={56} />
          <h1 style={{ fontSize: "24px" }}>Revitalized Solutions</h1>
        </div>
        <h2
          style={{
            fontSize: "18px",
            textAlign: "center",
            marginTop: "8px",
          }}
        >
          Healthcare Savings Calculator
        </h2>
      </div>

      <div
        style={{
          padding: "32px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              backgroundColor: "#E6EBE4",
              padding: "24px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <Activity
              style={{ color: "#4A5D4B", margin: "0 auto 16px" }}
              size={32}
            />
            <h3 style={{ color: "#3C4A3D", marginBottom: "8px" }}>
              Fall Prevention
            </h3>
            <p style={{ color: "#666" }}>Reduce falls by up to 52%</p>
          </div>

          <div
            style={{
              backgroundColor: "#E6EBE4",
              padding: "24px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <TrendingDown
              style={{ color: "#4A5D4B", margin: "0 auto 16px" }}
              size={32}
            />
            <h3 style={{ color: "#3C4A3D", marginBottom: "8px" }}>
              Reduce Readmissions
            </h3>
            <p style={{ color: "#666" }}>Lower readmissions by 58%</p>
          </div>

          <div
            style={{
              backgroundColor: "#E6EBE4",
              padding: "24px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <DollarSign
              style={{ color: "#4A5D4B", margin: "0 auto 16px" }}
              size={32}
            />
            <h3 style={{ color: "#3C4A3D", marginBottom: "8px" }}>
              Staff Optimization
            </h3>
            <p style={{ color: "#666" }}>Reduce agency costs by 78%</p>
          </div>
        </div>

        {!showCalculator ? (
          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              backgroundColor: "#F5F7F4",
              padding: "24px",
              borderRadius: "8px",
            }}
          >
            <h2
              style={{
                color: "#3C4A3D",
                textAlign: "center",
                marginBottom: "24px",
              }}
            >
              Get Your Custom Savings Report
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#3C4A3D",
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#3C4A3D",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#3C4A3D",
                  }}
                >
                  Facility Name
                </label>
                <input
                  type="text"
                  name="facilityName"
                  value={formData.facilityName}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                  required
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#4A5D4B",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Calculate Your Potential Savings
              </button>
            </form>
          </div>
        ) : (
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              backgroundColor: "#F5F7F4",
              padding: "24px",
              borderRadius: "8px",
            }}
          >
            <h2
              style={{
                color: "#3C4A3D",
                textAlign: "center",
                marginBottom: "24px",
              }}
            >
              {formData.facilityName}'s ROI Calculator
            </h2>

            <form onSubmit={calculateSavings}>
              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#3C4A3D",
                  }}
                >
                  Current Annual Falls
                </label>
                <input
                  type="number"
                  name="currentAnnualFalls"
                  value={formData.currentAnnualFalls}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#3C4A3D",
                  }}
                >
                  Current Annual Readmissions
                </label>
                <input
                  type="number"
                  name="currentAnnualReadmissions"
                  value={formData.currentAnnualReadmissions}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#3C4A3D",
                  }}
                >
                  Current Number of Travel/Agency Nurses
                </label>
                <input
                  type="number"
                  name="currentTravelNurses"
                  value={formData.currentTravelNurses}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                  required
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#4A5D4B",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Calculate Savings
              </button>
            </form>

            {showResults && (
              <div style={{ marginTop: "32px" }}>
                <h3
                  style={{
                    color: "#3C4A3D",
                    textAlign: "center",
                    marginBottom: "24px",
                  }}
                >
                  Your Potential Annual Savings
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "16px",
                      borderRadius: "8px",
                    }}
                  >
                    <p style={{ color: "#3C4A3D", marginBottom: "8px" }}>
                      Falls Prevention Savings
                    </p>
                    <p
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#4A5D4B",
                      }}
                    >
                      ${results.fallsSavings.toLocaleString()}
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "16px",
                      borderRadius: "8px",
                    }}
                  >
                    <p style={{ color: "#3C4A3D", marginBottom: "8px" }}>
                      Readmission Reduction Savings
                    </p>
                    <p
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#4A5D4B",
                      }}
                    >
                      ${results.readmissionsSavings.toLocaleString()}
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "16px",
                      borderRadius: "8px",
                    }}
                  >
                    <p style={{ color: "#3C4A3D", marginBottom: "8px" }}>
                      Travel/Agency Nurse Savings
                    </p>
                    <p
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#4A5D4B",
                      }}
                    >
                      ${results.nursingSavings.toLocaleString()}
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "16px",
                      borderRadius: "8px",
                    }}
                  >
                    <p style={{ color: "#3C4A3D", marginBottom: "8px" }}>
                      Total Annual Savings
                    </p>
                    <p
                      style={{
                        fontSize: "28px",
                        fontWeight: "bold",
                        color: "#4A5D4B",
                      }}
                    >
                      ${results.totalSavings.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
