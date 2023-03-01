import Skeleton from '@mui/material/Skeleton'
import { useState, useEffect } from "react";
import ItemStats from '../itemStats'
import Item from '../materiel'
import { ITEMS } from '../../constants/data'
import React from 'react';

const items = function (Category) {
    if (Category == null || Category == '') {
        {
            return ITEMS
                .filter(item => item.available)
                .map(item => (
                    <Item
                        key={item.id}
                        item={item}
                    />))
        }
    }
    else {
        {
            return ITEMS
                .filter(item => item.category == Category)
                .map((item) =>
                (<Item
                    key={item.id}
                    item={item}
                />
                ))
        }
    }
}

const SkeletonBreadcrumb = () => (
    <span style={{
        height: '4%',
    }}>
        <Skeleton variant="text"
            width="30%"
            height='80%'
            sx={{
                marginLeft: '5%',
                marginTop: '1.5%',
            }} />
    </span>)

const SkeletonItem = () => (
    <Skeleton variant="rounded"
        width="45%"
        height='15%'
        sx={{
            marginLeft: '1%',
            marginTop: '3%',
        }} />)

function randomTime(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export default function Skelette({ page }) {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, randomTime(500, 1000))
    }, [])

    return (
        <>
            {loading ? (<>

                <SkeletonBreadcrumb />
                {[...Array(8).keys()].map((item) => (<SkeletonItem key={item} />))}

            </>) : (<><ItemStats Category={page} /> {items(page)}
            </>)}
        </>
    )
}