import React from "react";
import './SectionTitle.scss';
const SectionTitle = (props) => {
    const { title = '', desc = '', } = props;
    return (<section className='section title-section'>
      <div className="container">
        <h1 className="title title--light title-section__title">
          {title}
        </h1>

        <h6 className="title-section__subtitle">
          {desc}
        </h6>
      </div>
    </section>);
};
export default SectionTitle;
