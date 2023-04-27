import './App.scss';
// import PageSection from "./components/PageSection";
import { Grid, Column } from '@carbon/react';

function App() {
  return (
    <div className="App">

      {/*One*/}
      <Grid fullWidth className="grid--black">
        <Column lg={16} md={8} sm={4} className="section--black">
          <Grid>
            <Column lg={6} className="col1">
              <h1>API Connect</h1>
              <h2>in Cloud Pak for Integration</h2>
            </Column>
            <Column lg={10} className="col1">
              <h1>image</h1>
            </Column>
          </Grid>
        </Column>
      </Grid>


      {/*Two*/}
      <Grid fullWidth className="grid--black">
        <Column lg={16} md={8} sm={4} className="section--black">
          <Grid>
            <Column lg={{ span: 10, offset: 3 }} className="col2">       
              <div className="video"></div>
            </Column>
          </Grid>
        </Column>
      </Grid>

      

      {/*Three*/}
      <Grid fullWidth className="grid--black">
        <Column lg={16} md={8} sm={4} className="section--black">
          <Grid>
            <Column lg={6} className="col1">
               <h2>Powering essential solutions</h2>
            </Column>
             <Column lg={10} className="col1">
              <p>akfj;alsdjf;alksdjf;klasdjf as;df paragraphs</p>
            </Column>
          </Grid>
        </Column>
      </Grid>
   


      {/*Four*/}
      <Grid fullWidth className="grid--white">
        <Column lg={16} md={8} sm={4} className="section--white">
          <Grid>
            <Column lg={6} className="col1">   
              <h2>Supports all the modern API types</h2>
            </Column>
            <Column lg={10} className="col1">
              <h1>image</h1>
            </Column>
          </Grid>
        </Column>
      </Grid>



      {/*Five*/}
      <Grid fullWidth className="grid--white">
        <Column lg={16} md={8} sm={4} className="section--white">
          <Grid>
            <Column lg={10} className="col1">
              <h2>image</h2>
            </Column>
            <Column lg={6} className="col1">
              <h2>Simplified development loop</h2>
            </Column>
          </Grid>
        </Column>
      </Grid>



      {/*Six*/}
      <Grid fullWidth className="grid--white">
        <Column lg={16} md={8} sm={4} className="section--white">
          <Grid>
            <Column lg={6} className="col1">
              <h2>Automate testing with Watson AI</h2>
            </Column>
            <Column lg={10} className="col1">
              <h1>image</h1>
            </Column>
          </Grid>
        </Column>
      </Grid>




      {/*Seven*/}
      <Grid fullWidth className="grid--white">
        <Column lg={16} md={8} sm={4} className="section--white">
          <Grid>
            <Column lg={10} className="col1">       
              <h2>image</h2>
            </Column>
             <Column lg={6} className="col1">
              <h2>Monitor APIs with ease</h2>
            </Column>
          </Grid>
        </Column>
      </Grid>




      {/*Eight*/}
      <Grid fullWidth className="grid--white">
        <Column lg={16} md={8} sm={4} className="section--white">
          <Grid>
            <Column lg={6} className="col1">
              <h2>All in one place</h2>
            </Column>
            <Column lg={10} className="col1">
              <h1>image</h1>
            </Column>
          </Grid>
        </Column>
      </Grid>



      {/*Nine*/}
      <Grid fullWidth className="grid--black">
      <Column lg={16} md={8} sm={4} className="section--black">
        <Grid>
          <Column lg={6} className="col1">
          <h2>The loop guides us</h2>
          </Column>
           <Column lg={10} className="col1">
          <h1>infinity image</h1>
          <p>al;kfj;alsdjf;aklsjdf;lasdf;j;alksjdf</p>
          </Column>
        </Grid>
      </Column>
    </Grid>


    {/*Ten*/}
    <Grid fullWidth className="grid--black">
      <Column lg={16} md={8} sm={4} className="section--black">
        <Grid>
          <Column lg={6} className="col1">
          <h2>Customers love us</h2>
          </Column>
           <Column lg={10} className="col1">
          <h1>some quotes</h1>
          </Column>
        </Grid>
      </Column>
    </Grid>

    <footer></footer>

  </div>)
};

export default App;
