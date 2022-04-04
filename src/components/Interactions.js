import React, { useState } from "react";
import axios from "axios";
import "./Interactions.css";

export default class Interactions extends React.Component {

  //state variables with amount of interactions for each sector
  constructor(props) {
    super(props);
    this.state = {
      allInteractions: 0,
      materialsInteraction: 0,
      industrialsInteractions: 0,
      realEstateInteractions: 0,
      energyInteractions: 0,
      communicationServicesInteractions: 0,
      healthcareInteractios: 0,
      consumerStaplesInteractions: 0,
      consumerDiscretionaryInteractions: 0,
      informationTechnologyInteractions: 0,
      utilitiessInteractions: 0,
      financialsInteractions: 0,
    };
  }


  componentDidMount() {
    //HTTP request to API
    axios.get(`https://interactions-json.herokuapp.com/api`).then((res) => {
      var interactions = res.data;

      //initialize all the counters
      var counterMaterials = 0;
      var counterIndustrials = 0;
      var counterRealEstate = 0;
      var counterEnergy = 0;
      var counterCommunication = 0;
      var counterHealthcare = 0;
      var counterConsumerStaples = 0;
      var counterConsumerDiscretionary = 0;
      var counterInformationTechnology = 0;
      var counterUtilities = 0;
      var counterFinancials = 0;

      //iterate over the array with map() function and record how many of each sectors interactions there are
      let interactionCounter = interactions.map((interaction) => {
        if(interaction.name === 'Materials'){
          counterMaterials++; 
        }
        if(interaction.name === 'Industrials'){
          counterIndustrials++; 
        }
        if(interaction.name === 'Real Estate'){
          counterRealEstate++; 
        }
        if(interaction.name === 'Energy'){
          counterEnergy++; 
        }
        if(interaction.name === 'Communication Services'){
          counterCommunication++; 
        }
        if(interaction.name === 'Healthcare'){
          counterHealthcare++; 
        }
        if(interaction.name === 'Consumer Staples'){
          counterConsumerStaples++; 
        }
        if(interaction.name === 'Consumer Discretionary'){
          counterConsumerDiscretionary++; 
        }
        if(interaction.name === 'Information Technology'){
          counterInformationTechnology++; 
        }
        if(interaction.name === 'Utilities'){
          counterUtilities++; 
        }
        if(interaction.name === 'Finanacials'){
          counterFinancials++; 
        }
      })

      //updating state with the counter number for each sector
      this.setState({allInteractions: interactions.length});
      this.setState({materialsInteraction: counterMaterials});
      this.setState({industrialsInteractions: counterIndustrials});
      this.setState({realEstateInteractions: counterMaterials});
      this.setState({energyInteractions: counterEnergy});
      this.setState({communicationServicesInteractions: counterCommunication});
      this.setState({healthcareInteractios: counterHealthcare});
      this.setState({consumerStaplesInteractions: counterConsumerStaples});
      this.setState({consumerDiscretionaryInteractions: counterConsumerDiscretionary});
      this.setState({informationTechnologyInteractions: counterInformationTechnology});
      this.setState({utilitiessInteractions: counterUtilities});
      this.setState({financialsInteractions: counterFinancials });
    });
  }


  render() {
    //function to calculate the percentage
    function percentage(partialValue, totalValue) {
      return (100 * partialValue) / totalValue;
   } 

   //consts to return that we get from the state, divided by the total number of interactions
    const allInter = this.state.allInteractions;
    const amountMaterialInter = percentage(this.state.materialsInteraction, this.state.allInteractions);
    const amountIndustrialInter = percentage(this.state.industrialsInteractions, this.state.allInteractions);
    const amountRealEastInter = percentage(this.state.realEstateInteractions, this.state.allInteractions);
    const amountEnergyInter = percentage(this.state.energyInteractions, this.state.allInteractions);
    const amountCommunicationInter = percentage(this.state.communicationServicesInteractions, this.state.allInteractions);
    const amountHealthcareInter = percentage(this.state.healthcareInteractios, this.state.allInteractions);
    const amountConsumerStaplesInter = percentage(this.state.consumerStaplesInteractions, this.state.allInteractions);
    const amountConsumerDiscretionaryInter = percentage(this.state.consumerDiscretionaryInteractions, this.state.allInteractions);
    const amountITInter = percentage(this.state.informationTechnologyInteractions, this.state.allInteractions);
    const amountUtilitiesInter = percentage(this.state.utilitiessInteractions, this.state.allInteractions);
    const amountFinancialsInter = percentage(this.state.financialsInteractions, this.state.allInteractions);
    return (
      <div className="card">
        <div className="card-details"><h2>From total of all {allInter} currently recorded interactions here's what sections were the topics and what percentage of total they took: </h2></div>
        <ul>
        <li>Materials: {amountMaterialInter.toFixed(1)}% </li>
        <li>Industrials: {amountIndustrialInter.toFixed(1)}% </li>
        <li>Real Estate: {amountRealEastInter.toFixed(1)}% </li>
        <li>Energy: {amountEnergyInter.toFixed(1)}% </li>
        <li>Communication Services: {amountCommunicationInter.toFixed(1)}% </li>
        <li>Healthcare: {amountHealthcareInter.toFixed(1)}% </li>
        <li>Consumer Staples: {amountConsumerStaplesInter.toFixed(1)}% </li>
        <li>Consumer Discretionary: {amountConsumerDiscretionaryInter.toFixed(1)}% </li>
        <li>Information Technology: {amountITInter.toFixed(1)}% </li>
        <li>Utilities: {amountUtilitiesInter.toFixed(1)}% </li>
        <li>Financials: {amountUtilitiesInter.toFixed(1)}% </li>
        </ul>
        (NOTE: All percentages are rounded to 0.1)
        <div>Data fetched from <a href='https://interactions-json.herokuapp.com/api'>this API</a> </div>
      </div>
    );
  }
}
