import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {

    state = {
        series: [],
        seriesName: '',
        isFetching: false
      }
    
      onSeriesInputChange = e => {
        
        this.setState({seriesName: e.target.value, isFetching: true})

        fetch(`http://api.tvmaze.com/search/shows?q=${ e.target.value }`)
          .then(response => response.json())
          .then(json => this.setState({ series : json, isFetching : false }))
    
      }

    render(){

        const { series, seriesName, isFetching } = this.state;

        return (

            <div className="series-list">
                The length of series array - {series.length}
                <div>
                    <input type="text" value = { seriesName } onChange = { this.onSeriesInputChange  } />
                </div>
                {
                    series.length === 0 && seriesName.trim() === ''
                    && <p>Please enter series name</p>
                }
                {
                    series.length === 0 && seriesName.trim() !== ''
                    && <p>No TV series have been found with this name</p>
                }
                {
                    isFetching && <p>Loading...</p>
                }
                {
                    !isFetching && <SeriesList list = { series } />
                }
                
            </div>
            
        )
    }
}

export default Series;