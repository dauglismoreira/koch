'use client'

import {blogInfo} from "../data";
import {BlogPage} from "../blogPage";
import {useEffect, useState} from "react";
import useScrollPosition from "@/hooks/useScrollPosition";
import useFeedList from "@/hooks/useFeedList";
import useFilter from "@/hooks/useFilter";
import objectToURLParams from "@/helpers/objectToURLParams";
import getURLParameters from "@/helpers/getURLParameters";
import Dump from "@/impacte/Dump";

export default function List(){
    const [getMoreItems, setMoreItems] = useState(true)
    const {isScrolledToElement} = useScrollPosition('get-more-items')
    const {feed, loading, nextPage, fetchData, fetchMoreData} = useFeedList('blog-feed')
    const {query, handleTerm} = useFilter({
        search: '',
    })
/* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        if (query) {
            fetchData(query)
        } else {
            fetchData(objectToURLParams(getURLParameters()))
        }
    }, [query])
/* eslint-disable react-hooks/exhaustive-deps */
    

    if (isScrolledToElement && getMoreItems && nextPage) {
        fetchMoreData(query)
        setMoreItems(false)
    }

    if (!isScrolledToElement && !getMoreItems) {
        setMoreItems(true)
    }

    return (
        <>
            {/* <Dump obj={feed}/> */}

            <BlogPage
                blogInfo={blogInfo}
                data={feed}
                loading={loading}
            />
        </>
    )
}
