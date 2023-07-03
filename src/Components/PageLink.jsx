import React from "react";

class PageLink extends React.Component {
    render(){
        return (
        <React.Fragment>
            <li className={(this.props.class != undefined) ? "page-item " + this.props.class : "page-item " } >
                <a href={this.props.url} className={this.props.type}>
                    <span>{this.props.text}</span>
                </a>
            </li>
        </React.Fragment>
        )
    }
}

export default PageLink;