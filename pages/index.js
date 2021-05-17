import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import React from 'react'
import {Article} from "../components/article.jsx";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Canvas } from '../components/canvas'
import { Board } from '../components/Board'
import {getSortedArticlesData} from "../lib/articles";
import { Interactions } from "../lib/interactions";
import { useMemo } from 'react';

export async function getStaticProps() {
    const articles = getSortedArticlesData()
    return {
        props: {
            articles
        }
    }
}

export default function Home({ articles }) {
    const interactions = useMemo(() => new Interactions(), []);
    return (
        <Layout>
            <Head>
                <title>Outfit Creator</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <DndProvider backend={HTML5Backend}>
                    <Board articles={articles} interactions={interactions}/>
				</DndProvider>
            </main>
        </Layout>
    )
}
