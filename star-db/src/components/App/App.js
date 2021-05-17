import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';

import './App.css';

import SwapiService from '../../services/SwapiService';
import ErrorBoundry from '../ErrorBoundry';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';

import { SwapiServiceProvider } from '../swapiServiceContext';

import {
  PersonList, StarshipList, PlanetList,
  PersonDetails, PlanetDetails, StarshipDetails
} from '../swComponents';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

    const { getPerson, getStarship,
      getPersonImage, getStarshipImage,
      getAllPeople, getAllPlanets } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}>

        <Record field='gender' label='Gender' />
        <Record field='eyeColor' label='Eye Color' />

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}>

        <Record field='model' label='Model' />
        <Record field='length' label='Length' />
        <Record field='costInCredits' label='Cost' />

      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />
            {planet}

            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}>
              Toggle Random Planet
            </button>

            <PersonDetails itemId={11} />

            <PlanetDetails itemId={5} />

            <StarshipDetails itemId={9} />

            <PersonList />

            <PlanetList />

            <StarshipList />


          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
