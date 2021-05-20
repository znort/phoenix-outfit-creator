import React, {Component} from 'react'
import '../../styles/dashboard.scss';
import Layout from '../layout'


const style = {
    height: '32rem',
    width: '48rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
    backgroundColor: 'white'
};

class Canvas extends Component {

    render() {
        return (
            <div class="container outfit-generator">
                <div class="aside">
                    <h1>Outfit generator</h1>
                    <p>Do you feel like you’ve been stuck in a rut lately in terms of fashion or what to wear?</p>
                    <p>Wouldn’t it be great if you had a M&S outfit generator that you could use to get some
                        inspiration!</p>
                    <p>All you’d have to do is click the ‘Generate outfit!’ button.</p>
                    <h2 class="outfit-generator__heading">Why not create your own outfit?</h2>
                    <p>You can create different looks using M&S products or can simply upload an item and find
                        suggestions to create an outfit.</p>
                    <a href="#" class="button button--arrow button-outfit-builder">Outfit builder</a>
                </div>
                <div class="main">
                    <Layout/>
                </div>
                <div class="outfit-actions">
                    <ul>
                        {/*<!-- <li class="action action--shop"><span class="acc-text">Shop the outfit</span></li> -->*/}
                        {/*<!-- <li class="action action--like"><span class="acc-text">Like the outfit</span></li> -->*/}
                        <li class="action action--share"><span class="acc-text">Share the outfit</span></li>
                        <li class="action action--settings"><span class="acc-text">Outfit settings</span></li>
                    </ul>
                </div>
            </div>


        )
    }
}


export default Canvas