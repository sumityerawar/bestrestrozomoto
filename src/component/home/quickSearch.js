import React, { Component } from "react";
import QuickDisplay from "./quickDisplay";

const quickUrl = "https://zomatoajulypi.herokuapp.com/quicksearch";

class QuickSearch extends Component {
    constructor() {
        super();
        this.state = {
            quickData:''
        }
    }

    render() {
        return (
            <div id="QuickSearch">
                <span id="QuickHeading">
                    Quick Searches
                </span>
                <span id="QuickSubHeading">
                    Discover Hotels By Meal Type
                </span>
                <QuickDisplay quickData={this.state.quickData}/>
            </div>
        )
    }

    componentDidMount(){
        fetch(quickUrl, {method: 'GET'})
        .then((res) => res.json())
        .then((data) => this.setState({quickData:data}))
    }

}

export default QuickSearch;