import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

const url = "http://developerjwt.herokuapp.com/api/auth/userinfo"
class Header extends Component {
    constructor() {
        super()

        this.state = {
            userdata: ''
        }
    }

    handleLogout = () => {
        this.setState({ userdata: '' })
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('rtk')
        sessionStorage.removeItem('userdata')
        this.props.history.push('/')

    }

    conditionalHeader = () => {
        if (this.state.userdata.name) {
            let data = this.state.userdata;
            let outputArray = [data.name, data.email, data.phone, data.role];
            sessionStorage.setItem('userdata', outputArray)
            return (
                <>
                    <li><a>Hi {outputArray[0]}</a></li>
                    <li>
                        <button onClick={this.handleLogout} style={{marginTop:12}}>
                            Log-Out
                        </button>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                    <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </>
            )
        }

    }

    render() {
        return (
            <>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to="/" className="navbar-brand">Developer Restaurant</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/viewBooking">MyOrders</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                {this.conditionalHeader()}
                            </ul>
                        </div>
                    </div>
                </nav>
                <hr />
            </>
        )
    }

    componentDidMount() {
        if(sessionStorage.getItem('ltk')){
        fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': sessionStorage.getItem('ltk')
            }
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    userdata: data
                })
            })
        }
    }
}
export default withRouter(Header);