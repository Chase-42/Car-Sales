import React from "react";
// Redux
import { connect } from "react-redux";
import { addFeature, removeFeature, updateTotal } from "./actions/index";
// Components
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = props => {
  const removeFeature = item => {
    props.removeFeature(item);
    props.updateTotal(-item.price);
  };

  const buyItem = item => {
    props.addFeature(item);
    props.updateTotal(item.price);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} additionalFeatures={props.additionalPrice} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          buyItem={buyItem}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
}

export default connect(mapStateToProps, {
  addFeature,
  removeFeature,
  updateTotal
})(App);
