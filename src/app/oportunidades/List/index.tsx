'use client'

import {
    aboutInfo,
  } from '../data';
import {useEffect, useState} from "react";
import useScrollPosition from "@/hooks/useScrollPosition";
import useFeedList from "@/hooks/useFeedList";
import useFilter from "@/hooks/useFilter";
import objectToURLParams from "@/helpers/objectToURLParams";
import getURLParameters from "@/helpers/getURLParameters";
import Dump from "@/impacte/Dump";
import { OpportunitiesPage } from '../opportunitiesPage';

interface ListProps {
    cities: any;
    status: any;
  }

export default function List({ cities, status }: ListProps){
    const [getMoreItems, setMoreItems] = useState(true)
    const {isScrolledToElement} = useScrollPosition('get-more-items')
    const {feed, loading, nextPage, fetchData, fetchMoreData} = useFeedList('oportunidades-feed')
     const {query, handleTerm} = useFilter({
         search: '',
     })
/* eslint-disable react-hooks/exhaustive-deps */
     useEffect(() => {
         if (objectToURLParams(getURLParameters()) !== '') {
            // @ts-ignore
            fetchData(objectToURLParams(getURLParameters()))
         } else {
            fetchData(query)
         }
     }, [query])
/* eslint-disable react-hooks/exhaustive-deps */
    const handleURLParametersChange = () => {
        if (objectToURLParams(getURLParameters()) !== '') {
            // @ts-ignore
            fetchData(objectToURLParams(getURLParameters()))
        } else {
            fetchData(query)
        }
    };

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
            <OpportunitiesPage
                aboutInfo={aboutInfo}
                cities={cities}
                status={status}
                enterprises={feed}
                loading={loading}
                onURLParametersChange={handleURLParametersChange} 
            />
        </>
    )
}