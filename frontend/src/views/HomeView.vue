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
          we have a wide range of customizable designs to choose from
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
  </div>
  <h1>h1 text</h1>
  <h2>h2 text</h2>
  <p>p text vanlig</p>
  <p class="cursive">class="cursive"</p>
  <p class="light" style="background-color: black">
    ändra text till vit färg skriv class="light"
  </p>
  <p class="lightbrown light">
    för att sätta bakgrundsfärg kan ni skriva class="lightbrown"
  </p>
  <p class="darkbrown light">eller class="darkbrown"</p>
  <div class="glassEffect">
    <p>
      finns class="glassEffect" som är för bakgrunden på login, create account
      och chatten
    </p>
  </div>
</template>
<style>
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
</style>
