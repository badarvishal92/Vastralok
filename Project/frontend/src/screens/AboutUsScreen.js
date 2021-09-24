import React from 'react'
import onlineshopping from './online-shopping.png.jpeg';

function AboutUsScreen() {
    return (
        <div>
            <div class="aboutus container">
                <h3> AboutUs </h3>
                <div id="content" class="item">
                    <p id="contentpara" class="para">Vastralok is The Online Clothing store. Here we provide the
                        finest and best quality clothes of all finest brands. We will act as a bridge between users and
                        Cloth vendors. We take the headache out of trying to choose the clothes from shops or from the vendors
                        who are selling many category of products, this is why we have come up with the store that only deals in selling
                        the best clothing products.The Online Clothing Store application enables vendors to set up online shops,
                        customers to browse through the shops, and a system administrator to approve and reject requests for new
                        shops and maintain lists of shop categories. Also the developer is designing an online shopping site to
                        manage the items in the shop and also help customers to purchase them online without visiting the shop physically.
                        The online shopping system will use the internet as the sole method for selling goods to its consumers. </p>
                </div>
                <div id="image" class="item">
                    <img src={onlineshopping} width="100%" alt="shopping_image" />
                </div>
            </div>

        </div>
    )
};

export default AboutUsScreen;