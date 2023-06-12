import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from "../src/Pages/Dashboard/Layout";
import CollectFee from "../src/Pages/Dashboard/CollectFee";
import GenerateReceipt from "../src/Pages/Dashboard/Generatereceipt";
import Navbar from "../src/Pages/Dashboard/Navbar";
import Sidebar from "../src/Pages/Dashboard/Sidebar";
import MainContent from "../src/Pages/Dashboard/Maincontent";
import AddStudent from "../src/Pages/Dashboard/AddStudentForm";
import AddAcademicYear from "../src/Pages/Dashboard/AddAcademicYearForm";
import AddBranch from "../src/Pages/Dashboard/AddBranchForm";
import AddCategory from "../src/Pages/Dashboard/AddCategoryForm";
import AddFeeHeads from "../src/Pages/Dashboard/AddFeeHeadsForm";
import Mapping from "../src/Pages/Dashboard/MapFeeHeadsForm";


const App = () => {

  return (
    <div>
      {/* <Layout /> */}
      <Router>
        <div className="container">
          <Navbar />
          <div className="content">
            <Sidebar />
            <Switch>
              <Route exact path="/" component={MainContent} />
              <Route exact path="/collectfee" component={CollectFee} />
              <Route
                exact
                path="/generatereceipts"
                component={GenerateReceipt}
              />
              <Route exact path="/addacademicyearform" component={AddAcademicYear} />
              <Route exact path="/addbranchform" component={AddBranch} />
              <Route exact path="/addcategoryform" component={AddCategory}/>
              <Route exact path="/addfeeheadsform" component={AddFeeHeads} />
              <Route exact path="/addstudentform" component={AddStudent}/>
              <Route exact path="/mappingform" component={Mapping} />
              <Route exact path="/logout" component={''} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
