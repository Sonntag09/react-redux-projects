import React, { Component } from 'react';

import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import SwapiService from '../../services/SwapiService';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';

import './PeoplePage.css';


export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3    
  };  

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>
        {(i) => (`${i.name} (${i.birthYear})`)}
      </ItemList>
    );

    const personDetails = (
      <ItemDetails itemId={this.state.selectedPerson}
      getData={this.swapiService.getPerson}
      getImageUrl={this.swapiService.getPersonImage} />
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
