<template>
  <div id="sectionContainer">
    <div id="section1">
      <div id="section1Images">
        <img
          src="../../assets/images/homeImage1.jpeg"
          alt="home image 1"
          id="homeImg1"
        />
        <img
          src="../../assets/images/homeImage2.jpeg"
          alt="home image 1"
          id="homeImg2"
        />
      </div>
      <div id="section1Article">
        <article id="article1">
          Welcome to Villora, the home of unique and stylish house plans
          designed to meet your every need. Our expert team of architects and
          designers work tirelessly to create beautiful and functional homes
          that are tailored to your specific requirements. Whether you're
          looking for a cozy bungalow, a modern mansion, or anything in between,
          we have a wide range of customizable designs to choose from.
        </article>
        <div id="articleLogo">
          <img
            src="../../assets/logos/iconBigDark.png"
            alt="villora logo"
            id="articleLogoImg"
          />
          <p id="articleLogoText">Villora</p>
        </div>
      </div>
    </div>
    <div id="section2">
      <div id="section2Article">
        <article id="article2">
          At Villora, we believe that your home should be a reflection of your
          personality and lifestyle. That's why our designs are not only
          visually stunning, but also functional and practical. We use the
          latest building materials and techniques to ensure that your home is
          not only beautiful, but also energy-efficient and sustainable. With
          Villora, you can be confident that you're getting the best quality and
          value for your money.
        </article>
        <h2 id="article2Quote">let's find your new home</h2>
      </div>
      <div id="section2Images">
        <img
          src="../../assets/images/homeImage3.jpeg"
          alt="home image 1"
          id="homeImg3"
        />
        <img
          src="../../assets/images/homeImage4.jpeg"
          alt="home image 1"
          id="homeImg4"
        />
      </div>
    </div>
    <div id="section3">
      <h1>Buy our houseplans</h1>
      <div class="imagePlansSlider">
        <img
          src="../../assets/images/sketch2.png"
          alt="sketch image"
          class="sketchImg"
        />
        <img
          src="../../assets/images/sketch1.png"
          alt="sketch image"
          class="sketchImg"
          id="sketchImgSnap"
        />
        <img
          src="../../assets/images/sketch3.png"
          alt="sketch image"
          class="sketchImg"
        />
      </div>
    </div>
    <div id="section4">
      <h1>Order our catalogue</h1>
      <img src="../../assets/images/book.png" alt="book image" id="bookImg" />
    </div>
  </div>
</template>
<style scoped>
  /* section 1 */
  #section1 {
    display: flex;
  }
  #section1Images {
    width: 50%;
    position: relative;
  }
  #homeImg1 {
    width: 500px;
    margin-left: 25px;
    margin-top: 25px;
  }
  #homeImg2 {
    position: absolute;
    width: 250px;
    left: 70%;
    top: 55%;
  }
  #section1Article {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #article1 {
    width: 400px;
    font-family: 'Lato', sans-serif;
    font-style: italic;
    font-weight: 200;
    font-size: 28px;
    text-align: center;
  }
  #articleLogo {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
  #articleLogoImg {
    width: 130px;
    margin-top: 30px;
    padding: 0;
  }
  #articleLogoText {
    font-family: 'Lato', sans-serif;
    font-weight: 150;
    text-transform: uppercase;
    font-size: 50px;
    text-align: center;
    letter-spacing: 0.16em;
    margin: 0;
    padding: 0;
  }
  /* section 2  */
  #section2 {
    margin-top: 20px;
    display: flex;
  }
  #section2Article {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #article2 {
    width: 400px;
    font-family: 'Lato', sans-serif;
    font-style: italic;
    font-weight: 200;
    font-size: 28px;
    text-align: center;
  }

  #article2Quote {
    text-transform: initial;
    font-style: normal;
    width: 400px;
  }

  #section2Images {
    width: 50%;
    position: relative;
  }

  #homeImg3 {
    float: right;
    width: 500px;
    margin-right: 25px;
    margin-top: 25px;
  }
  #homeImg4 {
    position: absolute;
    width: 250px;
    right: 70%;
    top: 55%;
  }

  /* Section 3 */
  #section3 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #section3 h1 {
    margin: 0;
    margin-top: 50px;
  }
  .imagePlansSlider {
    width: 95%;
    display: flex;
    gap: 10px;
    margin-top: -30px;
    overflow-x: scroll;
    margin: 0;
    scrollbar-width: thin;
    /* scrollbar-color: transparent transparent; */
    scroll-snap-type: x mandatory;
  }
  .sketchImg {
    width: 800px;
  }
  #sketchImgSnap {
    scroll-snap-align: center;
  }
  #section4 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #section4 h1 {
    margin: 0;
    margin-top: 50px;
  }
  #bookImg {
    width: 80%;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1144px) {
    /* Section 1 */
    #homeImg1 {
      width: 450px;
      margin-left: 25px;
      margin-top: 25px;
    }
    #homeImg2 {
      left: 70%;
      top: 55%;
    }

    #article1 {
      width: 320px;
      margin-top: 45px;
      margin-left: 100px;
    }

    #articleLogo {
      margin-left: 100px;
    }
    /* Section 2 */
    #article2 {
      width: 320px;
      margin-top: 70px;
      margin-right: 100px;
    }

    #article2Quote {
      margin-right: 100px;
      width: 320px;
    }
    #homeImg3 {
      float: right;
      width: 500px;
      margin-right: 25px;
      margin-top: 25px;
    }
    #homeImg4 {
      width: 250px;
      right: 70%;
      top: 55%;
    }

    #section2Images {
      width: 50%;

      margin-top: 25px;
      margin-bottom: 45px;
    }
  }

  @media screen and (max-width: 940px) {
    /* Section 1 */
    #homeImg1 {
      width: 400px;
    }
    #homeImg2 {
      width: 200px;
    }

    #article1 {
      margin-top: 35px;
      width: 280px;
    }
    /* Section2 */
    #article2 {
      width: 280px;
    }

    #article2Quote {
      width: 280px;
    }
    #homeImg3 {
      width: 400px;
    }
    #homeImg4 {
      width: 200px;
      right: 70%;
    }
  }

  @media screen and (max-width: 768px) {
    #sectionContainer {
      display: flex;
      flex-direction: column;
    }
    /* Section1 */
    #section1 {
      flex-direction: column;
    }
    #section2 {
      flex-direction: column;
    }
    #section1Images {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    #homeImg1 {
      width: 70%;
      height: auto;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
    }

    #homeImg2 {
      width: 30%;
      height: auto;
      position: relative;
      top: -50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }

    #section1Article {
      width: 90%;
      text-align: center;
      margin: 0 auto;
    }

    #article1 {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 0;
    }

    #articleLogo {
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
    }
    /* Section2 */
    /* Changes position to the opposite way */
    #section2 {
      flex-direction: column-reverse;
    }
    #section2Images {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 0;
    }

    #homeImg3 {
      margin-bottom: 20px;
      width: 70%;
      height: auto;
      margin-left: auto;
      margin-right: auto;
    }

    #homeImg4 {
      width: 30%;
      height: auto;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    #section2Article {
      text-align: center;
      width: 90%;
      margin: 0 auto;
    }

    #article2 {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 0;
    }

    #article2Quote {
      margin-left: auto;
      margin-right: auto;
    }

    /* Section 3 */
    .sketchImg {
      margin-top: 40px;
    }
    #bookImg {
      margin-top: 80px;
    }
  }
</style>
