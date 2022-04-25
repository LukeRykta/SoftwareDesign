import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ItemCard from "../../components/ItemCard";
import {getAllItems} from "../../services/itemService";

const FitPage = () => {
    const banner = "Welcome to the Fitness Page";
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems();
    }, [])

    async function getItems() {
        const response = await getAllItems();
        setItems(response.data);
    }

    return(
        <div className="FitnessBackground">
            <div className="container mt-5">
                <div className="px-5 py-2 form-label  itemCard" style={{backgroundColor: 'rgba(255,131,100,1)'}}>
                    <h2>Fitness Page</h2>
                    <p className="blockquote">{banner}</p>
                </div>
                <div className="container">
                    <div className="row">
                        {items.map((item) => (
                            <div key={item._id} className="px-5 my-3 col-lg-4 col-md-6 col-sm-12">
                                { item.track === "fitness" &&(
                                    <ItemCard obj={item} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FitPage;