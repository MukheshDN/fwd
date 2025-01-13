import React, { useState, useEffect } from "react";
import "./PatientForm.css";
import api from "../../api.js"; // Import the api module

const PatientForm = () => {
  // State hooks for each form field
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [diabetesDuration, setDiabetesDuration] = useState("");
  const [diabeticRetinopathy, setDiabeticRetinopathy] = useState("");
  const [diabeticNephropathy, setDiabeticNephropathy] = useState("");
  const [smoking, setSmoking] = useState("");
  const [drinking, setDrinking] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [sbp, setSbp] = useState("");
  const [dbp, setDbp] = useState("");
  const [hba1c, setHba1c] = useState("");
  const [fbg, setFbg] = useState("");
  const [tg, setTg] = useState("");
  const [cPeptide, setCPeptide] = useState("");
  const [tc, setTc] = useState("");
  const [hdLc, setHDLc] = useState("");
  const [ldLc, setLDLc] = useState("");
  const [insulin, setInsulin] = useState("");
  const [metformin, setMetformin] = useState("");
  const [lipidLoweringDrugs, setLipidLoweringDrugs] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch any initial data (if needed)
  useEffect(() => {
    // You can fetch pre-existing data here if required
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");  // Clear previous error message before submission
    try {
      const token = localStorage.getItem("Token");
      if (!token) {
        setErrorMessage("No token found");
        setLoading(false);
        return;
      }
  
      // Send data to the backend
      const response = await api.post("/api/v1/user/addMedicalData", {
        token,
        sex,
        age,
        diabetesDuration,
        diabeticRetinopathy,
        diabeticNephropathy,
        smoking,
        drinking,
        height,
        weight,
        bmi,
        sbp,
        dbp,
        hba1c,
        fbg,
        tg,
        cPeptide,
        tc,
        hdLc,
        ldLc,
        insulin,
        metformin,
        lipidLoweringDrugs,
      });
  
      if (response.data.success) {
        alert("Form submitted successfully!");
        setErrorMessage(""); // Clear error message after successful submission
      } else {
        setErrorMessage(response.data.message || "Submission failed");
      }
    } catch (error) {
      setErrorMessage("An error occurred while submitting the form. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="sex">Sex</label>
        <input type="text" id="sex" name="sex" value={sex} onChange={(e) => setSex(e.target.value)} />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        <label htmlFor="diabetesDuration">Diabetes Duration</label>
        <input type="number" id="diabetesDuration" name="diabetesDuration" value={diabetesDuration} onChange={(e) => setDiabetesDuration(e.target.value)} />
      </div>
      <div>
        <label htmlFor="diabeticRetinopathy">Diabetic Retinopathy</label>
        <input type="text" id="diabeticRetinopathy" name="diabeticRetinopathy" value={diabeticRetinopathy} onChange={(e) => setDiabeticRetinopathy(e.target.value)} />
      </div>
      <div>
        <label htmlFor="diabeticNephropathy">Diabetic Nephropathy</label>
        <input type="text" id="diabeticNephropathy" name="diabeticNephropathy" value={diabeticNephropathy} onChange={(e) => setDiabeticNephropathy(e.target.value)} />
      </div>
      <div>
        <label htmlFor="smoking">Smoking</label>
        <input type="text" id="smoking" name="smoking" value={smoking} onChange={(e) => setSmoking(e.target.value)} />
      </div>
      <div>
        <label htmlFor="drinking">Drinking</label>
        <input type="text" id="drinking" name="drinking" value={drinking} onChange={(e) => setDrinking(e.target.value)} />
      </div>
      <div>
        <label htmlFor="height">Height</label>
        <input type="number" id="height" name="height" step="0.01" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div>
        <label htmlFor="weight">Weight</label>
        <input type="number" id="weight" name="weight" step="0.01" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label htmlFor="bmi">BMI</label>
        <input type="number" id="bmi" name="bmi" step="0.01" value={bmi} onChange={(e) => setBmi(e.target.value)} />
      </div>
      <div>
        <label htmlFor="sbp">SBP</label>
        <input type="number" id="sbp" name="sbp" value={sbp} onChange={(e) => setSbp(e.target.value)} />
      </div>
      <div>
        <label htmlFor="dbp">DBP</label>
        <input type="number" id="dbp" name="dbp" value={dbp} onChange={(e) => setDbp(e.target.value)} />
      </div>
      <div>
        <label htmlFor="hba1c">HbA1c</label>
        <input type="number" id="hba1c" name="hba1c" step="0.01" value={hba1c} onChange={(e) => setHba1c(e.target.value)} />
      </div>
      <div>
        <label htmlFor="fbg">FBG</label>
        <input type="number" id="fbg" name="fbg" value={fbg} onChange={(e) => setFbg(e.target.value)} />
      </div>
      <div>
        <label htmlFor="tg">TG</label>
        <input type="number" id="tg" name="tg" value={tg} onChange={(e) => setTg(e.target.value)} />
      </div>
      <div>
        <label htmlFor="cPeptide">C-Peptide</label>
        <input type="number" id="cPeptide" name="cPeptide" value={cPeptide} onChange={(e) => setCPeptide(e.target.value)} />
      </div>
      <div>
        <label htmlFor="tc">TC</label>
        <input type="number" id="tc" name="tc" value={tc} onChange={(e) => setTc(e.target.value)} />
      </div>
      <div>
        <label htmlFor="hdLc">HDLC</label>
        <input type="number" id="hdLc" name="hdLc" value={hdLc} onChange={(e) => setHDLc(e.target.value)} />
      </div>
      <div>
        <label htmlFor="ldLc">LDLC</label>
        <input type="number" id="ldLc" name="ldLc" value={ldLc} onChange={(e) => setLDLc(e.target.value)} />
      </div>
      <div>
        <label htmlFor="insulin">Insulin</label>
        <input type="number" id="insulin" name="insulin" value={insulin} onChange={(e) => setInsulin(e.target.value)} />
      </div>
      <div>
        <label htmlFor="metformin">Metformin</label>
        <input type="text" id="metformin" name="metformin" value={metformin} onChange={(e) => setMetformin(e.target.value)} />
      </div>
      <div>
        <label htmlFor="lipidLoweringDrugs">Lipid Lowering Drugs</label>
        <input type="text" id="lipidLoweringDrugs" name="lipidLoweringDrugs" value={lipidLoweringDrugs} onChange={(e) => setLipidLoweringDrugs(e.target.value)} />
      </div>
      <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </form>
  );
};

export default PatientForm;
