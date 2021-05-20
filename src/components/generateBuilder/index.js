import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/dashboard.scss';
import BuilderLayout from './builder'


class GenerateOutfit extends Component {
    render() {
        return (
            <div class="container outfit-generator">
                <div class="aside">
                    <h1 class="logo">
                        <img src="images/outfit-logo.svg" width="240" />
                         builder
                    </h1>
                    <p>Do you feel like you’ve been stuck in a rut lately in terms of fashion or what to wear?</p>
                    <p>Wouldn’t it be great if you had a M&S outfit generator that you could use to get some inspiration!</p>
                    <p>All you’d have to do is click the ‘Generate outfit!’ button.</p>
                    <h2 class="outfit-generator__heading">Inspire Me</h2>
                    <p>Wouldn’t it be great if you had a M&S outfit generator that you could use to get some inspiration!</p>
                    <Link to="/" class="button button--arrow button-outfit-builder">Outfit generator <svg width="20px" height="15px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>Artboard</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path d="M35.741396,19.8364357 L24.3137825,8.2488712 C23.9586168,7.91704293 23.4071122,7.91704293 23.0519465,8.2488712 C22.8867978,8.40649089 22.7933583,8.62483688 22.7933583,8.8531307 C22.7933583,9.08142452 22.8867978,9.2997705 23.0519465,9.4573902 L33.0755453,19.6053953 L4.88861691,19.6053953 C4.6623161,19.5957693 4.44147744,19.6765375 4.27478506,19.8298945 C4.10809269,19.9832515 4.00923309,20.1966057 4,20.4229229 C4.00466572,20.6539009 4.10092074,20.8735595 4.26757938,21.0335518 C4.43423801,21.1935441 4.65764081,21.280757 4.88861691,21.2759951 L33.0400006,21.2759951 L23.0164019,31.4240002 C22.8512531,31.5816199 22.7578137,31.7999659 22.7578137,32.0282597 C22.7578137,32.2565535 22.8512531,32.4748995 23.0164019,32.6325192 C23.3715676,32.9643475 23.9230722,32.9643475 24.2782379,32.6325192 L35.7058513,21.0449547 C35.8856248,20.8982681 35.9928324,20.6807382 35.9996537,20.4488137 C36.006475,20.2168893 35.9122376,19.9934345 35.741396,19.8364357 Z" id="Path" fill="#000000" fill-rule="nonzero"></path>
                        </g>
                    </svg> </Link>
                </div>
                <BuilderLayout />
            </div>
        )
    }
}

export default GenerateOutfit
