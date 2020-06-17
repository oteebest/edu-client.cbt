import React, { useEffect } from "react";
import PageHeader from "../../PageHeader";
import SecureLayout from "../../SecureLayout";

const Dashboard = () => {
  useEffect(() => {});

  return (
    <SecureLayout>
      <div className="container-fluid dashboard-content">
        <PageHeader HeaderText="Dashboard Header" />
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h3 className="text-center">Content goes here!</h3>
          </div>
        </div>
      </div>
    </SecureLayout>
  );
};

export default Dashboard;
