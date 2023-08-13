import React from "react";
import Header from "../../components/header/header.jsx"
import Footer from "../../components/footer/footer.jsx"
import MainPageContent from "../../components/mainPageContent/mainPageContent.jsx"
import "./mainPage.css"

function MainPage() {
  return (
    <div>
        <Header />
        <MainPageContent />
        <Footer />
    </div>
    

  );
}

export default MainPage;