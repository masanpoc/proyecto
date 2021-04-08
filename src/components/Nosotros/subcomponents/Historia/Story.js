import React from 'react';
import intro from '../images/intro.jpg';

export const Story = ({ title, paragraph, image }) => {
    return (
        <div className='story'>
            <div className='story-title'>
                {title}
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nisl leo molestie ipsum, lacus. Curabitur donec cras. */}
            </div>
            {/* {story} */}
            <div className='content'>
                <p className='paragraph'>
                    {paragraph[0]}
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum maecenas consectetur amet purus accumsan viverra viverra. Dui lorem nibh dis eget fermentum. Elementum vulputate magna vitae, ut sollicitudin enim sed.<b> Aliquam sit eu sit in ac, eget cursus luctus. In sed venenatis, sagittis adipiscing semper sit eu ornare. </b> */}
                </p>
                <p className='paragraph'>
                    {paragraph[1]}
                    {/* Augue sed lectus phasellus erat. Ipsum euismod felis tortor, porttitor sit gravida. Vel viverra est lorem quisque mattis ac penatibus mauris. Auctor 1989 mattis pharetra in adipiscing tellus sed massa id. Egestas potenti enim ut adipiscing purus scelerisque. */}
                </p>
                <p className='paragraph'>
                    {paragraph[2]}
                    {/* Amet, consequat mi morbi sagittis id vestibulum suspendisse nec. Curabitur quam pharetra sit tincidunt tincidunt. <b> Quam odio rhoncus malesuada aliquam arcu amet </b> vulputate nibh est. Fermentum urna, id nunc eget. Lec */}
                </p>
                <p className='paragraph'>
                    {paragraph[3]}
                    {/* Tus tellus lacus consectetur bibendum vitae. Et <b><i> “purus sed tellus sed” </i></b> suspendisse faucibus leo at. Id molestie auctor urna feugiat enim varius in quis nulla. Amet, feugiat leo lacus eget. Auctor amet mattis facilisis ut sit.
                    Tortor magna quisque adipiscing integer ultrices. Purus turpis blandit nunc. */}
                </p>
            </div>
            <img alt='img-story' src={image} className='story-img' />
            
        </div>
    )
}
