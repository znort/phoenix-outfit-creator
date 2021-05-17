import utilStyles from "../styles/utils.module.css";
import {Article} from "./article";
import {Canvas} from "./canvas";
// import React from "react";
import {getSortedArticlesData} from '../lib/articles'

export const Board = ({articles, interactions}) => (<div>
        <div>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Outfit Creator</h2>
                <div className={utilStyles.carousel}>
                    <ul className={utilStyles.list}>
                        {articles.map(({articleId, imageUrl}) => (
                            <Article name={articleId} imageUrl={imageUrl}/>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
        <div>
            <Canvas allowedDropEffect="any" interactions={interactions}/>
        </div>
    </div>
);