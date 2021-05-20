import React, {Component} from 'react'

class ProductSelector extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         articleIndex: 0,
    //         article: this.props.articles[0]
    //     }
    //     // console.log(this.props.articles);
    //     this.handleClick = this.handleClick.bind(this)
    // }
    //
    // handleClick(){
    //     let newIndex = this.state.articleIndex + 1;
    //     if (newIndex>3) newIndex = 0;
    //     // console.log("HANDLE " + newIndex)
    //
    //     this.setState({
    //         articleIndex: newIndex,
    //         article: this.props.articles[newIndex]
    //     })
    //
    //     // console.log(this.state.article)
    // }

    render() {
        // const {article} = this.state;
        return (
            <section id="flyout_add_items" className="transition hide_flyout">
                <div className="flyout_heading">
                    <h1>Add items</h1>
                    <div id="close_flyout_add_items" className="close_flyout_add_items transition"
                         title="Hide menu">
                        <svg id="close_sparks_card_svg" className="transition" data-name="close_flyout"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                            <g id="close_flyout" data-name="close_flyout">
                                <g id="_320" data-name="320">
                                    <g id="Overlay">
                                        <polygon id="close"
                                                 points="1.44 0 9.07 7.63 16.56 0.14 18 1.59 10.51 9.07 18 16.55 16.55 18 9.07 10.51 1.59 18 0.14 16.56 7.63 9.07 0 1.44 1.44 0"></polygon>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <ul id="flyout_menu_list">
                    <li>
                        <p>
                            <svg version="1.1" id="image_upload_icon" xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 17 20" class="image_upload_icon" xmlSpace="preserve">
                                <g id="Item-1">
                                    <g id="Fly-out---Add-items-_x28_default_x29_"
                                       transform="translate(-1059.000000, -109.000000)">
                                        <g id="filter-list-item" transform="translate(1059.000000, 108.000000)">
                                            <g id="Image" transform="translate(0.000000, 1.000000)">
                                                <path id="Shape" className="st0" d="M16.6,4.5l-3.8-3.9C12.5,0.3,12.1,0,11.6,0H1.3C0.6,0,0,0.6,0,1.4v17.3C0,19.4,0.6,20,1.3,20
                  h14.3c0.4,0.1,0.7-0.1,1-0.3c0.3-0.3,0.4-0.6,0.3-1V5.9C17,5.4,16.9,4.9,16.6,4.5L16.6,4.5z M13,2.8l1.7,1.8H13V2.8z M11.6,1.4
                  L11.6,1.4L11.6,1.4l0,4.5h4v4.9l-2.4-1.4c-0.3-0.2-0.6-0.1-0.8,0.1l-3.7,4.2l-3.1-1.2c-0.2-0.1-0.5,0-0.7,0.2l-3.5,3.6V1.4H11.6
                  z M1.3,18.6v-0.4h0L5.5,14l3.2,1.2c0.3,0.1,0.5,0,0.7-0.2l3.7-4.1l2.5,1.5v6.3H1.3z"/>
                                                <path id="Shape_1_" className="st0" d="M6,9c1.1,0,2-0.9,2-2S7.1,5,6,5S4,5.9,4,7S4.9,9,6,9L6,9z M6,6.2c0.4,0,0.8,0.4,0.8,0.8
                  S6.4,7.8,6,7.8S5.2,7.4,5.2,7S5.6,6.2,6,6.2z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>

                            Upload Photo
                        </p>
                        <svg version="1.1" id="plus_icon" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 17 17" class="plus_icon" xmlSpace="preserve">
                            <g id="Item-2">
                                <g id="Fly-out---Add-items-_x28_default_x29_"
                                   transform="translate(-1404.000000, -110.000000)">
                                    <polygon id="_x2B_" points="1413.5,126.1 1413.5,119 1420.6,119 1420.6,117.4 1413.5,117.4 1413.5,110.3 1412,110.3 1412,117.4
              1404.8,117.4 1404.8,119 1412,119 1412,126.1 		"/>
                                </g>
                            </g>
                        </svg>
                    </li>
                    <li>
                        <p>
                            <svg version="1.1" id="magnifying_glass_icon" xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 19 21" class="magnifying_glass_icon" xmlSpace="preserve">
                                <g id="Item-3">
                                    <g id="Fly-out---Add-items-_x28_default_x29_"
                                       transform="translate(-1059.000000, -184.000000)">
                                        <g id="Search" transform="translate(1059.000000, 184.000000)">
                                            <path id="Shape" className="st0" d="M18.8,19.7L14.3,15c3.2-3.3,3.3-8.7,0.2-12.1S6.4-1,3,2.1s-4,8.4-1.2,12.1s7.8,4.5,11.4,1.8
                  l4.6,4.8c0.3,0.3,0.7,0.3,1,0C19.1,20.5,19.1,20,18.8,19.7L18.8,19.7z M1.6,8.8c0-4,3.1-7.2,6.8-7.2s6.8,3.2,6.8,7.2
                  S12.2,16,8.4,16S1.6,12.8,1.6,8.8z"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            Search Item
                        </p>
                    </li>
                    <li id="wishlist_li">
                        <p>Wish List</p>
                        <img className="chevron transition" src="chevron.png"/>
                    </li>
                    <li id="wishlist_items" className="flyout_menu_items" class="wishlist_items">
                        <div className="summary">
                            <p className="items_text"><span className="items_tally">28</span> Items</p>
                            <p className="see_all">See all</p>
                        </div>
                        <ul>
                            <li>
                                <div className="item_circle"></div>
                                <img
                                    src="https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T07_3295_T4_X_EC_90?$PRD_ORD_REVIEW$"/>
                            </li>
                            <li>
                                <div className="item_circle"></div>
                                <img
                                    src="https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T30_1615A_J0_X_EC_90?$PRD_ORD_REVIEW$"/>
                            </li>
                            <li>
                                <div className="item_circle"></div>
                                <img
                                    src="https://asset1.marksandspencer.com/is/image/mands/SD_03_T07_6985_F4_X_EC_90?wid=570&qlt=40"/>
                            </li>
                            <li>
                                <div className="item_circle"></div>
                                <img
                                    src="https://asset1.marksandspencer.com/is/image/mands/SD_03_T07_5396_SA_X_EC_90?wid=570&qlt=40"/>
                            </li>
                            <li>
                                <div className="item_circle"></div>
                                <img
                                    src="https://asset1.marksandspencer.com/is/image/mands/SD_03_T70_3797F_F0_X_EC_90?wid=570&qlt=40"/>
                            </li>
                            <li>
                                <div className="item_circle"></div>
                                <img
                                    src="https://asset1.marksandspencer.com/is/image/mands/SD_01_T57_6141_F0_X_EC_90?wid=570&qlt=40"/>
                            </li>
                        </ul>
                    </li>
                    <li id="purchase_history_li">
                        <p>Purchase History</p>
                        <img className="chevron transition" src="chevron.png"/>
                    </li>
                    <li id="purchase_history_items" className="flyout_menu_items" class="purchase_history_items">
                        <div className="summary">
                            <p className="items_text"><span className="items_tally">64</span> Items</p>
                            <p className="see_all">See all</p>
                        </div>
                        <ul>
                            <li>
                                <div className="item_circle"></div>
                                <img
                                    src="https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T07_3295_T4_X_EC_90?$PRD_ORD_REVIEW$"/>
                            </li>
                            <li>
                                <div className="item_circle"></div>
                                <img
                                    src="https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T30_1615A_J0_X_EC_90?$PRD_ORD_REVIEW$"/>
                            </li>
                            <li>
                                <div className="item_circle"></div>
                                <img
                                    src="https://asset1.marksandspencer.com/is/image/mands/SD_03_T07_6985_F4_X_EC_90?wid=570&qlt=40"/>
                            </li>
                            <li>
                                <div className="item_circle"></div>
                                <img
                                    src="https://asset1.marksandspencer.com/is/image/mands/SD_03_T07_5396_SA_X_EC_90?wid=570&qlt=40"/>
                            </li>
                            <li>
                                <div className="item_circle"></div>
                                <img
                                    src="https://asset1.marksandspencer.com/is/image/mands/SD_03_T70_3797F_F0_X_EC_90?wid=570&qlt=40"/>
                            </li>
                            <li>
                                <div className="item_circle"></div>
                                <img
                                    src="https://asset1.marksandspencer.com/is/image/mands/SD_01_T57_6141_F0_X_EC_90?wid=570&qlt=40"/>
                            </li>
                        </ul>
                    </li>
                    <li id="recently_viewed_li">
                        <p>Recently Viewed</p>
                        <img className="chevron transition" src="chevron.png"/>
                    </li>
                    <li id="recently_viewed_items" className="flyout_menu_items" class="recently_viewed_items">
                        <div className="summary">
                            <p className="items_text"><span className="items_tally">12</span> Items</p>
                            <p className="see_all">See all</p>
                        </div>
                        <ul>
                            <li>
                                <div className="item_circle"></div>
                                <img
                                    src="https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T07_3295_T4_X_EC_90?$PRD_ORD_REVIEW$"/>
                            </li>
                            <li>
                                <div className="item_circle"></div>
                                <img
                                    src="https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T30_1615A_J0_X_EC_90?$PRD_ORD_REVIEW$"/>
                            </li>
                            <li>
                                <div className="item_circle"></div>
                                <img
                                    src="https://asset1.marksandspencer.com/is/image/mands/SD_03_T07_6985_F4_X_EC_90?wid=570&qlt=40"/>
                            </li>
                            <li>
                                <div className="item_circle"></div>
                                <img
                                    src="https://asset1.marksandspencer.com/is/image/mands/SD_03_T07_5396_SA_X_EC_90?wid=570&qlt=40"/>
                            </li>
                            <li>
                                <div className="item_circle"></div>
                                <img
                                    src="https://asset1.marksandspencer.com/is/image/mands/SD_03_T70_3797F_F0_X_EC_90?wid=570&qlt=40"/>
                            </li>
                            <li>
                                <div className="item_circle"></div>
                                <img
                                    src="https://asset1.marksandspencer.com/is/image/mands/SD_01_T57_6141_F0_X_EC_90?wid=570&qlt=40"/>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div id="flyout_cta">
                    <p>Add Item</p>
                </div>

            </section>
        )
    }
}

export default ProductSelector






