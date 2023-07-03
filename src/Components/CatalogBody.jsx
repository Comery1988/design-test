import React from "react";
import CatalogItem from "./CatalogItem";

class CatalogBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { onsale: "ON SALE", image: "images/items/item01.jpg", name: "Blue Partyhat", game: "images/games/game01.jpg", price: "$450.00", oldprice: "$522.50", description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr." },
                { onsale: "ON SALE", image: "images/items/item01.jpg", name: "Blue Partyhat", game: "images/games/game01.jpg", price: "$450.00", oldprice: "$522.50", description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr." },
                { onsale: "ON SALE", image: "images/items/item01.jpg", name: "Blue Partyhat", game: "images/games/game01.jpg", price: "$450.00", oldprice: "$522.50", description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr." },
                { onsale: "ON SALE", image: "images/items/item02.jpg", name: "Blue Partyhat", game: "images/games/game02.jpg", price: "$450.00", oldprice: "$522.50", description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr." },
                { onsale: "ON SALE", image: "images/items/item02.jpg", name: "Blue Partyhat", game: "images/games/game02.jpg", price: "$450.00", oldprice: "$522.50", description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr." },
                { onsale: "ON SALE", image: "images/items/item02.jpg", name: "Blue Partyhat", game: "images/games/game02.jpg", price: "$450.00", oldprice: "$522.50", description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr." },
                { onsale: "ON SALE", image: "images/items/item03.jpg", name: "Blue Partyhat", game: "images/games/game03.jpg", price: "$450.00", oldprice: "$522.50", description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr." },
                { onsale: "ON SALE", image: "images/items/item03.jpg", name: "Blue Partyhat", game: "images/games/game03.jpg", price: "$450.00", oldprice: "$522.50", description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr." },
                { image: "images/items/item03.jpg", name: "Blue Partyhat", game: "images/games/game03.jpg", description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr." },
                { image: "images/items/item04.jpg", name: "Blue Partyhat", game: "images/games/game04.jpg", description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr." },
                { image: "images/items/item04.jpg", name: "Blue Partyhat", game: "images/games/game04.jpg", description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr." },
                { image: "images/items/item04.jpg", name: "Blue Partyhat", game: "images/games/game04.jpg", description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr." },
                { image: "images/items/item05.jpg", name: "Blue Partyhat", game: "images/games/game05.jpg", description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr." },
                { image: "images/items/item05.jpg", name: "Blue Partyhat", game: "images/games/game05.jpg", description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr." },
                { image: "images/items/item05.jpg", name: "Blue Partyhat", game: "images/games/game05.jpg", description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr." }
            ]
        };
    }

    render(){
        return (
        <React.Fragment>
            <section className='catalog'>
                {this.state.items.map((element, item) => {
                    return(
                        <CatalogItem onsale={element.onsale} image={element.image} name={element.name} 
                        game={element.game} price={element.price} oldprice={element.oldprice} description={element.description} />
                        )
                    })}
                
            </section>
        </React.Fragment>
        )
    }
}

export default CatalogBody;