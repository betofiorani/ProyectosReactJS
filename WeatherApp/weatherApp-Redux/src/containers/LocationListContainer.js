import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../actions';
import { getCity, getWeatherCities} from './../reducers'
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    componentDidMount() {
        const {setWeather, setSelectedCity, cities, city} = this.props;
        setWeather(cities);
        setSelectedCity(city);
    }
    
  
    handleSelectedLocation = city => {
      
        this.props.setSelectedCity(city);
    }
      

    render() {
        return (
            <LocationList cities={this.props.citiesWeather} 
                onSelectedLocation={this.handleSelectedLocation} >
            </LocationList>
        )
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city:PropTypes.string.isRequired,
}

/* esto es lo mismo que hacer bindActionCreators
const mapDispatchToProps = dispatch => (
    { 
        setCity: value => dispatch(setSelectedCity(value)),
        setWeather: cities => dispatch(setWeather(cities))
    }
  );  
*/

const mapDispatchToProps = dispatch => bindActionCreators(actions,dispatch);

const mapStateToProps = state => (
    {
        citiesWeather: getWeatherCities(state),
        city: getCity(state)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
