import React from 'react'

export const Response = ( { info } ) =>
{
    return (
        <div className="result">
            <ul>
                <li>Current Date: {info.current_date} <br /></li>
                <li>Compatibility: {info.compatibility} <br /></li>
                <li> Lucky Number: {info.lucky_number} <br /></li>
                <li> Lucky Time: {info.lucky_time} <br /></li>
                <li>Color: {info.color} <br /></li>
                <li>Date Range: {info.date_range} <br /></li>
                <li>Mood: {info.mood} <br /></li>
                <li>Description: {info.description} <br /></li>
            </ul>
        </div>
    )
}
