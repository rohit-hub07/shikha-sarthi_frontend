import { useState, useEffect } from "react";
import { useAuth } from "../context/userContext";

const EPaper = () => {
  const { user } = useAuth();
  const [ePapers, setEPapers] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [uploadFile, setUploadFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const years = [2024, 2025, 2026];
  const months = [
    { name: "January", num: 1 },
    { name: "February", num: 2 },
    { name: "March", num: 3 },
    { name: "April", num: 4 },
    { name: "May", num: 5 },
    { name: "June", num: 6 },
    { name: "July", num: 7 },
    { name: "August", num: 8 },
    { name: "September", num: 9 },
    { name: "October", num: 10 },
    { name: "November", num: 11 },
    { name: "December", num: 12 },
  ];

  const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetchEPapers();
  }, []);

  const fetchEPapers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/epapers`);
      const data = await response.json();
      if (data.success) {
        setEPapers(data.data);
      }
    } catch (err) {
      console.error("Error fetching E-Papers:", err);
      setError("Failed to load E-Papers");
    } finally {
      setLoading(false);
    }
  };

  const getEPaperForYearMonth = (year, month) => {
    return ePapers.find((ep) => ep.year === year && ep.month === month);
  };

  const handleUpload = async (month) => {
    if (!uploadFile) {
      setError("Please select a PDF file");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("pdf", uploadFile);
    formData.append("year", selectedYear);
    formData.append("month", month);

    try {
      const response = await fetch(`${API_BASE_URL}/api/epapers/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        await fetchEPapers();
        setUploadFile(null);
        setSelectedMonth(null);
        setError(null);
      } else {
        setError(data.message || "Upload failed");
      }
    } catch (err) {
      console.error("Upload error:", err);
      setError("Failed to upload E-Paper: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReplace = async (month) => {
    if (!uploadFile) {
      setError("Please select a PDF file");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("pdf", uploadFile);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/epapers/replace/${selectedYear}/${month}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        await fetchEPapers();
        setUploadFile(null);
        setSelectedMonth(null);
        setError(null);
      } else {
        setError(data.message || "Replace failed");
      }
    } catch (err) {
      console.error("Replace error:", err);
      setError("Failed to replace E-Paper: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (e, month) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setUploadFile(file);
      setSelectedMonth(month);
      setError(null);
    } else {
      setError("Please select a valid PDF file");
      setUploadFile(null);
    }
  };

  return (
    <div className="container py-5" style={{ minHeight: "70vh" }}>
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">E-Paper Archive</h1>
        <p className="lead text-muted">
          Browse and download our monthly e-papers by selecting a year below
        </p>
      </div>

      {/* Year Selector */}
      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group" role="group">
          {years.map((year) => (
            <button
              key={year}
              type="button"
              className={`btn ${selectedYear === year ? "btn-primary" : "btn-outline-primary"
                }`}
              onClick={() => {
                setSelectedYear(year);
                setSelectedMonth(null);
                setUploadFile(null);
                setError(null);
              }}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {error}
          <button
            type="button"
            className="btn-close"
            onClick={() => setError(null)}
          ></button>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Month Cards Grid */}
      <div className="row g-4">
        {months.map((month) => {
          const existingPaper = getEPaperForYearMonth(selectedYear, month.name);
          const isSelected = selectedMonth === month.name;

          return (
            <div key={month.name} className="col-md-6 col-lg-4 col-xl-3">
              <div className="card h-100 shadow-sm">
                <div
                  className={`card-header ${existingPaper ? "bg-success text-white" : "bg-light"
                    }`}
                >
                  <h5 className="mb-0">
                    {month.name}
                    {existingPaper && " ✓"}
                  </h5>
                </div>
                <div className="card-body">
                  {existingPaper ? (
                    <div>
                      <p className="text-muted small mb-3">
                        E-Paper available for {month.name} {selectedYear}
                      </p>
                      <a
                        href={existingPaper.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success btn-sm w-100 mb-2"
                      >
                        📄 View PDF
                      </a>

                      {user && (
                        <div className="mt-3 pt-3 border-top">
                          <small className="text-muted d-block mb-2">
                            Replace PDF:
                          </small>
                          <input
                            type="file"
                            accept=".pdf"
                            onChange={(e) => handleFileSelect(e, month.name)}
                            className="form-control form-control-sm mb-2"
                            disabled={loading}
                          />
                          {isSelected && uploadFile && (
                            <button
                              onClick={() => handleReplace(month.name)}
                              disabled={loading}
                              className="btn btn-warning btn-sm w-100"
                            >
                              {loading ? "⏳ Replacing..." : "🔄 Replace"}
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      {user ? (
                        <div>
                          <p className="text-muted small mb-3">
                            No e-paper available yet
                          </p>
                          <input
                            type="file"
                            accept=".pdf"
                            onChange={(e) => handleFileSelect(e, month.name)}
                            className="form-control form-control-sm mb-2"
                            disabled={loading}
                          />
                          {isSelected && uploadFile && (
                            <button
                              onClick={() => handleUpload(month.name)}
                              disabled={loading}
                              className="btn btn-primary btn-sm w-100"
                            >
                              {loading ? "⏳ Uploading..." : "📤 Upload"}
                            </button>
                          )}
                        </div>
                      ) : (
                        <div className="alert alert-info p-2 mb-0">
                          <small>No e-paper available for this month</small>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EPaper;
