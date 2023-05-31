import React, { Component } from 'react';


class HeaderComponents extends Component {
    constructor(props) {
        super(props)

        this.state={

        }
    }

    render() {
        return (
            <div>
                <header className='header'>
                    {/* <nav className='navbar navbar-expand-md navbar-dark bg-dark' >
                        <div><a href='https://contact.net' className='navbar-brand' style={{textAlign: "center"}}>Employee Management</a></div>
                    </nav> */}
                    <h1 className="header-text">Employee Management</h1>
                </header>
            </div>
        );
    }
}

export default HeaderComponents;