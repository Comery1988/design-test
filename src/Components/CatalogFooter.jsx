import React from "react";
import PageLink from "./PageLink";

class CatalogFooter extends React.Component {
    render(){
        return (
        <React.Fragment>
            <div>
                <ul className="pagination">
                    <PageLink text={"<"} type={"page-change"} url={"#"} />
                    <PageLink text={"1"} class={"active"} type={"page-number"} />
                    <PageLink text={"2"} type={"page-number"} url={"#"} />
                    <PageLink text={"3"} type={"page-number"} url={"#"} />
                    <PageLink text={"4"} type={"page-number"} url={"#"} />
                    <PageLink text={"..."} />
                    <PageLink text={"11"} type={"page-number"} url={"#"} />
                    <PageLink text={">"} type={"page-change"} url={"#"} />
                </ul>
            </div>
        </React.Fragment>
        )
    }
}

export default CatalogFooter;