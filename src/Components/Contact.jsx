import React, {Component} from 'react';
import {connect} from "react-redux";

class Contact extends Component {
    render() {

        if (!this.props.data) return (<div/>)

        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1><span>Get In Touch.</span></h1>
                    </div>
                    <div className="ten columns">
                        <p className="lead">{this.props.data.message}</p>
                    </div>
                </div>
                <form action="" method="post" id="contactForm" name="contactForm">
                        <div className="row">
                            <div className="six columns">
                                <div>
                                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                                    <input type="text" defaultValue="" size="35" id="contactName" name="contactName"
                                           onChange={this.handleChange}/>
                                </div>
                                <div>
                                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                    <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail"
                                           onChange={this.handleChange}/>
                                </div>
                                <div>
                                    <label htmlFor="contactSubject">Subject</label>
                                    <input type="text" defaultValue="" size="35" id="contactSubject"
                                           name="contactSubject" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="five columns">
                                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                <textarea cols="50" rows="10" id="contactMessage" name="contactMessage"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="six columns">
                                <button className="submit">Submit</button>
                                <span id="image-loader">
                                        <img alt="" src="images/loader.gif"/>
                                    </span>
                                <div id="message-warning"> Error boy</div>
                                <div id="message-success">
                                    <i className="fa fa-check"/>Your message was sent, thank you!<br/>
                                </div>
                            </div>
                        </div>
                </form>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        visible: state.visible,
        opaque: state.opaque
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setOpaque: () => dispatch({type: "SET_OPAQUE"}),
        setTransparent: () => dispatch({type: "SET_TRANSPARENT"})
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
