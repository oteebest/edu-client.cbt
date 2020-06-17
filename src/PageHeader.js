import React from "react";

const PageHeader = (props) => {
  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="page-header">
          <h2 className="pageheader-title">{props.HeaderText}</h2>
          <p className="pageheader-text">
            Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit
            amet vestibulum mi. Morbi lobortis pulvinar quam.
          </p>
          <div className="page-breadcrumb">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb"></ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
