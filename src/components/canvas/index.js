import React, {Component} from 'react'
import Layout from '../layout'

class Canvas extends Component {

    render() {
        return (
            <div class="container outfit-generator">
                <div class="aside">
                    <h1 class="logo">
                        <img src="images/outfit-logo.svg" width="240" />
                         generator
                    </h1>
                    <p>Do you feel like you’ve been stuck in a rut lately in terms of fashion or what to wear?</p>
                    <p>Wouldn’t it be great if you had a M&S outfit generator that you could use to get some inspiration!</p>
                    <p>All you’d have to do is click the ‘Generate outfit!’ button.</p>
                    <h2 class="outfit-generator__heading">Why not create your own outfit?</h2>
                    <p>You can create different looks using M&S products or can simply upload an item and find suggestions to create an outfit.</p>
                    <a href="#" class="button button--arrow button-outfit-builder">Outfit builder</a>
                </div>
                <Layout/>
            </div>
        )
    }
}


export default Canvas
