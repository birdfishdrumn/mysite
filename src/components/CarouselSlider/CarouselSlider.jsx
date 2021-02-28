import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'

import { CarouselImage } from "./style";

function Item(props)
{
    // console.log(props.item)
    return (
        <>

            {/* <h2>{props.item.name}</h2> */}


            <CarouselImage  fluid={props.item.img.childImageSharp.fluid} />
            </>
    )
}


const CarouselSlider = ({img}) =>
{
    var items = [
        {
            name: "絵付け体験",
            description: "Probably the most random thing you have ever seen!",
            img:img
        },
        {
            name: "ガラス吹き体験",
            description: "Hello World!",
            img:img
        }
    ]

    return (
        <Carousel
            navButtonsAlwaysVisible="true"
            interval="8000"
            animation="slide"

        >

            {items.map( (item, i) => <Item key={i} item={item}  /> )}
        </Carousel>
    )
}

export default CarouselSlider
