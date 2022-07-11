import React from "react";
// import "../StyleSheet/certificate.css"
import img2 from "../images/mhicon.jpg";
import img3 from "../images/footer.jpg";

export default function certificate() {
  return (
    <>
      <div className="main-page">
        <div className="sub-page" id="printableArea">
          <img
            src={img2}
            alt="MH Icon"
            className="center"
            width="33%"
            height="13%"
          />
          <h2 align="center" className="customBlue">
            Certificate for COVID-19 Vaccination
          </h2>
          <p align="center" className="customBlue">
            Partially Vaccinated: <b>1st Dose</b>
          </p>
          <table width="100%">
            <tr>
              <td colspan="2" className="customBlue">
                <u>
                  <b>Beneficiary Details</b>
                </u>
              </td>
            </tr>
            <tr>
              <td>Beneficiary Name / সুবিধাভোগীর নাম</td>
              <td>
                <b>Munmun Gorai</b>
              </td>
            </tr>
            <tr>
              <td>Age / বয়স</td>
              <td>
                <b>23</b>
              </td>
            </tr>
            <tr>
              <td>Gender / লিঙ্গ</td>
              <td>
                <b>Female</b>
              </td>
            </tr>
            <tr>
              <td>ID Verified / আই ডি এর প্রকার</td>
              <td>
                <b>Aadhaar # XXXXXXXX2596</b>
              </td>
            </tr>
            <tr>
              <td>Unique Health ID (UHID)</td>
              <td>
                <b>38-4772-8521-7010</b>
              </td>
            </tr>
            <tr>
              <td>Beneficiary Reference ID</td>
              <td>
                <b>93918165691710</b>
              </td>
            </tr>
            <tr>
              <td colspan="2" className="pt40 customBlue">
                <u>
                  <b>Vaccination Details</b>
                </u>
              </td>
            </tr>
            <tr>
              <td>Vaccine Name / ভ্যাকসিনের নাম</td>
              <td>
                <b>COVISHIELD</b>
              </td>
            </tr>
            <tr>
              <td>Date of 1st Dose / প্রথম ডোজ তারিখ</td>
              <td>
                <b>26 Jul 2021 (Batch no. 4121Z09402/22)</b>
              </td>
            </tr>
            <tr>
              <td>Next due date / পরবর্তী টিকাকরণের তারিখ</td>
              <td>
                <b>Between 18 Oct 2021 to 15 Nov 2021</b>
              </td>
            </tr>
            <tr>
              <td>Vaccinated by / টিকাকর্মী</td>
              <td>
                <b>RUMA CHAKROBORTY</b>
              </td>
            </tr>
            <tr>
              <td>Vaccination at / টিকাকরণের স্থান</td>
              <td>
                <b>Durgapur UPHC 8 Shyampur, West Bardhaman, West Bengal</b>
              </td>
            </tr>
          </table>
          <img src={img3} height="350px" className="pt20 center" />
        </div>
      </div>
    </>
  );
}
